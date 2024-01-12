export const isExternal = (href: string): boolean =>
  href.startsWith("http") ||
  href.startsWith("mailto:") ||
  href.startsWith("ipfs")

export const isHrefActive = (
  href: string,
  pathname: string,
  isPartiallyActive?: boolean
) => {
  // remove any potential trailing slash to compare the paths correctly
  const cleanHref = href.replace(/\/+$/, "")

  return isPartiallyActive
    ? pathname.startsWith(cleanHref)
    : pathname === cleanHref
}

export const isHash = (href: string): boolean => href.startsWith("#")