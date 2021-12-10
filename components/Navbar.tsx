import NextImage from "next/image";
import NextLink from "next/link";
import {
  Center,
  Box,
  Flex,
  Text,
  Button,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import mattraxLogo from "../public/assets/logo-512x512.png";
import { useState } from "react";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <Box minH="60px" align="center">
      <Flex width="100%" maxWidth="75em" py={2} px={2}>
        <Box userSelect="none" px={4} textAlign="center" verticalAlign="center">
          <NextLink href="/" passHref>
            <a>
              <NextImage
                src={mattraxLogo}
                alt="Mattrax Logo"
                width={75}
                height={75}
                placeholder="blur"
                draggable={false}
              />
            </a>
          </NextLink>
        </Box>
        <Center userSelect="none" px={2} alignItems="center">
          <NextLink href="/" passHref>
            <Text
              as="a"
              fontFamily="Source Sans Pro"
              fontSize="4xl"
              fontWeight="500"
              display={{ base: "none", md: "inline-block" }}
            >
              Mattrax
            </Text>
          </NextLink>
        </Center>

        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "end" }}
          alignItems="center"
        >
          <Box
            p={3}
            position={["static", "static", "static", "static", "fixed"]}
            top="0"
            right="0"
            backgroundColor={["none", "none", "none", "none", "#262626"]}
            borderBottomLeftRadius="xl"
            zIndex={1}
            display={{ base: "none", md: "inline-block" }}
          >
            <Button
              size="md"
              bg="transparent"
              _hover={{ boxShadow: "outline" }}
              _active={{ backgroundColor: "transparent" }}
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? "🌙" : "☀️"}
            </Button>
          </Box>

          <Button
            as="a"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/mattrax"
            size="md"
            bg="transparent"
            _hover={{ boxShadow: "outline" }}
            _active={{ backgroundColor: "transparent" }}
            mx={4}
          >
            GitHub
          </Button>

          <Tooltip
            label="Cloud hosted Mattrax coming soon..."
            isOpen={tooltipVisible}
          >
            <Button
              colorScheme="blue"
              onClick={() => {
                setTooltipVisible(true);
                setTimeout(() => setTooltipVisible(false), 2000);
              }}
              onMouseOver={() => setTooltipVisible(true)}
              onMouseOut={() => setTooltipVisible(false)}
            >
              Mattrax Cloud
            </Button>
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
