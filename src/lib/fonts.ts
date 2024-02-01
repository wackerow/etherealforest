import localFont from "next/font/local"

export const body = localFont({
  src: "../../public/fonts/FrankRuhlLibre-VariableFont_wght.ttf",
  display: "swap",
  fallback: ["sans-serif"],
})

export const heading = localFont({
  src: "../../public/fonts/Anybody-VariableFont_wdth,wght.ttf",
  display: "swap",
  fallback: ["sans-serif"],
})