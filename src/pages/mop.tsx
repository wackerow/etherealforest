import {
  Box,
  type BoxProps,
  Container as ChakraContainer,
  Flex,
  Heading,
  Image,
  ButtonGroup,
  Button,
} from "@chakra-ui/react"
import { Link } from "@/components/Link"
import { PageMetadata } from "@/components/PageMetadata"
import { FaFilePdf } from "react-icons/fa"

const Container = (props: BoxProps) => (
  <ChakraContainer maxW="container.md" {...props} />
)

const Mop = () => {
  return (
    <>
      <PageMetadata
        title="Ministry of Propaganda"
        description="Homepage for the Ethereal Forest Ministry of Propaganda"
      />

      <Box as="main" maxW="container.lg" mx="auto">
        <Flex bg="" bgSize="">
          <Container>
            <Heading
              as="h1"
              fontSize="4xl"
              fontWeight="bold"
              letterSpacing="wide"
              textTransform="uppercase"
              color="body"
              pt={{ base: "8", md: "12" }}
              pb={{ base: "24", md: "12" }}
            >
              Ministry of Propaganda
            </Heading>
          </Container>
        </Flex>

        <Container>
          <Image src={"/assets/1.png"} alt="The city is a cypher poster" />
          <ButtonGroup mt="4">
            <Button
              as={Link}
              href="/assets/cypher-bw.pdf"
              rightIcon={<FaFilePdf />}
              variant="outline"
              borderRadius="none"
              hideIcon
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
              mb="12"
              whiteSpace="break-spaces"
              h="fit-content"
              borderColor="primary"
            >
              Black and white
            </Button>
            <Button
              as={Link}
              href="/assets/cypher-color.pdf"
              rightIcon={<FaFilePdf />}
              variant="outline"
              borderRadius="none"
              hideIcon
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
              mb="12"
              whiteSpace="break-spaces"
              h="fit-content"
              borderColor="primary"
            >
              Color
            </Button>
          </ButtonGroup>
        </Container>
        <br />
        <Container>
          <Image
            src={"/assets/democracyiseatingfinance_color.png"}
            alt="Democracy is eating finance at web3 poster"
          />{" "}
          <ButtonGroup mt="4">
            <Button
              as={Link}
              href="/assets/democracyiseatingfinance_bw.png"
              variant="outline"
              borderRadius="none"
              hideIcon
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
              mb="12"
              whiteSpace="break-spaces"
              h="fit-content"
              borderColor="primary"
            >
              Black and white
            </Button>
            <Button
              as={Link}
              href="/assets/democracyiseatingfinance_color.png"
              variant="outline"
              borderRadius="none"
              hideIcon
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
              mb="12"
              whiteSpace="break-spaces"
              h="fit-content"
              borderColor="primary"
            >
              Color
            </Button>
          </ButtonGroup>
        </Container>
        <br />
      </Box>
    </>
  )
}

export default Mop
