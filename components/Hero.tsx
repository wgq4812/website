import { PropsWithChildren } from "react";
import {
  Box,
  Flex,
  Heading,
  Img,
  useColorModeValue,
} from "@chakra-ui/react";

interface HeroProps {
  title: string;
}

function Navbar({ title, children }: PropsWithChildren<HeroProps>) {
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.800")}
      pt="15"
      pb="12"
      overflow="hidden"
    >
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Flex
          align="flex-start"
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          mb="20"
        >
          <Box flex="1" maxW={{ lg: "xl" }} pt="6">
            <Heading as="h1" size="3xl" mt="8" fontWeight="extrabold">
              {title}
            </Heading>
            {children}
          </Box>
          <Box boxSize={{ base: "20", lg: "8" }} />
          {/* TODO: Use Next Image for optimisations and take image as an argument to component */}
          <Img
            pos="relative"
            marginEnd="-6rem"
            w="50rem"
            src="/img/dashboard.png"
            alt="Mattrax Dashboard"
          />
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;
