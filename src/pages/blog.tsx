import fs from "fs"
import path from "path"

import matter from "gray-matter"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import gfm from "remark-gfm"

import {
  Box,
  type BoxProps,
  Container as ChakraContainer,
  Flex,
  Heading,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react"

import { PageMetadata } from "@/components/PageMetadata"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { BLOG_POSTS_DIR } from "@/lib/constants"
import { Frontmatter } from "@/lib/types"
import { Fragment } from "react"
import { MdComponents } from "@/components/MdComponents"
import ReactMarkdown from "react-markdown"

const Container = (props: BoxProps) => (
  <ChakraContainer maxW="container.md" {...props} />
)

type PostData = {
  frontmatter: Frontmatter
  content: string
}

type Props = { posts: PostData[] }

export const getStaticProps = (async () => {
  const files = fs.readdirSync(BLOG_POSTS_DIR) // .sort().reverse()
  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_POSTS_DIR, filename)
    const file = fs.readFileSync(filePath, "utf-8")
    const { data: frontmatter, content } = matter(file)
    // data.frontmatter.publishDate = new Date(
    //   data.frontmatter.publishDate
    // ).toISOString()
    return { frontmatter, content } as PostData
  })
  return {
    props: { posts },
  }
}) satisfies GetStaticProps<Props>

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const background = useColorModeValue(
    "url(assets/bg10.png)",
    "url(assets/bg5.png)"
  )
  return (
    <>
      <PageMetadata title="Blog" description="Blog for the Ethereal Forest" />

      <Box
        as="main"
        maxW="container.lg"
        mx="auto"
        _after={{
          content: '""',
          position: "fixed",
          inset: 0,
          zIndex: -1,
          background: background,
          backgroundSize: "cover",
        }}
      >
        <Flex
          bg=""
          bgSize=""
          // h="256px"
        >
          <Container>
            <Heading
              as="h1"
              fontSize="4xl"
              fontWeight="normal"
              letterSpacing="wide"
              textTransform="uppercase"
              color="body"
              pt={{ base: "8", md: "12" }}
              pb={{ base: "24", md: "24" }}
            >
              Blog
            </Heading>
          </Container>
        </Flex>
        {posts
          .reverse()
          // .sort(
          //   (a, b) =>
          //     new Date(b.frontmatter.publishDate).getTime() -
          //     new Date(a.frontmatter.publishDate).getTime()
          // )
          .map(
            (
              { frontmatter: { title /* , publishDate */ }, content },
              index
            ) => (
              <Fragment key={index}>
                <Container>
                  <Heading
                    as="h2"
                    mt={{ base: 12, md: 16 }}
                    mb={{ base: 4, md: 6 }}
                    fontWeight="normal"
                  >
                    {title}
                  </Heading>
                  {/* <Text fontSize="sm">{new Date(publishDate).toDateString()}</Text> */}
                  <ReactMarkdown
                    components={ChakraUIRenderer(MdComponents)}
                    remarkPlugins={[gfm]}
                  >
                    {content}
                  </ReactMarkdown>
                </Container>
                {index < posts.length - 1 && <Divider my="16" />}
              </Fragment>
            )
          )}
      </Box>
    </>
  )
}

export default Blog
