import { useRef } from "react"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun } from "lucide-react"

import { Link } from "@/components/Link"
import { MobileMenu } from "./MobileMenu"
import { Button } from "@/components/ui/button"
import { useDisclosure } from "@/hooks/useDisclosure"

import { NavLink } from "@/lib/types"
import { cn } from "@/lib/utils"

export type NavProps = React.HTMLAttributes<HTMLElement> & {
  items: NavLink[]
}

export const Nav = ({ items, className, ...props }: NavProps) => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const mobileDisclosure = useDisclosure()

  return (
    <nav
      className={cn(
        "sticky top-0 w-screen z-50 backdrop-blur-sm font-sans",
        "before:absolute before:inset-0 before:bg-bg dark:before:bg-gray-800 before:opacity-90 before:shadow-md",
        className
      )}
      {...props}
    >
      <div className="relative flex items-center max-w-screen-lg mx-auto p-4">
        <Link href="/" className="text-body hover:text-body hover:no-underline">
          Ethereal Forest
        </Link>
        <div className="flex items-center ml-auto">
          {/* Desktop nav items */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 mx-8">
            {items.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className="text-body hover:text-primary hover:no-underline dark:text-body dark:hover:text-primary-hover"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Color mode toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle color mode"
            className="text-body hover:text-primary dark:text-body dark:hover:text-primary-hover"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Mobile nav hamburger menu */}
          <Button
            ref={hamburgerRef}
            className="md:hidden text-body dark:text-body"
            variant="ghost"
            size="icon"
            onClick={mobileDisclosure.onOpen}
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <MobileMenu
            items={items}
            isOpen={mobileDisclosure.isOpen}
            onOpenChange={mobileDisclosure.setValue}
            buttonRef={hamburgerRef}
          />
        </div>
      </div>
    </nav>
  )
}

export const MobileNav = (props: NavProps) => <Nav {...props} />
