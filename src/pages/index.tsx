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
  ListIcon,
  Button,
  VisuallyHidden,
  Icon,
  Divider,
} from "@chakra-ui/react"
import { ImNewspaper } from "react-icons/im"
import { FaRegCalendar, FaRegCalendarCheck } from "react-icons/fa"

import { PageMetadata } from "@/components/PageMetadata"
import { Link } from "@/components/Link"
import { TbBrandTwitter, TbMailForward } from "react-icons/tb"
import { CgHello } from "react-icons/cg"

type WideImageProps = Omit<ImageProps, "alt" | "src"> & {
  src: string
  alt: string
}

const WideImage = ({ src, alt, ...props }: WideImageProps) => (
  <Image
    src={src}
    alt={alt}
    maxH="250px"
    maxW="full"
    minH="250px"
    my="16"
    style={{ objectFit: "cover" }}
    w="full"
    {...props}
  />
)

const TextBlock = (props: TextProps) => {
  return <Text mb="6" fontSize="lg" lineHeight="short" {...props} />
}

const Container = (props: BoxProps) => (
  <ChakraContainer maxW="container.md" {...props} />
)

const Home = () => {
  return (
    <>
      <PageMetadata
        title="Ethereal Forest"
        description="Homepage for Ethereal Forest"
      />

      <Box as="main" maxW="container.lg" mx="auto">
        <Flex
          bg="url(assets/hero.png)"
          bgSize="cover"
          // h="256px"
        >
          <Container>
            <Heading
              as="h1"
              fontSize="4xl"
              fontWeight="bold"
              letterSpacing="wide"
              textTransform="uppercase"
              color="whiteAlpha.900"
              pt={{ base: "8", md: "12" }}
              pb={{ base: "24", md: "24" }}
            >
              Ethereal Forest
            </Heading>
          </Container>
        </Flex>

        <Container>
          <TextBlock fontSize="2xl" lineHeight="short" mt="8">
            We are a Portland, Oregon based workgroup focused on{" "}
            <Text as="strong">
              localist applications of the decentralized web
            </Text>
          </TextBlock>

          <Button
            as={Link}
            href="https://paragraph.xyz/@etherealforest"
            rightIcon={<ImNewspaper />}
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
            Subscribe to Our Newsletter
          </Button>

          <TextBlock>
            Our mission is to identify interventions that might be made using
            tools and strategies from the DLT and p2p toolkit to help make the
            city a more open, pluralistic and peaceful place. This synergy
            between global peer production strategies and local implementation
            has been called{" "}
            <Link href="https://wiki.p2pfoundation.net/Cosmo-Localism">
              cosmo-localism
            </Link>
            .
          </TextBlock>

          <TextBlock>
            Our work takes the form of three main fronts,{" "}
            <Text as="strong">research</Text>,{" "}
            <Text as="strong">discovery</Text> and{" "}
            <Text as="strong">place-making</Text>. The team researches exotic
            social and economic forms that may embody or resonate with the web3
            toolkit, discovers examples of and use cases for those social and
            economic technologies, and builds community and infrastructure to
            support those experiments.
          </TextBlock>

          <TextBlock>
            We are a champion of localism and hope to build out infrastructure
            to reflect the shared insights of localist, regenerative economic
            thinking and the decentralized web space. It's under this shared
            insight that we emphasize principles of{" "}
            <Text as="strong">autonomy</Text> and fair self-determination,{" "}
            <Text as="strong">decentralization</Text> as a sustainability
            measure, <Text as="strong">financial pluralism</Text> and{" "}
            <Text as="strong">commons-oriented economics</Text>.
          </TextBlock>
        </Container>

        {/* <Box
          background="url(assets/mycelium-spirits.jpeg)"
          py="16"
          mb="12"
          mx="0"
          w="full"
          backgroundSize="contain"
        >
          <Container bg="alpha800" p="8">
            <TextBlock>
              Our work takes the form of three main fronts,{" "}
              <Text as="strong">research</Text>,{" "}
              <Text as="strong">discovery</Text> and{" "}
              <Text as="strong">place-making</Text>. The team researches exotic
              social and economic forms that may embody or resonate with the
              web3 toolkit, discovers examples of and use cases for those social
              and economic technologies, and builds community and infrastructure
              to support those experiments.
            </TextBlock>
          </Container>
        </Box>

        <Container>
          <TextBlock>
            We are a champion of localism and hope to build out infrastructure
            to reflect the shared insights of localist, regenerative economic
            thinking and the decentralized web space. It's under this shared
            insight that we emphasize principles of{" "}
            <Text as="strong">autonomy</Text> and fair self-determination,{" "}
            <Text as="strong">decentralization</Text> as a sustainability
            measure, <Text as="strong">financial pluralism</Text> and{" "}
            <Text as="strong">commons-oriented economics</Text>.
          </TextBlock>
        </Container> */}



        <br />
        <Container>
          <Image
            src={"/assets/gfel-end.png"}
            alt="General Forum on Ethereum Localism end"
          />
          <Text
            fontSize="medium"
            textAlign="center"
            mb="8"
            mt="2"
            fontWeight="thin"
            letterSpacing="normal"
          >
            A General Forum on Ethereum Localism 2023
          </Text>
        </Container>

        <Divider mt="16" mb="8" bgColor="body" />

        <Container>
          {/* <Heading
            fontSize="4xl"
            textAlign="center"
            mb="8"
            mt="16"
            fontWeight="normal"
            letterSpacing="wide"
          >
            Connect
          </Heading> */}
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
            <Link
              display="block"
              hideIcon
              href="https://twitter.com/ETHForestDAO"
            >
              @ETHForestDAO
            </Link>
          </Text>
        </Container>
      </Box>
    </>
  )
}

export default Home
