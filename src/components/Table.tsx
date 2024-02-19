import {
  Table as ChakraTable,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  type ThemingProps,
} from "@chakra-ui/react"
import type { ReactNode } from "react"

type TableProps = Omit<ThemingProps<"Table">, "children"> & {
  children: ReactNode
}
export const Table = ({ variant, ...props }: TableProps) => (
  <TableContainer whiteSpace="normal" mb="4">
    <ChakraTable variant={variant} {...props} />
  </TableContainer>
)

export const markdownTableComponents = {
  table: Table,
  thead: Thead,
  th: Th,
  tbody: Tbody,
  tr: Tr,
  td: Td,
}