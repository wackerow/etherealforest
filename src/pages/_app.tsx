import type { FC } from "react"
import {
  Box,
  ChakraProvider,
  localStorageManager,
  useColorModeValue,
} from "@chakra-ui/react"
import type { AppProps as NextAppProps } from "next/app"
import theme from "@/theme"

import { Fonts } from "@/components/Fonts"
import { Nav } from "@/components/Nav"
import { NAV_LINKS } from "@/lib/constants"

type AppProps = Omit<NextAppProps, "Component"> & {
  Component: FC<NextAppProps>
}
export default function App({ Component, pageProps }: AppProps) {
  const background = useColorModeValue(
    "url(/assets/bg10.png)",
    "url(/assets/bg5.png)"
  )

  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      <Fonts />
      <Box
        _after={{
          content: '""',
          position: "fixed",
          inset: 0,
          zIndex: -1,
          background: background,
          backgroundSize: "cover",
        }}
      >
        <Nav items={NAV_LINKS} />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}
