import {
  type BoxProps,
  Divider,
  Heading,
  type HeadingProps,
  Image,
  ListItem,
  type ListItemProps,
  type ListProps,
  OrderedList,
  Stack,
  Text,
  type TextProps,
  UnorderedList,
  LinkProps,
} from "@chakra-ui/react"

import { Link } from "@/components/Link"

export const MdComponents = {
  p: ({ children }: Pick<TextProps, "children">) => (
    <Text fontSize="lg" lineHeight="150%" mb={{ base: 4, md: 6 }} whiteSpace="pre-wrap">
      {children}
    </Text>
  ),
  a: ({ children, href }: Pick<LinkProps, "children" | "href">) => (
    <Link color="primary" href={href as string}>
      {children}
    </Link>
  ),
  h2: (props: Pick<HeadingProps, "children" | "id">) => (
    <Heading
      as="h2"
      fontSize="3xl"
      fontWeight="normal"
      letterSpacing="wide"
      color="body"
      mt={{ base: 10, md: 14 }}
      mb={{ base: 4, md: 6 }}
      {...props}
    />
  ),
  h3: (props: Pick<HeadingProps, "children" | "id">) => (
    <Heading
      as="h3"
      fontSize="2xl"
      fontWeight="normal"
      letterSpacing="wide"
      color="body"
      mt={{ base: 8, md: 12 }}
      mb={{ base: 4, md: 6 }}
      {...props}
    />
  ),
  h4: (props: Pick<HeadingProps, "children" | "id">) => (
    <Heading
      as="h4"
      fontSize="lg"
      fontWeight="normal"
      letterSpacing="wide"
      textTransform="uppercase"
      color="body"
      mt={{ base: 6, md: 10 }}
      mb={{ base: 4, md: 6 }}
      {...props}
    />
  ),
  h5: (props: Pick<HeadingProps, "children">) => (
    <Heading
      as="h5"
      fontSize="md"
      fontWeight="normal"
      letterSpacing="wide"
      textTransform="uppercase"
      color="body"
      {...props}
    />
  ),
  h6: (props: Pick<HeadingProps, "children">) => (
    <Heading
      as="h6"
      fontSize="sm"
      fontWeight="normal"
      letterSpacing="wide"
      textTransform="uppercase"
      color="body"
      {...props}
    />
  ),
  pre: ({ children }: Pick<BoxProps, "children">) => (
    <Stack mb={5}>
      <pre>{children}</pre>
    </Stack>
  ),
  img: (img: any) => (
    <Image display="block" mx="auto" src={img.src} alt={img.alt} />
  ),
  hr: () => <Divider my={6} />,
  ol: (props: Pick<ListProps, "children">) => <OrderedList mb="6" {...props} />,
  ul: (props: Pick<ListProps, "children">) => (
    <UnorderedList mb="6" {...props} />
  ),
  li: (props: Pick<ListItemProps, "children">) => <ListItem {...props} />,
}
