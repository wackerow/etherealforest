import { useRouter } from 'next/router'
import { TbMailForward } from 'react-icons/tb'
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

  const commonProps = {
    ref,
    ...props,
    ...(isActive && activeStyle),
    href,
  }

  if (url.isMailto(href)) {
    return (
      <ChakraLink {...commonProps}>
        {children}
        <VisuallyHidden>(opens with email provider)</VisuallyHidden>
        <Icon as={TbMailForward} boxSize="6" p="1" verticalAlign="middle" />
      </ChakraLink>
    )
  }

  if (url.isExternal(href)) {
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

  if (url.isHash(href))
    return <ChakraLink {...commonProps}>{children}</ChakraLink>

  return <NextLink {...commonProps}>{children}</NextLink>
})

export const Link = forwardRef((props: LinkProps, ref) => (
  <BaseLink data-inline-link ref={ref} {...props} />
))
