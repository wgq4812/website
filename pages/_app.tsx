import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import theme from "../utils/chakra-theme";
import "@fontsource/source-sans-pro/400.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
