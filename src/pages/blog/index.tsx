import fs from "fs"
import path from "path"

import { GetStaticProps, InferGetStaticPropsType } from "next"
import matter from "gray-matter"

import { PageMetadata } from "@/components/PageMetadata"

import { BLOG_POSTS_DIR } from "@/lib/constants"
import { Frontmatter } from "@/lib/types"
import { slugify } from "@/lib/utils/slugify"
import { Link } from "@/components/Link"
import { getPostURL, sanitizePostPreviewContent } from "@/lib/utils/posts"
import { MarkdownProvider } from "@/components/Markdown/Provider"

type PostData = {
  frontmatter: Frontmatter
  content: string
  postPath: string
}

type Props = { posts: PostData[] }

export const getStaticProps = (async () => {
  const files = fs.readdirSync(BLOG_POSTS_DIR)
  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_POSTS_DIR, filename)
    const file = fs.readFileSync(filePath, "utf-8")
    const { data: frontmatter, content } = matter(file)
    if (new Date(frontmatter.publishDate).toString() === "Invalid Date")
      throw new Error(
        `Invalid publishDate in frontmatter for file: ${filePath} - ${
          !!frontmatter.publishDate
            ? "format not recognized: " + frontmatter.publishDate
            : "publishDate front matter field is required"
        }`
      )
    const postPath = getPostURL(filename)
    return { frontmatter, content, postPath } as PostData
  })
  return {
    props: { posts },
  }
}) satisfies GetStaticProps<Props>

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // Sort newest posts to the top
  const handleSort = (a: PostData, b: PostData) =>
    new Date(b.frontmatter.publishDate).getTime() -
    new Date(a.frontmatter.publishDate).getTime()

  return (
    <>
      <PageMetadata title="Blog" description="Blog for the Ethereal Forest" />

      <main className="max-w-screen-lg mx-auto pb-16 bg-white dark:bg-black">
        <div className="container max-w-screen-md mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-wide uppercase text-body pt-8 md:pt-12 pb-24 md:pb-12">
            Blog
          </h1>
        </div>
        <ul className="m-0">
          {posts
            .sort(handleSort)
            .map(
              (
                { frontmatter: { title, publishDate }, content, postPath },
                index
              ) => {
                const id = slugify(title)
                const dateString = Intl.DateTimeFormat("en", {
                  dateStyle: "long",
                  timeZone: "UTC",
                }).format(new Date(publishDate))
                return (
                  <li className="list-none" key={index}>
                    <div className="container max-w-screen-md mx-auto px-4">
                      <Link
                        href={path.join("blog", postPath)}
                        className="text-body underline"
                      >
                        <h2
                          id={id}
                          className="text-4xl mt-12 md:mt-16 font-normal relative scroll-mt-28 tracking-tight"
                          data-group
                        >
                          {title}
                        </h2>
                      </Link>
                      <p className="mb-6 text-xl">{dateString}</p>
                      <p className="mb-8 text-xl">{sanitizePostPreviewContent(content)}</p>
                    </div>
                  </li>
                )
              }
            )}
        </ul>
      </main>
    </>
  )
}

export default Blog
