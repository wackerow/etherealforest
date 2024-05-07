import fs from "fs"
import path from "path"

import { GetStaticProps, InferGetStaticPropsType } from "next"
import matter from "gray-matter"
import {
  Box,
  type BoxProps,
  Container as ChakraContainer,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"

import { PageMetadata } from "@/components/PageMetadata"

import { BLOG_POSTS_DIR } from "@/lib/constants"
import { Frontmatter } from "@/lib/types"
import { slugify } from "@/lib/utils/slugify"
import { MdComponents } from "@/components/MdComponents"
import { Link } from "@/components/Link"
import { getPostURL, sanitizePostPreviewContent } from "@/lib/utils/posts"
import { MarkdownProvider } from "@/components/MarkdownProvider"

const Container = (props: BoxProps) => (
  <ChakraContainer maxW="container.md" {...props} />
)

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

      <Box as="main" maxW="container.lg" mx="auto" pb="16">
        <Container>
          <Heading
            as="h1"
            fontSize="4xl"
            fontWeight="bold"
            letterSpacing="wide"
            textTransform="uppercase"
            color="body"
            pt={{ base: "8", md: "12" }}
            pb={{ base: "24", md: "12" }}
          >
            Blog
          </Heading>
        </Container>
        <UnorderedList m="0">
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
                  <ListItem listStyleType="none" key={index}>
                    <Container>
                      <Link
                        href={path.join("blog", postPath)}
                        color="body"
                        textDecoration="underline"
                      >
                        <Heading
                          as="h2"
                          id={id}
                          mt={{ base: 12, md: 16 }}
                          fontWeight="normal"
                          data-group
                          scrollMarginTop={28}
                          position="relative"
                        >
                          {title}
                        </Heading>
                      </Link>
                      <MdComponents.p>{dateString}</MdComponents.p>
                      <MarkdownProvider>
                        {sanitizePostPreviewContent(content)}
                      </MarkdownProvider>
                    </Container>
                  </ListItem>
                )
              }
            )}
        </UnorderedList>
      </Box>
    </>
  )
}

export default Blog
