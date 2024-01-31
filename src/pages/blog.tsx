import {
  Box,
  type BoxProps,
  Container as ChakraContainer,
  Flex,
  Heading,
  Image,
  type ImageProps,
  ListItem,
  Text,
  type TextProps,
  UnorderedList,
  useColorModeValue,
  ListIcon,
  Button,
  VisuallyHidden,
  Icon,
} from "@chakra-ui/react"
import { ImNewspaper } from "react-icons/im"
import { FaRegCalendar, FaRegCalendarCheck } from "react-icons/fa"

import { PageMetadata } from "@/components/PageMetadata"
import { Link } from "@/components/Link"
import { TbBrandTwitter, TbMailForward } from "react-icons/tb"
import { CgHello } from "react-icons/cg"

const TextBlock = (props: TextProps) => {
  return <Text my="16" fontSize="lg" lineHeight="tall" {...props} />
}

const Container = (props: BoxProps) => (
  <ChakraContainer maxW="container.md" {...props} />
)

const Home = () => {
  const background = useColorModeValue(
    "url(assets/bg10.png)",
    "url(assets/bg5.png)"
  )
  return (
    <>
      <PageMetadata
        title="Blog"
        description="Blog for the Ethereal Forest"
      />

      <Box
        as="main"
        maxW="container.lg"
        mx="auto"
        _after={{
          content: '""',
          position: "fixed",
          inset: 0,
          zIndex: -1,
          background: background,
          backgroundSize: "cover",
        }}
      >
        <Flex
          bg=""
          bgSize=""
          // h="256px"
        >
          <Container>
            <Heading
              as="h1"
              fontSize="4xl"
              fontWeight="normal"
              letterSpacing="wide"
              textTransform="uppercase"
              color="whiteAlpha.900"
              pt={{ base: "8", md: "12" }}
              pb={{ base: "24", md: "24" }}
            >
              Blog
            </Heading>
          </Container>
        </Flex>x

        <Container>
          <TextBlock>
            TEST
          </TextBlock>
        </Container>
      </Box>
    </>
  )
}

export default Home
