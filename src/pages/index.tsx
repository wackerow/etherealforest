import NextImage from "next/image"
import { Calendar, CalendarCheck, Newspaper } from "lucide-react"

import { Link } from "@/components/Link"
import { PageMetadata } from "@/components/PageMetadata"

import CgHello from "@/components/svg/CgHello.svg"
import TbMailForward from "@/components/svg/TbMailForward.svg"
import Twitter from "@/components/svg/twitter.svg"

import GFELEnd from "@/../public/assets/gfel-end.png"

import { cn } from "@/lib/utils"

const TextBlock = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("mb-6 text-lg leading-snug", className)} {...props} />
)

const Container = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("max-w-xl mx-auto", className)} {...props} />
)

const Divider = () => <hr className="my-16 bg-body" />

const VisuallyHidden = ({ children }: React.PropsWithChildren) => (
  <span className="sr-only">{children}</span>
)

const Home = () => {
  return (
    <>
      <PageMetadata
        title="Ethereal Forest"
        description="Homepage for Ethereal Forest"
      />

      <main className="max-w-5xl mx-auto">
        <div
          className="bg-cover"
          style={{ backgroundImage: "url(assets/hero.png)" }}
        >
          <Container>
            <h1 className="text-4xl font-bold tracking-wide uppercase text-white pt-8 md:pt-12 pb-24">
              Ethereal Forest
            </h1>
          </Container>
        </div>

        <Container>
          <TextBlock className="text-2xl leading-snug mt-8">
            We are a Portland, Oregon based workgroup focused on{" "}
            <strong>localist applications of the decentralized web</strong>
          </TextBlock>

          <Link
            href="https://paragraph.xyz/@etherealforest"
            className="inline-flex items-center justify-center border-2 border-primary px-6 py-4 mb-12 text-center text-primary hover:bg-primaryLight active:bg-primaryHover"
          >
            Subscribe to Our Newsletter
            <Newspaper className="ml-2" />
          </Link>

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
            <strong>research</strong>, <strong>discovery</strong> and{" "}
            <strong>place-making</strong>. The team researches exotic social and
            economic forms that may embody or resonate with the web3 toolkit,
            discovers examples of and use cases for those social and economic
            technologies, and builds community and infrastructure to support
            those experiments.
          </TextBlock>

          <TextBlock>
            We are a champion of localism and hope to build out infrastructure
            to reflect the shared insights of localist, regenerative economic
            thinking and the decentralized web space. It's under this shared
            insight that we emphasize principles of <strong>autonomy</strong>{" "}
            and fair self-determination, <strong>decentralization</strong> as a
            sustainability measure, <strong>financial pluralism</strong> and{" "}
            <strong>commons-oriented economics</strong>.
          </TextBlock>
        </Container>

        <Divider />

        <Container>
          <h2 className="text-4xl text-center mb-8 mt-16 font-bold tracking-wide">
            PDX DAO
          </h2>

          <TextBlock>
            Our central goal, as an expression of all of the above, is to build{" "}
            <strong>PDX DAO</strong>, an emergent network for the decentralized
            web toolkit that can steward the adoption of p2p and self-organized
            web-based systems in the Portland area.
          </TextBlock>

          <TextBlock>
            As a DAO of DAOs, PDX DAO will be a democratic confederation suited
            to reflect and dynamically change with a growing ecosystem.
          </TextBlock>

          <TextBlock>
            As Ethereal Forest works to seed and discover local DAOs, we are
            building out a participatory infrastructure that will allow PDX DAO
            to function as a pluralistic confederation.
          </TextBlock>

          <TextBlock className="px-8 py-4">
            <strong>
              We are on the lookout for organizations, associations, affinity
              groups and squads to come on chain and cultivate this recursive
              ecosystem.
            </strong>{" "}
            The more diverse we are as a coalition, the stronger we will be as
            an advocate of pluralism.
          </TextBlock>

          <TextBlock className="mb-8">
            The city is a furnace for social, cultural and economic
            experimentation. PDX DAO can be a catalyst for that creative{" "}
            <strong>becoming. Join us! ✊</strong>
          </TextBlock>

          <TextBlock className="mb-8">
            Are you a DAO or interested in building a DAO?
          </TextBlock>

          <Link
            href="https://fhg09u9s2on.typeform.com/to/NzuISCXV"
            className="inline-flex items-center justify-center border-2 border-primary px-6 py-4 text-center text-primary hover:bg-primaryLight active:bg-primaryHover"
          >
            Contact us
            <CgHello className="ml-2" />
          </Link>
        </Container>

        <Divider />

        <Container>
          <VisuallyHidden>
            <h2>Events</h2>
          </VisuallyHidden>
          <h3 className="text-4xl text-center mt-16 mb-8 font-bold tracking-wide">
            Upcoming Events
          </h3>
          <ul className="list-none ml-0 mb-6 leading-8">
            <li>
              <Calendar className="inline-block mb-0.5" />
              July 15 - August 23rd - Local DAO Summer (Online Series)
            </li>
            <li>
              <Calendar className="inline-block mb-0.5" />
              <Link href="gfel">
                September 13-15, 2024 - General Forum on Ethereum Localism
              </Link>
            </li>
          </ul>
          <h3 className="text-4xl text-center mb-8 mt-16 font-bold tracking-wide">
            Past Events
          </h3>
          <ul className="list-none ml-0 mb-6 leading-8">
            <li>
              <CalendarCheck className="inline-block mb-0.5" />
              May 9, 2024 - Imagination Circle
            </li>
            <li>
              <CalendarCheck className="inline-block mb-0.5" />
              October 13-16, 2023 - General Forum on Ethereum Localism
            </li>
            <li>
              <CalendarCheck className="inline-block mb-0.5" />
              May 26, 2023 - Web3 Security Best Practices Forum
            </li>
            <li>
              <CalendarCheck className="inline-block mb-0.5" />
              March 31, 2023 - Talk on Ethereum Fundamentals
            </li>
          </ul>
        </Container>

        <br />
        <Container>
          <NextImage
            src={GFELEnd}
            alt="General Forum on Ethereum Localism end"
            className="w-full"
          />
          <p className="text-medium text-center mb-8 mt-2 font-thin">
            A General Forum on Ethereum Localism 2023
          </p>
        </Container>

        <hr className="mt-16 mb-8 bg-body" />

        <Container>
          <p className="leading-base">
            <TbMailForward className="size-6 p-1 ps-0 align-middle" />
            Email
            <Link
              className="block"
              href="mailto:etherealforest.eth@protonmail.com"
              hideIcon
            >
              etherealforest.eth@protonmail.com
            </Link>
          </p>

          <p className="leading-base">
            <Twitter className="size-6 p-1 ps-0 align-middle" />
            Twitter
            <Link
              className="block"
              hideIcon
              href="https://twitter.com/ETHForestDAO"
            >
              @ETHForestDAO
            </Link>
          </p>
        </Container>
      </main>
    </>
  )
}

export default Home
