import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import Twemoji from './Twemoji'

const ProfileCard = () => {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  const onMouseMove = useCallback((e) => {
    if (!ref.current || window.innerWidth < 1280) return

    const { clientX, clientY } = e
    const { width, height, x, y } = ref.current.getBoundingClientRect()
    const mouseX = Math.abs(clientX - x)
    const mouseY = Math.abs(clientY - y)
    const rotateMin = -15
    const rotateMax = 15
    const rotateRange = rotateMax - rotateMin

    const rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    }

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    })
  }, [])

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })
  }, [])

  useEffect(() => {
    const { current } = ref
    if (!current) return
    current.addEventListener('mousemove', onMouseMove)
    current.addEventListener('mouseleave', onMouseLeave)
    return () => {
      if (!current) return
      current.removeEventListener('mousemove', onMouseMove)
      current.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [onMouseLeave, onMouseMove])

  return (
    <>
      <div
        className="z-10 mb-8 scale-100 transition-all duration-200 ease-out hover:z-50 xl:mb-0 xl:hover:scale-[1.15]"
        style={{ perspective: '600px' }}
        ref={ref}
      >
        <div
          style={style}
          className="dark:bg-dark flex flex-col overflow-hidden bg-white shadow-cyan-100/50 transition-all duration-200 ease-out dark:shadow-cyan-700/50 xl:rounded-lg xl:shadow-lg"
        >
          <Image
            src={'/static/images/dp.jpg'}
            alt="avatar"
            width="150px"
            height="350px"
            className="object-cover"
            objectPosition="50% 16%"
          />
          <ProfileInfo />
          <span className="h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        </div>
      </div>
    </>
  )
}

const ProfileInfo = () => (
  <div className="hidden py-4 xl:block xl:px-6">
    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Pruthvi Duvva</h1>
    <p className="py-2 text-gray-700 dark:text-gray-400">Learner | Builder</p>
    <div className="mt-4 flex items-center text-gray-700 dark:text-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>

      <p className="px-2 text-[15px]">Building features</p>
    </div>

    <div className="mt-4 flex items-center text-gray-700 dark:text-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <p className="px-2 text-[15px]">vi4.triumph@gmail.com</p>
    </div>
    <div className="mt-4 flex items-center text-gray-700 dark:text-gray-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
      <p className="px-2 text-[15px]">
        <a target="_blank" href="https://github.com/ViaTriumph" rel="noreferrer">
          gh/viatriumph
        </a>
        ,{' '}
        <a target="_blank" href="https://twitter.com/" rel="noreferrer">
          tw/viatriumph
        </a>
      </p>
    </div>
  </div>
)

export default ProfileCard
