import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export const useThemeDetection = () => {
  const { theme, resolvedTheme } = useTheme()
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    setIsDarkTheme(
      theme === "dark" ||
        resolvedTheme === "dark" ||
        (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
  }, [theme, resolvedTheme])

  return { isDarkTheme, theme, resolvedTheme }
}
