import { Link } from "@/components/Link"
import {
  Flex,
  type FlexProps,
  IconButton,
  useColorMode,
  useColorModeValue,
  useToken,
  Box,
} from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { NavLink } from "@/lib/types"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

type NavItemsProps = { items: NavLink[] }

const NavItems = ({ items }: NavItemsProps) => {
  const { toggleColorMode } = useColorMode()
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />)
  const insetInlineEnd = useToken("space", "4")
  return (
    <Flex alignItems="center" justifyContent={{ base: "column", md: "row" }} gap="8" p="4">
      {items.map(({ name, href }) => (
        <Link key={href} href={href} color="body">
          {name}
        </Link>
      ))}
      <IconButton
        style={{ insetInlineEnd }}
        w="fit-content"
        icon={icon}
        variant="ghost"
        onClick={toggleColorMode}
        aria-label="Toggle color mode"
      />
    </Flex>
  )
}

export type NavProps = FlexProps & {
  items: NavLink[]
}
export const Nav = ({ items, ...props }: NavProps) => {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(true)

  const beginAnimationYPosition = 72
  useEffect(() => {
    addEventListener(
      "scroll",
      () => {
        setHidden(scrollY.get() < beginAnimationYPosition)
      },
      { passive: true }
    )
    // remove event listener on return
    return () =>
      removeEventListener("scroll", () => {
        setHidden(scrollY.get() < beginAnimationYPosition)
      })
  }, [scrollY])

  const titleOpacity = useTransform(
    scrollY,
    [beginAnimationYPosition, 96],
    [0, 1]
  )

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
        justify="space-between"
        alignItems="center"
        maxW="container.lg"
        mx="auto"
        {...props}
      >
        <motion.div style={{ opacity: titleOpacity }}>
          <Link href="/" color="body" pointerEvents={hidden ? "none" : "unset"}>
            Ethereal Forest
          </Link>
        </motion.div>
        <NavItems items={items} />
      </Flex>
    </Box>
  )
}

export const MobileNav = (props: NavProps) => (
  <Nav direction="column" {...props} />
)
