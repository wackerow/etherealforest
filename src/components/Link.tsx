import React, { forwardRef } from "react"
import NextLink from "next/link"
import { cn } from "@/lib/utils"
import * as url from "@/lib/utils/url"
import { Mail, SquareArrowOutUpRight } from "lucide-react"

type BaseProps = {
  href: string
  className?: string
  isPartiallyActive?: boolean
  hideIcon?: boolean
  isExternal?: boolean
  target?: string
  rel?: string
}

export type LinkProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

export const BaseLink = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, children, hideIcon, className, isPartiallyActive = true, ...props },
  ref
) {
  const commonProps = {
    ref,
    className: cn("text-primary hover:text-primary hover:underline", className),
    ...props,
    href,
  }

  if (url.isMailto(href)) {
    return (
      <a {...commonProps}>
        {children}
        <span className="sr-only">(opens with email provider)</span>
        {!hideIcon && (
          <Mail className="inline-block align-middle p-1 text-2xl" />
        )}
      </a>
    )
  }

  if (url.isPdf(href)) {
    return (
      <a {...commonProps} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="sr-only">(opens PDF in separate tab)</span>
      </a>
    )
  }

  if (url.isExternal(href)) {
    return (
      <a {...commonProps} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="sr-only">(opens in a new tab)</span>
        {!hideIcon && (
          <SquareArrowOutUpRight className="inline-block align-middle p-1 text-2xl -mr-1" />
        )}
      </a>
    )
  }

  if (url.isHash(href)) return <a {...commonProps}>{children}</a>

  return (
    <NextLink {...commonProps} legacyBehavior={false}>
      {children}
    </NextLink>
  )
})

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <BaseLink ref={ref} data-inline-link {...props} />
))

// Add display name to fix the ESLint error
Link.displayName = "Link"