import { useEffect, useRef, useState } from "react"
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons"
import {
  Flex,
  type FlexProps,
  IconButton,
  useColorMode,
  useColorModeValue,
  Box,
  useDisclosure,
} from "@chakra-ui/react"
import { useScroll } from "framer-motion"

import { Link } from "@/components/Link"

import { NavLink } from "@/lib/types"
import { useRouter } from "next/router"
import { MobileMenu } from "./MobileMenu"

export type NavProps = FlexProps & {
  items: NavLink[]
}
export const Nav = ({ items, ...props }: NavProps) => {
  const { asPath } = useRouter()
  const { toggleColorMode } = useColorMode()
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />)

  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const mobileDisclosures = useDisclosure()

  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(true)

  const isHomepage = asPath.replace(/[?#].*$/, "") === "/"
  useEffect(() => {
    const hideTitleAbove = 72
    const callback = () =>
      setHidden(scrollY.get() < hideTitleAbove && isHomepage)
    addEventListener("scroll", callback, { passive: true })
    return () => removeEventListener("scroll", callback)
  }, [scrollY, isHomepage])

  return (
    <Box
      as="nav"
      w="100vw"
      position="sticky"
      top="0"
      backdropFilter="blur(3px)"
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        bg: "bg",
        opacity: "0.9",
        boxShadow: "md",
      }}
      fontFamily="body"
      zIndex="sticky"
    >
      <Flex
        position="relative"
        alignItems="center"
        maxW="container.lg"
        mx="auto"
        p="4"
        {...props}
      >
        <Link href="/" color="body" display={hidden ? "none" : "block"}>
          Ethereal Forest
        </Link>
        <Flex alignItems="center" ms="auto">
          {/* Desktop nav items */}
          <Flex alignItems="center" gap="8" hideBelow="md" mx="8">
            {items.map(({ name, href }) => (
              <Link key={href} href={href} color="body">
                {name}
              </Link>
            ))}
          </Flex>

          {/* Color mode toggle */}
          <IconButton
            icon={icon}
            variant="ghost"
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
          />

          {/* Mobile nav hamburger menu */}
          <IconButton
            ref={hamburgerRef}
            hideFrom="md"
            icon={<HamburgerIcon />}
            variant="ghost"
            onClick={mobileDisclosures.onOpen}
            aria-label="Open navigation menu"
          />
          <MobileMenu items={items} disclosures={mobileDisclosures} />
        </Flex>
      </Flex>
    </Box>
  )
}

export const MobileNav = (props: NavProps) => (
  <Nav direction="column" {...props} />
)
