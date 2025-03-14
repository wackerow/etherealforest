import NextDocument, { Html, Head, Main, NextScript } from "next/document"

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/assets/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
