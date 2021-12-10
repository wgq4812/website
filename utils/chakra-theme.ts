import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#0369A1",
    },
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  } as ThemeConfig,
});

export default theme;
