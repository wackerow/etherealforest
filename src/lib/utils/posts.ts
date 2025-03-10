import { BlogParams } from "../types"
import removeMd from "remove-markdown"
import { MAX_WORDS_PER_POST_PREVIEW } from "@/lib/constants"

export const getPostParamsFromFilename = (filename: string): BlogParams => {
  if (!filename.endsWith(".md"))
    throw new Error(
      `Invalid blog post filename: ${filename}. Must end in ".md"`
    )

  const post = filename.replace(".md", "")
  return { post }
}

export const getPostURL = (file: string) => {
  const { post } = getPostParamsFromFilename(file)
  return `/${post}`
}

export const getSlicedContent = (content: string, maxLength: number = 125) => {
  const SLICED_TEXT = content.split(" ").slice(0, maxLength).join(" ")

  if (content.includes("\n#") && content.indexOf("\n#") >= 0)
    return content
      .slice(0, content.indexOf("\n#"))
      .split(" ")
      .slice(0, maxLength)
      .join(" ")
  if (content.includes("<h") && content.indexOf("<h") >= 0)
    return content
      .slice(0, content.indexOf("<h"))
      .split(" ")
      .slice(0, maxLength)
      .join(" ")

  // if content has no headings, cut the text to 125 words max (END = 125 by default)
  return SLICED_TEXT
}

export const sanitizePostPreviewContent = (content: string): string => {
  const contentNoImages = content.replace(/!\[.*?\]\(.*?\)/g, "") // Rm images
  const mdRemoved = removeMd(contentNoImages)
  const truncatedContent = getSlicedContent(mdRemoved)
  const wordArray: string[] = truncatedContent.split(" ")
  const isTooLong: boolean = wordArray.length > MAX_WORDS_PER_POST_PREVIEW
  const sliceEnd: number = isTooLong
    ? MAX_WORDS_PER_POST_PREVIEW
    : wordArray.length
  return wordArray.slice(0, sliceEnd).join(" ") + (isTooLong ? "..." : "")
}
