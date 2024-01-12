import { Link } from '@/components/Link'
import {
  Flex,
  type FlexProps,
  IconButton,
  useColorMode,
  useColorModeValue,
  useToken,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { NavLink } from '@/lib/types'

export type NavProps = FlexProps & {
  items: NavLink[]
}
export const Nav = ({ items, ...props }: NavProps) => {
  const { toggleColorMode } = useColorMode()
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />)
  const insetInlineEnd = useToken('space', '4')
  return (
    <Flex
      justify="center"
      alignItems="center"
      gap="8"
      p="4"
      position="relative"
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
        onClick={toggleColorMode}
        aria-label="Toggle color mode"
      />
    </Flex>
  )
}

export const MobileNav = (props: NavProps) => (
  <Nav direction="column" {...props} />
)
