import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import ReactMarkdown from "react-markdown"
import rehypeSlug from "rehype-slug"
import remarkBreaks from "remark-breaks"
import gfm from "remark-gfm"
import removeComments from "remark-remove-comments"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypeRaw from 'rehype-raw'

import { MdComponents } from "./MdComponents"

export const MarkdownProvider = (props: { children: string }) => (
  <ReactMarkdown
    components={ChakraUIRenderer(MdComponents)}
    remarkPlugins={[remarkMath, gfm, remarkBreaks, removeComments]}
    rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings, rehypeKatex, rehypeRaw]}
    {...props}
  />
)
