import { ImageProps } from "next/image"

// Page metadata
export type NameMeta = {
  name: string
  content: string
}

export type PropMeta = {
  property: string
  content: string
}

export type Meta = NameMeta | PropMeta

// Navigation links
export type NavLink = {
  name: string
  href: string
}

// Markdown
export type Frontmatter = {
  title: string
  publishDate: string
}

// Ministry of Propaganda images
export type MopItem = {
  title: string
  src: ImageProps["src"]
} & (
  | { grayUrl: string; colorUrl?: string }
  | { colorUrl: string; grayUrl?: string }
)
