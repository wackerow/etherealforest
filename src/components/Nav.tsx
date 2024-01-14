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

export type NavProps = FlexProps & {
  items: NavLink[]
}
export const Nav = ({ items, ...props }: NavProps) => {
  const { toggleColorMode } = useColorMode()
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />)
  const insetInlineEnd = useToken("space", "4")
  return (
    <Box
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
    >
      <Flex
        justify="center"
        alignItems="center"
        gap="8"
        p="4"
        position="sticky"
        top="0"
        maxW="container.lg"
        mx="auto"
        {...props}
      >
        {items.map(({ name, href }) => (
          <Link key={href} href={href}>
            {name}
          </Link>
        ))}
        <IconButton
          position="absolute"
          style={{ insetInlineEnd }}
          w="fit-content"
          icon={icon}
          variant="ghost"
          onClick={toggleColorMode}
          aria-label="Toggle color mode"
        />
      </Flex>
    </Box>
  )
}

export const MobileNav = (props: NavProps) => (
  <Nav direction="column" {...props} />
)
