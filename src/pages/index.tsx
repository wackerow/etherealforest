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
} from "@chakra-ui/react"
import { FaRegCalendar, FaRegCalendarCheck } from "react-icons/fa"

import { PageMetadata } from "@/components/PageMetadata"
import { Link } from "@/components/Link"

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
    style={{ objectFit: "cover" }}
    w="full"
    {...props}
  />
)

const TextBlock = (props: TextProps) => (
  <Text my="16" textAlign={{ md: "justify" }} fontSize="xl" {...props} />
)

const Container = (props: BoxProps) => (
  <ChakraContainer maxW="container.md" {...props} />
)

const fadeUnderline = {
  _after: {
    content: '""',
    display: "block",
    height: "1px",
    bg: "fadeUnderline",
    mx: "4",
    mt: "2",
    mb: "6",
  },
}
const Home = () => {
  const background = useColorModeValue(
    "url(assets/bg10.png)",
    "url(assets/bg5.png)"
  )
  return (
    <>
      <PageMetadata
        title="Ethereal Forest"
        description="Homepage for Ethereal Forest and PDX DAO"
      />

      <Box
        as="main"
        maxW="container.xl"
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
          bg="url(assets/community.png)"
          bgSize="cover"
          bgPos="bottom"
          minH="container.md"
        >
          <Container
            my="8"
            py="12"
            h="fit-content"
            lineHeight="short"
            textAlign="center"
            bg="alpha800"
          >
            <Heading
              as="h1"
              fontSize="5xl"
              fontWeight="extrabold"
              {...fadeUnderline}
            >
              Ethereal Forest
            </Heading>
            <Text fontSize="4xl" lineHeight="1.2" fontWeight="light" m="0">
              Building{" "}
              <Text as="span" fontWeight="semibold">
                coordination
              </Text>{" "}
              infrastructure to make the city of{" "}
              <Text as="span" fontWeight="semibold">
                Portland
              </Text>{" "}
              {/* a  */}more{" "}
              <Text as="span" fontWeight="semibold">
                pluralistic
              </Text>{" "}
              and{" "}
              <Text as="span" fontWeight="semibold">
                sustainable
              </Text>
              {/*  place */}
            </Text>
          </Container>
        </Flex>

        <Container>
          <TextBlock>
            We are a Portland, Oregon based workgroup focused on{" "}
            <Text as="strong">
              localist applications of the decentralized web
            </Text>
            . Our mission is to identify interventions that might be made using
            tools and strategies from the DLT and p2p toolkit to help make the
            city a more open, pluralistic and peaceful place. This synergy
            between global peer production strategies and local implementation
            has been called <Text as="strong">cosmo-localism</Text>.
          </TextBlock>
        </Container>

        <Box
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
        </Container>

        <WideImage
          src="assets/cap-wide.png"
          alt="Illustration of mushroom caps"
        />

        <Container>
          <Heading
            fontSize="5xl"
            textAlign="center"
            mb="8"
            mt="16"
            fontWeight="extrabold"
            {...fadeUnderline}
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
          <UnorderedList
            styleType="none"
            display="flex"
            columnGap="12"
            rowGap="4"
            m="0"
            mb="6"
            flexWrap="wrap"
            justifyContent="space-around"
            alignItems="center"
            textAlign="center"
            fontWeight="extrabold"
            letterSpacing="wider"
            fontSize="2xl"
          >
            <ListItem>Ethereal Forest</ListItem>
            <ListItem>EthPDX</ListItem>
            <ListItem>FunDAO</ListItem>
          </UnorderedList>
        </Container>

        <WideImage
          src="assets/skeleton-wide.png"
          alt="Illustration of skeletons dancing in a forest"
          mt="16"
        />

        <Container>
          <TextBlock>
            As Ethereal Forest works to seed and discover local DAOs, we are
            building out a participatory infrastructure that will allow PDX DAO
            to function as a pluralistic confederation. The basic shape is as
            follows:
          </TextBlock>
        </Container>

        <Image
          mb="12"
          src="assets/council-diagram.png"
          w="500px"
          mx="auto"
          alt="Diagram of council structure"
        />

        <Container>
          <TextBlock>
            We are on the lookout for organizations, associations, affinity
            groups and squads to come on chain and cultivate this recursive
            ecosystem. The more diverse we are as a coalition, the stronger we
            will be as an advocate of pluralism.
          </TextBlock>
          <TextBlock>
            The city is a furnace for social, cultural and economic
            experimentation. PDX DAO can be a catalyst for that creative{" "}
            <Text as="strong">becoming. Join us! ✊</Text>
          </TextBlock>
        </Container>

        <WideImage src="assets/colorful-wide.png" alt="Illustration" />

        <Container>
          <Heading
            fontSize="5xl"
            textAlign="center"
            mb="8"
            mt="16"
            fontWeight="extrabold"
          >
            Events
          </Heading>
          <Heading as="h3" fontSize="2xl" mb="4">
            Upcoming events...
          </Heading>
          <UnorderedList styleType="none" ml="0" mb="6" lineHeight="2">
            <ListItem>
              <ListIcon as={FaRegCalendar} mb="0.5" />
              TODO
            </ListItem>
          </UnorderedList>
          <Heading as="h3" fontSize="2xl" mb="4">
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

        <Container>
          <Heading
            fontSize="5xl"
            textAlign="center"
            mb="8"
            mt="16"
            fontWeight="extrabold"
          >
            Connect
          </Heading>
          <Text>
            Email:{" "}
            <Link href="mailto:etherealforest.eth@protonmail.com">
              etherealforest.eth@protonmail.com
            </Link>
          </Text>

          <Text>
            Twitter:{" "}
            <Link href="https://twitter.com/ETHForestDAO">@ETHForestDAO</Link>
          </Text>
        </Container>
      </Box>
    </>
  )
}

export default Home
