import NextImage from "next/image"
import FaFilePdf from "@/components/svg/FaFilePdf.svg"

import { Link } from "@/components/Link"
import { PageMetadata } from "@/components/PageMetadata"
import { cn } from "@/lib/utils"

import assetData from "@/data/mop"
import * as url from "@/lib/utils/url"

import TheYearIsBack from "@/../public/assets/mop/the-year-is-back.jpeg"
import TheYearIsFront from "@/../public/assets/mop/the-year-is-front.jpeg"
import WeAreTheNeotechnicsBack from "@/../public/assets/mop/we-are-the-neotechnics-back.jpeg"
import WeAreTheNeotechnicsFront from "@/../public/assets/mop/we-are-the-neotechnics-front.jpeg"

const TextBlock = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={cn("mb-9 text-lg leading-tight", className)} {...props}>
      {children}
    </p>
  )
}

const Container = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("container mx-auto max-w-3xl px-4", className)} {...props}>
    {children}
  </div>
)

const Button = ({
  href,
  children,
  icon,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  icon?: React.ReactNode
}) => (
  <Link
    href={href}
    className={cn(
      "inline-flex h-auto border-2 border-primary px-6 py-4 whitespace-normal text-center no-underline hover:bg-primary-light hover:no-underline active:border-primary-hover active:bg-primary-hover",
      className
    )}
    hideIcon
    isExternal
    {...props}
  >
    {children}
    {icon && <span className="ml-2">{icon}</span>}
  </Link>
)

const Mop = () => {
  return (
    <>
      <PageMetadata
        title="Ministry of Propaganda"
        description="Homepage for the Ethereal Forest Ministry of Propaganda"
      />

      <main className="mx-auto max-w-7xl">
        <div>
          <Container>
            <h1 className="pt-8 pb-24 md:pt-12 md:pb-12 text-4xl font-bold tracking-wide uppercase text-body">
              Ministry of Propaganda
            </h1>
          </Container>
        </div>

        <Container>
          <TextBlock>
            Ministry of Propaganda is Ethereal Forest's visual media contingent.
            All media is created for the benefit of the ecosystem; as we grow
            this library, please feel free to make use of its materials to
            whatever purposes you see fit.
          </TextBlock>
        </Container>

        <Container className="mb-4">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <NextImage
                src={TheYearIsFront}
                alt="The Year Is (front)"
                placeholder="blur"
                priority
              />
            </div>
            <div className="flex-1">
              <NextImage
                src={TheYearIsBack}
                alt="The Year Is (back)"
                placeholder="blur"
                priority
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 mb-16 [&>*]:text-body [&>*]:items-center">
            <Button href="/assets/mop/the-year-is-front.jpeg">Front</Button>
            <Button href="/assets/mop/the-year-is.pdf" icon={<FaFilePdf />}>
              Back
            </Button>
          </div>
        </Container>

        <Container className="mb-4">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <NextImage
                src={WeAreTheNeotechnicsFront}
                alt="We Are The Neotechnics (front)"
                placeholder="blur"
              />
            </div>
            <div className="flex-1">
              <NextImage
                src={WeAreTheNeotechnicsBack}
                alt="We Are The Neotechnics (back)"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 mb-16 [&>*]:text-body [&>*]:items-center">
            <Button href="/assets/mop/we-are-the-neotechnics-front.jpeg">
              Front
            </Button>
            <Button href="/assets/mop/we-are-the-neotechnics-back.jpeg">
              Back
            </Button>
          </div>
        </Container>

        {assetData.map(({ title, src, grayUrl, colorUrl }, index) => {
          const buttons = [
            { href: grayUrl, label: "B&W" },
            { href: colorUrl, label: "Color" },
          ]
          return (
            <Container key={title} className="mb-4">
              <NextImage src={src} alt={title} placeholder="blur" />
              <div className="mt-4 flex flex-wrap gap-2 mb-16 [&>*]:text-body [&>*]:items-center">
                {buttons.map(
                  ({ href, label }) =>
                    href && (
                      <Button
                        key={title + label}
                        href={href}
                        icon={url.isPdf(href) ? <FaFilePdf /> : undefined}
                      >
                        {label}
                      </Button>
                    )
                )}
              </div>
            </Container>
          )
        })}
      </main>
    </>
  )
}

export default Mop
