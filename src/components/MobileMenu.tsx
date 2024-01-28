import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  UseDisclosureReturn,
  forwardRef,
  Flex,
} from "@chakra-ui/react"
import { RefObject } from "react"
import { Link } from "@/components/Link"

import type { NavLink } from "@/lib/types"

type MobileMenuProps = {
  items: NavLink[]
  disclosures: UseDisclosureReturn
}
export const MobileMenu = forwardRef(
  ({ disclosures, items }: MobileMenuProps, ref) => {
    const { isOpen, onClose } = disclosures
    return (
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={ref as RefObject<HTMLButtonElement>}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody display="flex" alignItems="end" gap="8" flexDir="column" pt="24">
            {items.map(({ name, href }) => (
              <Link key={href} href={href} color="body">
                {name}
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
  }
)
