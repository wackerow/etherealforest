import { ChakraProvider, localStorageManager } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '@/theme'

import { Fonts } from '@/components/Fonts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
