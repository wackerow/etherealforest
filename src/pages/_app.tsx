import type { FC } from "react"
import {
  ChakraProvider,
  localStorageManager,
  useColorModeValue,
} from "@chakra-ui/react"
import type { AppProps as NextAppProps } from "next/app"
import NextImage from "next/image"
import theme from "@/theme"

import { Fonts } from "@/components/Fonts"
import { Nav } from "@/components/Nav"
import { NAV_LINKS } from "@/lib/constants"

import Bg10 from "@/../public/assets/bg10.png"
import Bg5 from "@/../public/assets/bg5.png"

import "../styles/global.css"

type AppProps = Omit<NextAppProps, "Component"> & {
  Component: FC<NextAppProps>
}
export default function App({ Component, pageProps }: AppProps) {
  const Bg = useColorModeValue(Bg10, Bg5)

  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      <NextImage
        src={Bg}
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
      />
      <Fonts />
      <Nav items={NAV_LINKS} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
