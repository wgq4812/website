import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Open source mobile device management solution with support for Windows, macOS, Linux and many more..." />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* TODO: Plausible Script */}
        </body>
      </Html>
    )
  }
}

export default MyDocument;