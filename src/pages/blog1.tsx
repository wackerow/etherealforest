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
        title="Ethereal Forest"
        description="Homepage for Ethereal Forest and PDX DAO"
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
              fontWeight="normal"
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
          <TextBlock fontSize="2xl" lineHeight="short" mb="8">
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
            whiteSpace="break-spaces"
            h="fit-content"
            borderColor="primary"
          >
            Subscribe to Our Newsletter
          </Button>

          <TextBlock>
            

Build your own Fun DAO

Jan 30, 2024

At Ethereal Forest we take it as our duty to spread the twin ethos of decentralization and direct democracy, to energize people’s sense of the organizationally possible and to awaken people’s capacities for coordination and commons self-management. One of the best ways we can do this is by evangelizing the web3 tool of p2p-enabled, low-overhead spontaneous organizations that we call DAOs with their now vast library of composable inputs for radical democracy and participatory economics. 

In accordance with this mission, Ethereal Forest has seeded Fun DAO PDX, a low key onboarding project to give interested friends (and strangers) in the Portland community a chance to join a DAO, learn an ever revolving set of novel coordination tools, and meet some friends-in-affinity in the process.

It began last month, where (at the challenge of some community members from the EthPDX meetup circle) we set about the task of designing a simple, low impact onboarding DAO that could provide incremental exposure to the web3 toolset without requiring the time or information commitment that many DAOs do. People have jobs, obligations, but they also have an innate curiosity about their powers to act, about the technological horizon of their powers to act (which has, in our opinion, always been the question of democracy). 
 
The premise of a Fun DAO is simple: Every month the DAO decides on a group outing in town. The outing could be just for fun - a soccer game or a park barbeque - or it could be purpose driven, like a community garden volunteer day or a Depave event. (It’s our expectation that the direction of Fun DAOs will drift over time to reflect their communities). Most importantly, each cycle the DAO uses a unique coordination tool to decide on the outing (e.g., jokerace, quadratic voting, conviction voting). 

The goals of this formula are to: 
- Provide a place for novices to join their first DAO and see how it works.
- Provide a place for novices and veterans alike to be continually exposed to new mechanisms that might help them in other projects.
- Provide valuable feedback to the teams building these novel onchain tools.
- Provide a place for community members to have fun while getting to know each other, and potentially brainstorm other projects and workgroups (in our case, with an eye toward our goal of generating a diverse and pluralistic PDX DAO ecosystem). 

Fun DAO is effectively an education DAO. Deciding where to venture out is obviously a job that a group chat could solve, and following our allegiance to the appropriate technology thesis, we want to be clear that the goal of this DAO is exposure to novel coordination tools for their own sake, so that they can be applied by community members at scale to larger, more meaningful, and more appropriate projects.

—-


Fun DAO PDX had its first outing on Saturday, January 27th, to see a free art show at the Oregon Contemporary - Georgie Friedman’s BREATHING–LIGHT. Our first outing was decided using jokerace, where the art show beat out indoor golf and Multnomah falls, among others. Though the DAO only has 10 onchain members, the outing’s attendance was fifteen, with newcomers joining to say they don’t yet understand how to set up a wallet but would like to be included. To this end the DAO coordinated dedicated onboarding hours (hosted at Ethereal Forest’s affiliate community space, Bridgespace) on the second Tuesday of every month, complimenting our EthPDX meetings which occur on first Wednesdays. 

All in all, this first cycle onboarded a handful of community members to self-custody wallets while being the first experience with jokerace for many more of us. The next cycle is likely to use Pairwise voting through General Magic, though that will be up to the DAO - post-first cycle, Ethereal Forest has ceded stewardship. 


If you have a radical new coordination tool you’d like Fun DAO PDX to try, hop into the DAO’s telegram to let us know about it. If you’d like to join, you can do the same or simply show up to learn more at the monthly EthPDX event. 

If you’d like to start your own Fun DAO, fucking go for it!




PDX DAO is Dead
November 8th, 2023 


Wherein we rid ourselves of the PDX DAO name, so that its ghost might possess us.
In the aftermath of the General Forum on Ethereum Localism, after taking a breath from our immersion in the web of new connections and entanglements, we’ve come to consider the event a wild success. A global community gathered to discuss (in makerspaces and warehouses, saunas and ecovillages, and never without a joint on the loading dock) the enigma of localism, the hydra of its possibility - PAMMS and commons, quadratic lands and mycelial credit networks, neighbourhoods and substrates. The air was jovial - on the final night, a verdict came in: “trust me, it’s not going to be this good next year. You only get this lucky once.”
The immanent stroke of luck appealed to us. A wild success: was it a sign? But to our anxious eyes, that noun edged toward action, from success to succession; all we could ask was “what’s next?” (Is it the general anxiety of our generation, whispers of a metacrisis, haunted feelings of not enough done? What do we have to be anxious about?)
Maybe it was a matter of chance, the date, Friday the 13th, so many slasher films ending with question marks, but in the solar eclipse of that conference’s Saturday and the hunter’s moons of its subsequent weeks, we saw the silhouette not of a solution but a problem: the audacity of the premise “Ethereum Localism,” and the doubled audacity of PDX DAO, a whole living city of intrigue and production of which we’d stolen the name.
If we were to be generous, we could call it (this audacious naming) a magical act, not a stealing but a planting of a staff, to summon the energies of the creaturely familiars and friends around us. But magical naming is the first step of capture, and we so wish the opposite. We wish to give the city instruments and infrastructure of lightness - a weightlessness, orbital freedom from the corrupt circles and the sinking scarcity spells of extractive and coercive institutions. How could we instill in our relationship to the name this light and raucous volition of the commons, this witch’s powers of flight?
Yes, this problem that haunted us provoked, with its elden etymology - the greek proballein, pro "forward" + ballein "to throw" - a ghostly invocation. In the leftover atmosphere of this Friday the 13th conference, with all our ideas staging lofty regenerative parabolas in the mid October sky, we were possessed with a call to jettison, to cast out, to rid ourselves of the demons of capture with a throw forward. Ahead of us, into the foggy, shadow-eclipsed future, a ghost of regenerative coordination that we couldn’t yet be, but that we might become.

After some reflection and slightly embattled consensus, the work group that had previously gone under the name PDX DAO has relinquished that title. It is not ours to own - we care too much for the city, know its multiplicity too well to think our rank of less than a dozen could adequately express it.
Instead, “PDX DAO” will be a placeholder to label our core future ambition, the accomplishment of our work: a DAO with more decentralized infrastructure, more radical permissionless character, more participatory integrity - a dream of a DAO, in a city where stateless tools of consensus building, coordination, and the greater technologies of noncoercion have taken root.
This slingshot affair, the DAO that dreams of a DAO, will continue under the name Ethereal Forest. It’s a legacy trope in our circle, and one that fits the overall tenor of our group - fertile hope and a faith that were we to build an adequate substrate of mutual security and agency, we could supplant the dark forest with (sorry for more poetry) the ethereal light - spontaneity, experimentation, loftiness … the playful liberty of the infinite game.
Finite games surround us, and they’re heavy with the burden of their artificial ends, so often staged by collusion, theology, or brute violence. When we redouble our vision of the world, look at it without control and without these alien ends, it becomes light again. We see tools that go for sustenance and simple freedom over control and escape. Open ended, integrated, we see permissionless protocols of abundance - p2p systems, spontaneous coordination, fortified when necessary by the hardness of blockchains that have brought our ability to design positive sum non-coercive systems to a new level. The new plural social economies are ethereal.

"Infinite players die. Since the boundaries of death are always part of the play, the infinite player does not die at the end of play, but in the course of play."
To our small circle, this vision is clear. But this clarity can’t be taken for granted, not if we want these tools to matter beyond technical or conceptual intrigue. Technologies of emancipation are meaningless without a public to make use of them. We continue to believe the urban complex is the optimal place to undergo that process of mattering. But our inquiries have shown us just how far the city of Portland is from having a public that is ready to make use of these tools of emancipation.
Whether it’s a result of structural inequities, lack of interest in internet literacy among those building some of the most interesting systems thinking technologies, negative and convoluted PR about the intentions of the crypto space, or the lack of success among web3 builders in developing tools for common use cases (probably all of the above), the onboarding problem is the greatest barrier to any principled aspirations of participatory design. These tools aren’t too complex, but the cultural shift required to present them as vehicles for pluralism is.
Ethereal Forest - call it the EF, for short - has as its task the building out of a coalition that might generate a City DAO adequate to the name. A DAO, that is, with meaningful participatory input, no prefab group of crypto natives performing multivalence, but a (more) genuine pluralism that might at least approach the extreme multiplicity of the city while reflecting the wild pluralistic ambitions of the web3 project.
At this stage, the marriage of these two unwieldy projects - the multiplicitous city, and the plural web3 public - is near fantasy, a haunting piece of gothic science fiction. As we build and weave, this is the mantra of Ethereal Forest: there is no PDX DAO. Not until the ground is prepared, the public seeded, the coalition built. And only then, after these protopian DAOs - the federated labor coalitions and mutual credit clubs, the community library protocols and bonding curve-enabled mutual aid funds, the programmable CSAs and the self-bootstrapped open hardware campaigns - have clouded into an emergent notion of common cause, only then will the needed shared infrastructure come into relief, only then will the audacious vision of a "PDX DAO" be within reach.
It will require an honest campaign of communication that acknowledges the excesses of the crypto space, clarifies the bastardizations or mischaracterizations of its use case, and invites communities to take the tools into their own hands and find in whatever use they can their own case for coordination, regeneration, liberation. And most of all, it will learn from the radical, off-web protocols and technologies of decentralization and pluralism that fill the city as it pursues the same.
Portland’s EF will focus on four primary fronts in this campaign to generate a PDX DAO adequate to its name:
Research: Investigating and identifying the greatest areas of potential for creative implementation of the blockchain, p2p, and open protocol toolkit for substantive benefit to the city, with an eye toward the thriving of extra-institutional p2p-style systems.
Curating Tools: Developing in tangent with that community-oriented research a library of blockchain and p2p tools and implementation strategies that will aid non-coercive coordination institutions in the city. This means using our research experience to find specific implementation opportunities, and connecting with builders and protocols that want the benefit of practically oriented public trials to better understand and improve their own projects.
Engaging Community: Further building our relationships and networks with the artists, makers, organizers, producers and builders who make up the city, producing and supporting an onboarding DAO to minimize the barrier to entry and enable the practicing of decentralized coordination tools; supporting the creation of DAOs with the eventual goal of scaling horizontally into many on-chain organizations that will take equal footing with Ethereal Forest in the participatory structure of PDX DAO.
Interregional and Global Collaboration: Making available our research and processes to projects and protocols that may benefit from the strategic contingency of the local; developing institutions of ILLness (Intercity Localist Library) and OOPs (Observed Operating Protocols) in order to protocolize and share our knowledge sets.
These four campaigns are only guideposts along the way. The architecture of this future PDX DAO has taken provisional shape, but the process takes precedence over the end. That process centers the horizontal scaling of our work as we build partners and coalitions of city people who are enthusiastic about the decentralized web, sovereign and regenerative systems, and what emerges at the intersection of these projects.
“Finite speech ends with a silence of closure. Infinite speech ends with a disclosure of silence.” Above our heads is this specter, a haunting name not to be spoken - not yet. The ethereal forest squirms, unsettled with all of its mute futures. We aren’t sentimental. We don’t sit in wait, nostalgic for the future that never came. Inspired by the capable optimism of our friends in the city, we see with practical eyes. The ghost’s final invocation: fides ex techne auditus. You must build ears to hear the name.
The future is light. The present is potent with its silent call. There is no PDX DAO.

"Infinite players are not serious actors in any story, but the joyful poets of a story that continues to originate what they cannot finish."
Ethereal Forest is seeking to expand our network. We’re looking for research partners, interregional collaborators, devs and designers who need a place to implement, and sponsors.
Build a relationship with Ethereal Forest and the PDX DAO Ecosystem.
Talk to us about testing your product with one of our communities.
Plan your visit to hang or hack with us 👻 (if you’re passing through Portland, we have room to host ghouls guests at our (future-haunted) house -- more on that next time).

First published on Mirror. Collect here.



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

        <Container>
          <Heading
            fontSize="4xl"
            textAlign="center"
            mb="8"
            mt="16"
            fontWeight="regular"
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

          <TextBlock bg="alpha800" p="8">
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
            fontWeight="normal"
            letterSpacing="wide"
          >
            Upcoming Events
          </Heading>
          <UnorderedList styleType="none" ml="0" mb="6" lineHeight="2">
            <ListItem>
              <ListIcon as={FaRegCalendar} mb="0.5" />
              February 28, 2024 - ETH Denver Side Event: DAO Localism
            </ListItem>
          </UnorderedList>
          <Heading
            as="h3"
            fontSize="4xl"
            textAlign="center"
            mb="8"
            mt="16"
            fontWeight="normal"
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
