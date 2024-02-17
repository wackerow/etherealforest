import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import ReactMarkdown from "react-markdown"
import rehypeSlug from "rehype-slug"
import remarkBreaks from "remark-breaks"
import gfm from "remark-gfm"
import removeComments from "remark-remove-comments"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

import { MdComponents } from "./MdComponents"

export const MarkdownProvider = (props: { children: string }) => (
  <ReactMarkdown
    components={ChakraUIRenderer(MdComponents)}
    remarkPlugins={[gfm, remarkBreaks, removeComments]}
    rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
    {...props}
  />
)
