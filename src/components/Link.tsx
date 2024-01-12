import { useRouter } from 'next/router'
import { RxExternalLink } from 'react-icons/rx'
import {
  Link as NextLink,
  type LinkProps as NextLinkProps,
} from '@chakra-ui/next-js'
import {
  forwardRef,
  Icon,
  Link as ChakraLink,
  type StyleProps,
  VisuallyHidden,
} from '@chakra-ui/react'

import * as url from '@/lib/utils/url'

type BaseProps = {
  href: string
  hideArrow?: boolean
  isPartiallyActive?: boolean
  activeStyle?: StyleProps
}

export type LinkProps = BaseProps & NextLinkProps

/**
 * Link wrapper which handles:
 *
 * - Hashed links
 * e.g. <Link href="/page-2/#specific-section">
 *
 * - External links
 * e.g. <Link href="https://example.com/">
 *
 * - PDFs & static files (which open in a new tab)
 * e.g. <Link href="/eth-whitepaper.pdf">
 */
export const BaseLink = forwardRef(function Link(
  {
    href,
    children,
    hideArrow,
    isPartiallyActive = true,
    activeStyle = { color: 'primary' },
    ...props
  }: LinkProps,
  ref
) {
  const { asPath } = useRouter()

  const isActive = url.isHrefActive(href, asPath, isPartiallyActive)
  const isExternal = url.isExternal(href)
  const isHash = url.isHash(href)

  const commonProps = {
    ref,
    ...props,
    ...(isActive && activeStyle),
    href,
  }

  if (isExternal) {
    return (
      <ChakraLink isExternal {...commonProps}>
        {children}
        <VisuallyHidden>(opens in a new tab)</VisuallyHidden>
        {!hideArrow && (
          <Icon
            as={RxExternalLink}
            boxSize="6"
            p="1"
            verticalAlign="middle"
            me="-1"
          />
        )}
      </ChakraLink>
    )
  }

  if (isHash) return <ChakraLink {...commonProps}>{children}</ChakraLink>

  return <NextLink {...commonProps}>{children}</NextLink>
})

export const Link = forwardRef((props: LinkProps, ref) => (
  <BaseLink data-inline-link ref={ref} {...props} />
))
