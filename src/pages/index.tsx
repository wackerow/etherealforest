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
  const background = useColorModeValue(
    "url(assets/bg10.png)",
    "url(assets/bg5.png)"
  )
  return (
    <>
      <PageMetadata
        title="Ethereal Forest"
        description="Homepage for Ethereal Forest"
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
            href="#"
            rightIcon={<ImNewspaper />}
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
            has been called <Text as="strong">cosmo-localism</Text>.
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

        <Divider my="16" bgColor="body" />

        <Container>
          <Heading
            fontSize="4xl"
            textAlign="center"
            mb="8"
            mt="16"
            fontWeight="bold"
            letterSpacing="wide"
          >
            PDX DAO
          </Heading>

          <TextBlock>
            Our central goal, as an expression of all of the above, is to build{" "}
            <Text as="strong">PDX DAO</Text>, an emergent network for the
            decentralized web toolkit that can steward the adoption of p2p and
            self-organized web-based systems in the Portland area.
          </TextBlock>

          <TextBlock>
            As a DAO of DAOs, PDX DAO will be a democratic confederation suited
            to reflect and dynamically change with a growing ecosystem. That
            coalition currently includes:
          </TextBlock>

          <TextBlock>
            As Ethereal Forest works to seed and discover local DAOs, we are
            building out a participatory infrastructure that will allow PDX DAO
            to function as a pluralistic confederation. The basic shape is as
            follows:
          </TextBlock>

          <TextBlock px="8" py="4">
            <Text as="strong">
              We are on the lookout for organizations, associations, affinity
              groups and squads to come on chain and cultivate this recursive
              ecosystem.
            </Text>{" "}
            The more diverse we are as a coalition, the stronger we will be as
            an advocate of pluralism.
          </TextBlock>

          <TextBlock mb="8">
            The city is a furnace for social, cultural and economic
            experimentation. PDX DAO can be a catalyst for that creative{" "}
            <Text as="strong">becoming. Join us! ✊</Text>
          </TextBlock>

          <TextBlock mb="8">
            Are a DAO or interested in building a DAO?
          </TextBlock>

          <Button
            as={Link}
            href="#"
            rightIcon={<CgHello />}
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
            borderColor="primary"
            whiteSpace="break-spaces"
            h="fit-content"
            maxW="100%"
          >
            {/* Would make a "Reach out" CTA, pull copy up */}
            Contact us
          </Button>
        </Container>

        <Divider my="16" bgColor="body" />

        <Container>
          <VisuallyHidden>
            <Heading>Events</Heading>
          </VisuallyHidden>
          <Heading
            as="h3"
            fontSize="4xl"
            textAlign="center"
            mt="16"
            mb="8"
            fontWeight="bold"
            letterSpacing="wide"
          >
            Upcoming Events
          </Heading>
          <UnorderedList styleType="none" ml="0" mb="6" lineHeight="2">
            <ListItem>
              <ListIcon as={FaRegCalendar} mb="0.5" />
              Second Tuesday of every month - Onboarding Hours (Bridgespace, SE Portland)
            </ListItem>
            <ListItem>
              <ListIcon as={FaRegCalendar} mb="0.5" />
              TBD of every month - Web3 Localism Call (Zoom)
            </ListItem>
          </UnorderedList>

          <UnorderedList styleType="none" ml="0" mb="6" lineHeight="2">
            <ListItem>
              <ListIcon as={FaRegCalendar} mb="0.5" />
              March 1, 2024 - ETH Denver Side Event: DAO Localism
            </ListItem>
            <ListItem>
              <ListIcon as={FaRegCalendar} mb="0.5" />
              September 13-15, 2024 - General Forum on Ethereum Localism
            </ListItem>
          </UnorderedList>
          <Heading
            as="h3"
            fontSize="4xl"
            textAlign="center"
            mb="8"
            mt="16"
            fontWeight="bold"
            letterSpacing="wide"
          >
            Past events
          </Heading>
          <UnorderedList styleType="none" ml="0" mb="6" lineHeight="2">
            <ListItem>
              <ListIcon as={FaRegCalendarCheck} mb="0.5" />
              October 13-16, 2023 - General Forum on Ethereum Localism
            </ListItem>
            <ListItem>
              <ListIcon as={FaRegCalendarCheck} mb="0.5" />
              May 26, 2023 - Web3 Security Best Practices Forum
            </ListItem>
            <ListItem>
              <ListIcon as={FaRegCalendarCheck} mb="0.5" />
              March 31, 2023 - Talk on Ethereum Fundamentals
            </ListItem>
          </UnorderedList>
        </Container>

        <br />
        <Container>
          <Image src={"/assets/gfel-end.png"} alt="General Forum on Ethereum Localism end" />
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
