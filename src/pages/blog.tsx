import fs from "fs"
import path from "path"

import { Fragment } from "react"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import matter from "gray-matter"
import {
  Box,
  type BoxProps,
  Container as ChakraContainer,
  Flex,
  Heading,
  Divider,
} from "@chakra-ui/react"

import { PageMetadata } from "@/components/PageMetadata"
import { IdAnchor } from "@/components/IdAnchor"
import { MarkdownProvider } from "@/components/MarkdownProvider"
import { MdComponents } from "@/components/MdComponents"

import { BLOG_POSTS_DIR } from "@/lib/constants"
import { Frontmatter } from "@/lib/types"
import { slugify } from "@/lib/utils/slugify"

const Container = (props: BoxProps) => (
  <ChakraContainer maxW="container.md" {...props} />
)

type PostData = {
  frontmatter: Frontmatter
  content: string
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
    return { frontmatter, content } as PostData
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
        <Flex
          bg=""
          bgSize=""
          // h="256px"
        >
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
        </Flex>
        {posts
          .sort(handleSort)
          .map(({ frontmatter: { title, publishDate }, content }, index) => {
            const id = slugify(title)
            const dateString = Intl.DateTimeFormat("en", {
              dateStyle: "long",
              timeZone: "UTC",
            }).format(new Date(publishDate))
            return (
              <Fragment key={index}>
                <Container>
                  <Heading
                    as="h2"
                    id={id}
                    mt={{ base: 12, md: 16 }}
                    mb={{ base: 4, md: 6 }}
                    fontWeight="normal"
                    data-group
                    scrollMarginTop={28}
                    position="relative"
                  >
                    <IdAnchor id={id} />
                    {title}
                  </Heading>
                  <MdComponents.p>{dateString}</MdComponents.p>
                  <MarkdownProvider>{content}</MarkdownProvider>
                </Container>
                {index < posts.length - 1 && <Divider my="16" />}
              </Fragment>
            )
          })}
      </Box>
    </>
  )
}

export default Blog
