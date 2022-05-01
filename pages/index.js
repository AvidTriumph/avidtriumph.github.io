import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'
import MyTwemoji from '@/components/MyTwemoji'
import TypedBios from '@/components/TypedBios'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const headingColorClass =
    'bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600'
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pr-8">
          <p
            className={`mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent ${headingColorClass} md:text-7xl md:leading-[86px]`}
          >
            Howdy, fellow! <i className="twa twa-waving-hand"></i>
          </p>

          <div className="text-lg text-gray-600 dark:text-gray-400">
            <h1 className="text-neutral-900 dark:text-neutral-200">
              I'm <span className="font-medium">Pruthvi Duvva</span>
            </h1>
            <TypedBios />
            <p className="mt-4 mb-8">
              Android developer <MyTwemoji emoji="man-laptop" /> | Muses a lot{' '}
              <MyTwemoji emoji="thinking" /> | Reads fiction as pastime <MyTwemoji emoji="books" />
            </p>
            <div className="flex flex-col">
              <Link href="/projects" className="hover:underline">
                <MyTwemoji emoji="hammer-and-wrench" /> What have I built?
              </Link>
              <Link href="/blog" className="hover:underline">
                <MyTwemoji emoji="memo" /> My writings
              </Link>
              <Link href="/about" className="hover:underline">
                <MyTwemoji emoji="face-with-monocle" /> More about me and myself
              </Link>
              <Link href="/resume" className="hover:underline">
                <MyTwemoji emoji="briefcase" /> My resume
              </Link>
            </div>
            <p className="my-8">
              Happy reading <MyTwemoji emoji="clinking-beer-mugs" />
            </p>
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
