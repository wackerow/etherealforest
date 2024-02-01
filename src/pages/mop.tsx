import {
  Box,
  type BoxProps,
  Container as ChakraContainer,
  Flex,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react"

import { PageMetadata } from "@/components/PageMetadata"

const Container = (props: BoxProps) => (
  <ChakraContainer maxW="container.md" {...props} />
)

const Mop = () => {
  const background = useColorModeValue(
    "url(assets/bg10.png)",
    "url(assets/bg5.png)"
  )
  return (
    <>
      <PageMetadata
        title="Ministry of Propaganda"
        description="Homepage for the Ethereal Forest Ministry of Propaganda"
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
        <Flex bg="" bgSize="">
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
              Ministry of Propaganda
            </Heading>
          </Container>
        </Flex>

        <Container>
          <Image src={"/assets/1.png"} alt="The city is a cypher poster" />
        </Container>
      </Box>
    </>
  )
}

export default Mop
