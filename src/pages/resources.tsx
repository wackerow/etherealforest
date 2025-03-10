import fs from "fs"
import path from "path"

import type { GetStaticProps, InferGetStaticPropsType } from "next"
import matter from "gray-matter"

import { PageMetadata } from "@/components/PageMetadata"
import { RESOURCES_MARKDOWN_PATH } from "@/lib/constants"
import { MarkdownProvider } from "@/components/Markdown/Provider"

type Props = { content: string }

export const getStaticProps = (async () => {
  const contentPath = path.join(process.cwd(), RESOURCES_MARKDOWN_PATH)
  if (!fs.existsSync(contentPath))
    throw new Error("Resources markdown file not found")
  const file = fs.readFileSync(contentPath, "utf-8")
  const { content } = matter(file)
  return { props: { content } }
}) satisfies GetStaticProps<Props>

const Resources = ({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageMetadata
        title="Resources"
        description="Informational resources related to Ethereal Forest"
      />

      <main className="max-w-screen-lg mx-auto">
        <div className="container max-w-screen-md mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-wide uppercase text-body pt-8 md:pt-12">
            Resources
          </h1>

          <MarkdownProvider>{content}</MarkdownProvider>
        </div>
      </main>
    </>
  )
}

export default Resources
