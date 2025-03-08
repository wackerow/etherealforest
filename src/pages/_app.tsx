import type { FC } from "react"
import type { AppProps as NextAppProps } from "next/app"
import NextImage from "next/image"
import { ThemeProvider } from "next-themes"
import { Nav } from "@/components/Nav"
import { NAV_LINKS } from "@/lib/constants"
import { Fonts } from "@/components/Fonts"

import Bg10 from "@/../public/assets/bg10.png"
import Bg5 from "@/../public/assets/bg5.png"

import "../styles/global.css"

type AppProps = Omit<NextAppProps, "Component"> & {
  Component: FC<NextAppProps>
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="relative">
        <NextImage
          src={Bg10}
          alt=""
          loading="lazy"
          style={{
            objectFit: "cover",
            position: "fixed",
            pointerEvents: "none",
            inset: "0",
            height: "100vh",
            width: "100vw",
          }}
          sizes="100vw"
          placeholder="blur"
          className="dark:hidden"
        />
        <NextImage
          src={Bg5}
          alt=""
          loading="lazy"
          style={{
            objectFit: "cover",
            position: "fixed",
            pointerEvents: "none",
            inset: "0",
            height: "100vh",
            width: "100vw",
          }}
          sizes="100vw"
          placeholder="blur"
          className="hidden dark:block"
        />
        <Fonts />
        <Nav items={NAV_LINKS} />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
