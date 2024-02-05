import Head from "next/head"
import { useRouter } from "next/router"

import { SITE_URL } from "@/lib/constants"
import type { Meta, NameMeta, PropMeta } from "@/lib/types"

type PageMetadataProps = {
  title: string
  description: string
  image?: string
  canonicalUrl?: string
}

export const PageMetadata = ({
  description,
  title,
  image,
}: PageMetadataProps) => {
  const { asPath } = useRouter()

  const desc = description || "Ethereal Forest - PDX DAO"
  const siteTitle = "Ethereal Forest"
  const fullTitle = `${title} | ${siteTitle}`
  const origin = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL

  // Remove any query params (?) or hash links (#)
  const path = asPath.replace(/[\?\#].*/, "")

  /* e.g. set ethereum.org/about/ to ethereum.org/en/about/ */
  const url = new URL(path, origin).href

  /* Set fallback ogImage based on path */
  const ogImage = image || "assets/og.png"

  const ogImageUrl = new URL(ogImage, origin).href
  const metadata: Meta[] = [
    { name: `description`, content: desc },
    { name: `image`, content: ogImageUrl },
    { property: `og:title`, content: fullTitle },
    { property: `og:description`, content: desc },
    { property: `og:type`, content: `website` },
    { name: `twitter:card`, content: `summary_large_image` },
    { name: `twitter:creator`, content: siteTitle },
    { name: `twitter:site`, content: siteTitle },
    { name: `twitter:title`, content: fullTitle },
    { name: `twitter:description`, content: desc },
    { name: `twitter:image`, content: ogImageUrl },
    { property: `og:url`, content: url },
    { property: `og:image`, content: ogImageUrl },
    { property: `og:site_name`, content: siteTitle },
    { name: `docsearch:description`, content: desc },
  ]

  return (
    <Head>
      <title>{fullTitle}</title>
      {metadata.map((data) => (
        <meta
          key={(data as NameMeta).name || (data as PropMeta).property}
          {...data}
        />
      ))}
      <link rel="canonical" key={url} href={url} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  )
}
