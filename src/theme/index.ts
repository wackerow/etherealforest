import { extendTheme } from "@chakra-ui/react"
import { config, fonts } from "./foundations"
const overrides = {
  config,
  colors: {
    gray: {
      50: "#F7F7F7",
      100: "#EDEDED",
      200: "#E2E2E2",
      300: "#CBCBCB",
      400: "#A0A0A0",
      500: "#717171",
      600: "#4A4A4A",
      700: "#2D2D2D",
      800: "#1A1A1A",
      900: "#171717",
    },
    fuchsia: {
      50: '#ffe2f9',
      100: '#ffb1e2',
      200: '#ff7ecc',
      300: '#ff4cb6',
      400: '#ff1aa1',
      500: '#e60088',
      600: '#b4006a',
      700: '#82004b',
      800: '#50002e',
      900: '#200012',
    },
  },
  components: {},
  fonts,
  shadows: {},
  sizes: {},
  styles: {
    global: () => ({
      ":root": {
        fontSize: { base: "1rem", md: "1.25rem" },
      },
      "*": {
        boxSizing: "border-box",
        scrollBehavior: "smooth",
        scrollMarginTop: "5rem",
        padding: 0,
        margin: 0,
      },
      body: {},
      main: {
        transition: "background 200ms linear !important",
      },
      p: {
        mb: 6,
        letterSpacing: "wide",
        lineHeight: .75,
      },
      strong: {
        fontWeight: "extrabold",
      },
    }),
  },
  textStyles: {},
  semanticTokens: {
    colors: {
      primary: { _light: "fuchsia.400", _dark: "fuchsia.500" },
      primaryHover: { _light: "fuchsia.200", _dark: "fuchsia.300" },
      primaryLight: { _light: "fuchsia.50", _dark: "fuchsia.800" },
      body: { _light: "blackAlpha.900", _dark: "whiteAlpha.900" },
      bg: { _light: "gray.50", _dark: "gray.800" },
      rainbow: {
        _light:
          "linear-gradient(to right, red, orange,#AA0, green, blue, indigo, violet)",
        _dark:
          "linear-gradient(to right, #ff6666, #ffa666,#ffff66, #66B066, #8888ff, #8c66A2,#ffBBff)",
      },
      alpha900: { _light: "whiteAlpha.900", _dark: "blackAlpha.900" },
      alpha800: { _light: "whiteAlpha.800", _dark: "blackAlpha.800" },
      alpha700: { _light: "whiteAlpha.700", _dark: "blackAlpha.700" },
    },
  },
}

export default extendTheme(overrides)
