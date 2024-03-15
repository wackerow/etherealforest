import fs from "fs"
import matter from "gray-matter"
import type { GetStaticPaths, InferGetStaticPropsType } from "next"
import { BLOG_POSTS_DIR } from "@/lib/constants"
import { getPostParamsFromFilename, getPostURL } from "@/lib/utils/posts"
import type { PostPath } from "@/lib/types"
import { ParsedUrlQuery } from "querystring"
import { ButtonGroup, Container, Heading, Spacer } from "@chakra-ui/react"
import { MdComponents } from "@/components/MdComponents"
import { MarkdownProvider } from "@/components/MarkdownProvider"
import { ButtonLink } from "@/components/ButtonLink"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"

// Generate the paths for each blog post
export const getStaticPaths: GetStaticPaths = () => {
  // Check if any .md post file exists, don't generate the paths otherwise
  if (!fs.existsSync(BLOG_POSTS_DIR)) return { paths: [], fallback: false }

  const paths: PostPath[] = []
  // Get list of all files from our blog posts directory
  const files = fs.readdirSync(BLOG_POSTS_DIR)
  // Generate a path for each one
  files.forEach((file) => {
    if (!file.endsWith(".md")) return
    const params = getPostParamsFromFilename(file)
    if (params) {
      paths.push({ params })
    }
  })
  // Return list of paths
  return { paths, fallback: false }
}

export const getStaticProps = async (context: any) => {
  const { post } = context.params as ParsedUrlQuery
  const files = fs.readdirSync(BLOG_POSTS_DIR).sort().reverse()
  const filePath = `${BLOG_POSTS_DIR}/${post}.md`
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
  const postPath = getPostURL(filePath)

  return {
    props: {
      frontmatter,
      content,
      postPath,
      availableURLs: files.map((file) => getPostURL(file)),
    },
  }
}

const BlogPost = ({
  frontmatter: { title, publishDate },
  content,
  postPath,
  availableURLs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const index = availableURLs.findIndex((url) => postPath.includes(url))
  const nextPostUrl =
    index + 1 < availableURLs.length ? availableURLs[index + 1] : null
  const prevPostUrl = index - 1 >= 0 ? availableURLs[index - 1] : null

  const dateString = Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(publishDate))

  return (
    <Container>
      <Heading
        as="h2"
        mt={{ base: 12, md: 16 }}
        mb={{ base: 4, md: 6 }}
        fontWeight="normal"
        data-group
        scrollMarginTop={28}
        position="relative"
      >
        {title}
      </Heading>
      <MdComponents.p>{dateString}</MdComponents.p>
      <MarkdownProvider>{content}</MarkdownProvider>
      <ButtonGroup w="full" justifyContent="space-between">
        {prevPostUrl ? (
          <ButtonLink
            href={"/blog" + prevPostUrl}
            leftIcon={<ChevronLeftIcon />}
          >
            Newer
          </ButtonLink>
        ) : (
          <Spacer />
        )}
        {nextPostUrl ? (
          <ButtonLink
            href={"/blog" + nextPostUrl}
            rightIcon={<ChevronRightIcon />}
          >
            Older
          </ButtonLink>
        ) : (
          <Spacer />
        )}
      </ButtonGroup>
    </Container>
  )
}

export default BlogPost
