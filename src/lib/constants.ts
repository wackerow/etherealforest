import { NavLink } from "./types"

export const SITE_URL = "https://etherealforest.eth.limo"

export const NAV_LINKS: NavLink[] = [
  { name: "MoP", href: "/mop" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
  { name: "Newsletter", href: "https://paragraph.xyz/@etherealforest" },
  {
    name: "Docs",
    href: "https://docs.google.com/document/d/1idbZ_MV-HVLcLeECDDJPpOAYaB-3cm4bkOVOi6xJ3Mc/edit#heading=h.r38624di6ghh",
  },
]

export const BLOG_POSTS_DIR = "src/posts"

export const RESOURCES_MARKDOWN_PATH = "/public/content/resources.md"

export const MAX_WORDS_PER_POST_PREVIEW = 80 as const
