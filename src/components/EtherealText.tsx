import { Text, useInterval } from "@chakra-ui/react"
import { type ReactNode, useState } from "react"

const MAX_SEGMENT_POWER = 2 ** 3 // 8
const SHADOW_COUNT = 2 ** 6 // 64
const COLOR_PREFIX = "--color-"
const HSLA = {
  saturation: 100,
  lightness: 50,
  alpha: 2,
} as const

type EtherealTextProps = {
  children: ReactNode
}

const EtherealText = ({ children }: EtherealTextProps) => {
  const [colorSegments, setColorSegments] = useState(0)

  /**
   * Updates the color segments based on the current time, ranging
   * back-and-forth from 0 to 2^MAX_SEGMENT_POWER.
   */
  useInterval(() => {
    const half = 2 ** (MAX_SEGMENT_POWER - 1)
    const nowSine = Math.sin(Date.now() / 1000)
    setColorSegments(Math.floor(2 + half + nowSine * half))
  }, 1000 / 30)

  /**
   * Generates an object with color values based on the number of color segments.
   * @param {number} colorSegments - The number of color segments.
   * @returns {Object} - An object with color values.
   */
  const sx = Array(colorSegments)
    .fill(null)
    .reduce(
      (acc, _, i) => ({
        ...acc,
        [`${COLOR_PREFIX}${i}`]: `hsla(${i * (360 / colorSegments)},
        ${HSLA.saturation}%, ${HSLA.lightness}%, ${HSLA.alpha}%)`,
      }),
      {}
    )

  /**
   * Generates a text shadow CSS property based on the given number of shadow count and color segments.
   * @param {number} SHADOW_COUNT - The number of text shadows to generate.
   * @param {string} COLOR_PREFIX - The prefix for the CSS variable names used for color segments.
   * @returns {string} The generated text shadow CSS property.
   */
  const textShadow = Array(SHADOW_COUNT)
    .fill(null)
    .map(
      (_, i) =>
        `${Math.sin(Math.PI * ((i * 10) / 180)) * 0.02}em ${
          (SHADOW_COUNT - i) * 0.01
        }em 0.01em var(${COLOR_PREFIX}${i % colorSegments})`
    )
    .join(",")

  return (
    <Text as="span" position="relative">
      {children}

      <Text
        as="span"
        position="absolute"
        insetInline="0"
        transform="scaleY(-1) translateY(-1.25em)" // Mirroring effect
        color="transparent"
        sx={sx}
        textShadow={textShadow}
      >
        {children}
      </Text>
    </Text>
  )
}

export default EtherealText
