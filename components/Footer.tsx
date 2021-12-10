import {
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{ base: "4", md: "8" }}
    >
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Text fontSize="sm" alignSelf={{ base: "center", sm: "start" }}>
          &copy; {new Date().getFullYear()} Mattrax Technologies. All rights
          reserved.
        </Text>
        <ButtonGroup variant="ghost" color="gray.600">
          <IconButton
            as="a"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/mattrax"
            aria-label="GitHub"
            icon={<FaGithub fontSize="20px" />}
          />
          <IconButton
            as="a"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:hello@mattrax.app"
            aria-label="Email"
            icon={<MdEmail fontSize="20px" />}
          />
        </ButtonGroup>
      </Stack>
    </Box>
  );
}

export default Footer;
