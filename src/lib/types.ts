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
