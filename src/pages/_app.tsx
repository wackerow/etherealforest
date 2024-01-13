import React from 'react'
import { ChakraProvider, localStorageManager } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '@/theme'

import { Fonts } from '@/components/Fonts'
import { Nav } from '@/components/Nav'
import { NAV_LINKS } from '@/lib/constants'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      <Fonts />
      <Nav items={NAV_LINKS} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
