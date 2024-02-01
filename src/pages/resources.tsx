import {
  Box,
  type BoxProps,
  Container as ChakraContainer,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

import { PageMetadata } from "@/components/PageMetadata"

const Container = (props: BoxProps) => (
  <ChakraContainer maxW="container.md" {...props} />
)

const Resources = () => {
  const background = useColorModeValue(
    "url(assets/bg10.png)",
    "url(assets/bg5.png)"
  )
  return (
    <>
      <PageMetadata title="Blog" description="Blog for the Ethereal Forest" />

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
        <Container>
          <Heading
            as="h1"
            fontSize="4xl"
            fontWeight="normal"
            letterSpacing="wide"
            textTransform="uppercase"
            color="body"
            pt={{ base: "8", md: "12" }}
            pb={{ base: "24", md: "24" }}
          >
            Resources
          </Heading>
          <Text>
            Regenerative Agriculture Regenerative Finance Open Hardware Crypto
            How-to guides Aligned Philosophy P2p Organizational Tools Knowledge
            Commons Solidarity Economy Participatory Budgeting Systems
            Thinking/Cybernetics Portland Projects Hackerspaces Reuse and Repair
            Mutual Aid DeSci DeCiv
          </Text>
        </Container>

        <Container>
          <Text>Resources for Local DAOs</Text>
        </Container>
      </Box>
    </>
  )
}

export default Resources
