import NextImage from "next/image"
import {
  Box,
  type BoxProps,
  Container as ChakraContainer,
  Flex,
  Heading,
  Text,
  type TextProps,
  ButtonGroup,
  Button,
} from "@chakra-ui/react"
import { FaFilePdf } from "react-icons/fa"

import { Link } from "@/components/Link"
import { PageMetadata } from "@/components/PageMetadata"

import assetData from "@/data/mop"
import * as url from "@/lib/utils/url"

const TextBlock = (props: TextProps) => {
  return <Text mb="9" fontSize="lg" lineHeight="short" {...props} />
}

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
          <TextBlock>
            Ministry of Propaganda is Ethereal Forest’s visual media contingent.
            All media is created for the benefit of the ecosystem; as we grow
            this library, please feel free to make use of its materials to
            whatever purposes you see fit.
          </TextBlock>
        </Container>

        {assetData.map(({ title, src, grayUrl, colorUrl }, index) => {
          const buttons = [
            { href: grayUrl, label: "B&W" },
            { href: colorUrl, label: "Color" },
          ]
          return (
            <Container key={title} mb="4">
              <NextImage
                src={src}
                alt={title}
                placeholder="blur"
                priority={index === 0}
              />
              <ButtonGroup mt="4">
                {buttons.map(
                  ({ href, label }) =>
                    href && (
                      <Button
                        key={title + label}
                        as={Link}
                        href={href}
                        rightIcon={url.isPdf(href) ? <FaFilePdf /> : undefined}
                        variant="outline"
                        borderRadius="none"
                        hideIcon
                        isExternal
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
                        {label}
                      </Button>
                    )
                )}
              </ButtonGroup>
            </Container>
          )
        })}
      </Box>
    </>
  )
}

export default Mop
