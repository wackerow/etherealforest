import { Button, ButtonProps, LinkProps } from "@chakra-ui/react"
import { Link } from "./Link"

type ButtonLinkProps = ButtonProps & Pick<LinkProps, "href">
export const ButtonLink = ({ href, children, ...props }: ButtonLinkProps) => (
  <Button
    as={Link}
    href={href}
    variant="outline"
    borderRadius="none"
    _hover={{
      textDecoration: "none",
      bg: "primaryLight",
    }}
    _active={{
      borderColor: "primaryHover",
      bg: "primaryHover",
    }}
    textDecoration="none"
    border="2px"
    px="6"
    py="4"
    // mb="12"
    whiteSpace="break-spaces"
    h="fit-content"
    borderColor="primary"
    {...props}
  >
    {children}
  </Button>
)
