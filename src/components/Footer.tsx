import { Divider, Container, Icon, Text } from "@chakra-ui/react"
import { TbMailForward, TbBrandTwitter } from "react-icons/tb"

import { Link } from "@/components/Link"

export const Footer = () => (
  <>
    <Divider mt="16" mb="8" bgColor="body" />

    <Container as="footer">
      <Text lineHeight="base">
        <Icon
          as={TbMailForward}
          boxSize="6"
          p="1"
          verticalAlign="middle"
          ps="0"
        />
        Email
        <Link
          display="block"
          href="mailto:etherealforest.eth@protonmail.com"
          hideIcon
        >
          etherealforest.eth@protonmail.com
        </Link>
      </Text>

      <Text lineHeight="base">
        <Icon
          as={TbBrandTwitter}
          boxSize="6"
          p="1"
          verticalAlign="middle"
          ps="0"
        />
        Twitter
        <Link display="block" hideIcon href="https://twitter.com/ETHForestDAO">
          @ETHForestDAO
        </Link>
      </Text>
    </Container>
  </>
)
