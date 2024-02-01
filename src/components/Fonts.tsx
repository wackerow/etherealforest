
import { Global } from "@emotion/react"
import { body } from "@/lib/fonts"

export const Fonts = () => (
  <Global
    styles={`
      :root {
        --font-body: ${body.style.fontFamily};
      }
    `}
  />
)