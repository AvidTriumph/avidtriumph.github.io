import { useTheme } from 'next-themes'
import { useState, useEffect, useCallback } from 'react'
import Twemoji from './twemoji'

const ImageLightbox = ({ src, closeLightbox }) => {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [close, setClose] = useState(false)
  const { theme } = useTheme()

  const handleClose = useCallback(() => {
    setClose(true)
    document.documentElement.classList.remove('prevent-scroll', 'lightbox-loading')
    setTimeout(() => {
      closeLightbox()
    }, 300)
  }, [closeLightbox])

  const handleKeydown = useCallback(
    (e) => {
      if (e.key === 'Escape') handleClose()
    },
    [handleClose]
  )

  useEffect(() => {
    document.documentElement.classList.add('prevent-scroll')
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [handleKeydown])

  useEffect(() => {
    if (imgLoaded) {
      setTimeout(() => {
        document.documentElement.classList.remove('lightbox-loading')
      }, 150)
    }
  }, [imgLoaded])

  return (
    <div
      className="lightbox-overlay fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300 ease-out"
      style={{
        '--tw-bg-opacity': theme === 'dark' ? 0.7 : 0.8,
        opacity: !close && imgLoaded ? 1 : 0,
      }}
      onClick={handleClose}
      onKeyDown={handleKeydown}
      role="button"
      tabIndex={0}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="absolute inset-x-0 top-0 flex justify-between">
          <button className="p-4 text-xl text-white" onClick={handleClose}>
            Esc
          </button>
          <button className="p-4" onClick={handleClose}>
            <Twemoji emoji="cross-mark" />
          </button>
        </div>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src={src}
          onLoad={() => setImgLoaded(true)}
          className="max-h-[80vh] max-w-[90vw] cursor-[zoom-out]"
          alt="Lightbox"
        />
      </div>
    </div>
  )
}

export default ImageLightbox
