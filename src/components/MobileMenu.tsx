import { RefObject, forwardRef } from "react"
import { Link } from "@/components/Link"
import { X } from "lucide-react"
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer"

import type { NavLink } from "@/lib/types"

type MobileMenuProps = {
  items: NavLink[]
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  buttonRef: RefObject<HTMLButtonElement>
}

export const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ isOpen, onOpenChange, items, buttonRef }, ref) => {
    return (
      <Drawer open={isOpen} onOpenChange={onOpenChange}>
        <DrawerTrigger asChild>
          <button className="sr-only" ref={buttonRef}>
            Open Menu
          </button>
        </DrawerTrigger>
        <DrawerOverlay />
        <DrawerContent className="h-full max-h-screen" ref={ref}>
          <div className="absolute right-4 top-4">
            <DrawerClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </DrawerClose>
          </div>

          <div className="flex flex-col items-end gap-8 px-6 pt-24">
            {items.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className="text-body hover:text-primary"
              >
                {name}
              </Link>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    )
  }
)

MobileMenu.displayName = "MobileMenu"
