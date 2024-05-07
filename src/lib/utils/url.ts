export const isExternal = (href: string): boolean =>
  href.startsWith("http") ||
  href.startsWith("mailto:") ||
  href.startsWith("ipfs")

// remove any potential trailing slash to compare the paths correctly
export const cleanHref = (href: string) => href.replace(/\/+$/, "")

export const isHrefActive = (
  href: string,
  pathname: string,
  isPartiallyActive?: boolean
) =>
  isPartiallyActive
    ? pathname.startsWith(cleanHref(href))
    : pathname === cleanHref(href)

export const isHash = (href: string): boolean => href.startsWith("#")

export const isMailto = (href: string): boolean => href.startsWith("mailto:")

export const isPdf = (href: string): boolean => href.endsWith(".pdf")
