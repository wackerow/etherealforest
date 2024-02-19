## Getting Started

To get set up locally, first confirm you have NodeJS installed. If not, you can download it [here](https://nodejs.org/en/download/).

Make sure you are using the version noted in [.nvmrc](.nvmrc). If you have `nvm` installed, you can run `nvm use` to switch to the correct version.

Next, install the dependencies. We use `yarn`, which you can install with `npm install -g yarn` if you don't already have it.

```bash
yarn
```

To run the site locally, spin-up a development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start modifying pages found in `/pages/*.tsx`. The page auto-updates as you edit the file.

## Adding blog posts

To add a new blog post, create a new markdown file in the `posts` directory. The file must by **markdown** file ending in `.md` and is recommended to use the following format: `YYYY-MM-DD-title-of-post.md`. The file must also include the following frontmatter:

```yaml
---
title: Title of the post
publishDate: Month D, YYYY
---
```

For example:

```yaml
---
title: PDX DAO is Dead
publishDate: November 8, 2023
---
```

The `title` field will be rendered at the top of the post, followed by the body of markdown content. For more information on how to write markdown, see [this guide](https://www.markdownguide.org/).

### Markdown support

The following markdown features are supported:

- Bold/strong
  - Wrap text in `**`
  - ie `**bold me**`
  - **bold me**
- Italics/emphasis
  - Wrap text in `_`
  - ie `_italicize me_`
  - _italicize me_
- Strikethrough
  - Wrap text in `~~`
  - ie `~~strike me~~`
  - ~~strike me~~
- Links
  - Wrap text label in `[]` followed by URL in `()`
  - ie `[link me](https://some.url)`
  - [link me](https://some.url)
- Lists (Ordered and unordered)
  - Begin lines with `1.` for an ordered list
  - Begin lines with `-` for a bulleted list
  - Indent with 2 spaces per level to nest lists
  - ie `1. This is an ordered list item`
- Tables - See below for more information
- KaTeX mathematical expressions - See below for more information
- Blockquotes
  - Begin line with `>`
  - ie `> This is placed into a callout box`
  - > This is placed into a callout box

#### Table support

Tables are supported in markdown. They can be created using the following syntax:

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Data 1   | Data 2   | Data 3   |
```

Text alignment can be assigned using colons below the header as follows (text position inside cells does not matter):

```markdown
| Left aligned      | Centered | Right aligned |
| :---------------- | :------: | ------------: | 
| Regular text      |    🙂    |       1234.56 |
| More regular text |    🎉    |         78.90 |
```

...displays as:

| Left aligned      | Centered | Right aligned |
| :---------------- | :------: | ------------: |
| Regular text      |    🙂    |       1234.56 |
| More regular text |    🎉    |         78.90 |

#### KaTeX mathematical expressions support

KaTeX mathematical expressions are supported. They look something like this when written:

Inline: `$f(x)=\frac{1}{\sqrt{2\pi}}e^{-\frac{x^2}{2}}$`

...displays as: $f(x)=\frac{1}{\sqrt{2\pi}}e^{-\frac{x^2}{2}}$

Block:

```
$$
f(x)=\frac{1}{\sqrt{2\pi}}e^{-\frac{x^2}{2}}
$$
```

...displays as:

$$
f(x)=\frac{1}{\sqrt{2\pi}}e^{-\frac{x^2}{2}}
$$

[Learn more about supported KaTeX mathematical expressions](https://katex.org/docs/supported)

## Adding a MoP asset

The list of MoP assets to be rendered on `/mop` is found in `src/data/mop.ts`. Each item has the following format:

```ts
{
  title: "Title of the asset",
  src: NewAsset,
  grayUrl: "/assets/mop/a-new-mop-image-asset-bw.pdf"
  colorUrl: "/assets/mop/a-new-mop-image-asset-color.pdf"
}
```

The `grayUrl` and `colorUrl` are the public paths to the black and white and color versions of the asset, respectively. These can be images, or PDFs, but the imported image (previewed on the page) cannot be a PDF. Must have at least one of grayUrl or colorUrl.

The `NewAsset` is the image asset to be shown on the page imported as a component. This should be done at the top of the `src/data/mop.ts` file:

```ts
import NewAsset from "@/../public/assets/mop/a-new-mop-image-asset.png"
```

To add an asset:

1. Add the image or PDF assets to the `public/assets/mop` directory
1. Import the display image as a component at the top of `src/data/mop.ts`
1. Add a new item to the `mop` array in `src/data/mop.ts` with the `title`, `src`, `grayUrl`, and `colorUrl` fields as shown above (or similar to existing arra yitems)

## Launching changes

For a post to be live, these changes must make it to the `main` branch.

- First, commit changes, open a PR against the `dev` branch, and merge
- Deploy the site by opening a PR from `dev` branch into `main`
- Once PR is open, confirm the Vercel checks pass, and the build preview looks the way you expect
- Contact admin to merge the PR

## Chakra-UI Components

This project uses [Chakra-UI](https://chakra-ui.com/) for styling. You can find the documentation for the components [here](https://chakra-ui.com/docs/getting-started).

Chakra-UI components can be imported from `@chakra-ui/react`. For example:

```tsx
import { Box, Text } from "@chakra-ui/react"
```

These can be styled using "style props" which resemble css properties, but are passed as props to the component, using "camel case" (ie. `lowerFirstThenUpper`). For example:

Instead of writing:

```css
.box {
  background-color: red;
  padding: 20px;
}
.big {
  font-size: 24px;
}
```

```tsx
<div className="box">
  <p className="big">Hello, world!</p>
</div>
```

You would write:

```tsx
<Box backgroundColor="red" padding="20px">
  <Text fontSize="24px">Hello, world!</Text>
</Box>
```

Or, you could use the Chakra-UI shorthand tokens and abbreviated prop names:

```tsx
<Box bgColor="red" p="5">
  <Text fontSize="2xl">Hello, world!</Text>
</Box>
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)
