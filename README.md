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

### Launching post

For a post to be live, these changes must make it to the `main` branch.

- First, commit changes, open a PR against the `dev` branch, and merge
- Deploy the site by opening a PR from `dev` branch into `main`
- Once PR is open, confirm the Vercel checks pass, and the build preview looks the way you expect
- Merge the PR

## Chakra-UI Components

This project uses [Chakra-UI](https://chakra-ui.com/) for styling. You can find the documentation for the components [here](https://chakra-ui.com/docs/getting-started).

Chakra-UI components can be imported from `@chakra-ui/react`. For example:

```tsx
import { Box, Text } from '@chakra-ui/react';
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
