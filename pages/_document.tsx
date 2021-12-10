import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../utils/chakra-theme";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Open source mobile device management solution with support for Windows, macOS, Linux and many more..."
          />
          <meta property="og:title" content="Mattrax MDM" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Open source mobile device management solution with support for Windows, macOS, Linux and many more..." />
          <meta property="og:image" content="https://mattrax.app/img/dashboard.png" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
          <script
            defer
            data-domain="mattrax.app"
            src="https://plausible.otbeaumont.me/js/plausible.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
