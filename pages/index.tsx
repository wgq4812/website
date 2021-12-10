import { FormEvent, useCallback, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  SimpleGrid,
  Link,
  Stack,
  VStack,
  Text,
  Heading,
  Input,
  Button,
  Select,
  FormControl,
  FormLabel,
  chakra,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { FcPrivacy, FcMultipleDevices } from "react-icons/fc";
import { FaServer } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Feature } from "../components/Feature";
import {
  ExpressOfInterestRequestPayload,
  ExpressOfInterestResponsePayload,
} from "./api/expression-of-interest";
import {
  SlackInviteRequestPayload,
  SlackInviteResponsePayload,
} from "./api/slack-invite";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mattrax</title>
        <link rel="canonical" href="https://mattrax.app/" />
      </Head>

      <Navbar />
      <Hero title="Mattrax MDM">
        <Text
          color={useColorModeValue("gray.600", "gray.400")}
          mt="5"
          fontSize="xl"
        >
          Open Source Cross-platform Mobile Device Management Solution. Manage
          your fleet of devices in one easy to use dashboard!
        </Text>
        <Text
          color={useColorModeValue("gray.600", "gray.400")}
          mt="5"
          fontSize="xl"
          fontWeight="semibold"
        >
          Mattrax is still in early development! Subscribe for updates so your
          the first to know when it launches!
        </Text>
        {/* <Button
          mt="8"
          minW="14rem"
          colorScheme="blue"
          size="lg"
          height="14"
          px="8"
          fontSize="md"
          fontWeight="bold"
        >
          Get Started!
        </Button> */}
      </Hero>
      <FeaturePanel />
      <CallToActionPanel />
      <Footer />
    </div>
  );
};

function FeaturePanel() {
  return (
    <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: "6", md: "8" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacingX="10"
        spacingY={{ base: "8", md: "14" }}
      >
        <Feature title="Open source" icon={<FcPrivacy />}>
          Mattrax is developed and maintained in open so that its code can be
          audited by anyone for security vulnerabilities. Checkout the code on{" "}
          <Link
            as="a"
            rel="noopener noreferrer"
            href="https://github.com/mattrax/Mattrax"
          >
            GitHub
          </Link>
        </Feature>
        <Feature title="Cross platform" icon={<FcMultipleDevices />}>
          Mattrax can be used with Windows, macOS, Linux computer as well as
          Android and IOS mobile devices allowing you to unify your fleet.
        </Feature>
        <Feature title="Self Hosting" icon={<FaServer />}>
          You can deploy Mattrax on your existing infrastructure for better
          control over a core component of your IT infrastructure.
        </Feature>
        <Feature title="Integrations" icon={<AiFillApi />}>
          Mattrax provides a robust set of integrations with other services to
          enhance your device configuration based on your environment.
        </Feature>
      </SimpleGrid>
    </Box>
  );
}

function CallToActionPanel() {
  const toast = useToast();
  const [isLoadingInterest, setLoadingInterest] = useState(false);
  const [isLoadingSlack, setLoadingSlack] = useState(false);

  const handleExpressionOfInterestSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      setLoadingInterest(true);
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      try {
        const res = await fetch("/api/expression-of-interest", {
          method: "POST",
          body: JSON.stringify({
            email: formData.get("email") as string,
            interest_reason: formData.get("interest-reason") as string,
            deployment_env: formData.get("deployment-env") as string,
          } as ExpressOfInterestRequestPayload),
        });
        const body: ExpressOfInterestResponsePayload = await res.json();
        if (res.status !== 200) {
          toast({
            title: "Error subscribing!",
            description: body.message,
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        } else {
          // @ts-ignore // TODO: Do this the proper way at some point
          event.target.reset();

          toast({
            title: "You have been subscribed!",
            description:
              "You will receive email updates when they are sent out!",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        }
      } catch (e) {
        console.error(e);
        toast({
          title: "Error subscribing!",
          description:
            "An error occurred while submitting expression of interest!",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }

      setLoadingInterest(false);
    },
    [toast]
  );

  const handleSlackInviteSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      setLoadingSlack(true);
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      try {
        const res = await fetch("/api/slack-invite", {
          method: "POST",
          body: JSON.stringify({
            email: formData.get("email") as string,
          } as SlackInviteRequestPayload),
        });
        const body: SlackInviteResponsePayload = await res.json();
        if (res.status !== 200) {
          toast({
            title: "Error inviting to Slack!",
            description: body.message,
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        } else {
          // @ts-ignore // TODO: Do this the proper way at some point
          event.target.reset();

          toast({
            title: "You have been invited to the Slack!",
            description:
              "You will receive email link which will allow you to join!",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        }
      } catch (e) {
        console.error(e);
        toast({
          title: "Error inviting to Slack!",
          description: "An error occurred while submitting the invitation!",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }

      setLoadingSlack(false);
    },
    [toast]
  );

  return (
    <Box as="section" py="12">
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacingX="40px"
        spacingY="20px"
        maxW={{ base: "xl", md: "5xl" }}
        mx="auto"
      >
        <Box p={{ base: "6", md: "12" }}>
          <Heading size="lg" fontWeight="extrabold" mb="2">
            Want more updates?
          </Heading>
          <Text color={useColorModeValue("gray.600", "gray.400")} mb="6">
            Subscribe to receive email updates on Mattrax&apos;s development
            progress!
          </Text>
          <chakra.form onSubmit={handleExpressionOfInterestSubmit}>
            <VStack
              maxW="md"
              spacing="4"
              direction={{ base: "column", sm: "row" }}
            >
              <FormControl id="email" isRequired>
                <FormLabel fontSize="sm">Your Email:</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="bob@example.com"
                  disabled={isLoadingInterest}
                  required
                />
              </FormControl>

              <FormControl id="interest-reason" isRequired w="full">
                <FormLabel fontSize="sm">Interested For Use In:</FormLabel>
                <Select
                  name="interest-reason"
                  w="full"
                  size="sm"
                  defaultValue="other"
                  disabled={isLoadingInterest}
                  required
                >
                  <option value="msp-provider">MSP Provider</option>
                  <option value="internal-it-team">Internal IT Team</option>
                  <option value="personal">Personal</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <FormControl id="deployment-env" isRequired>
                <FormLabel fontSize="sm">Deployment Environment:</FormLabel>
                <Select
                  name="deployment-env"
                  w="full"
                  size="sm"
                  defaultValue="managed-cloud"
                  disabled={isLoadingInterest}
                  required
                >
                  <option value="managed-cloud">
                    Official Managed Cloud Hosting
                  </option>
                  <option value="onprem">On-Premise</option>
                  <option value="private-cloud">Private Cloud</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <Button
                w="full"
                colorScheme="blue"
                px="10"
                type="submit"
                disabled={isLoadingInterest}
              >
                Subscribe
              </Button>
            </VStack>
          </chakra.form>
        </Box>
        <Box p={{ base: "6", md: "12" }}>
          <Heading size="lg" fontWeight="extrabold" mb="2">
            Join The Community?
          </Heading>
          <Text color={useColorModeValue("gray.600", "gray.400")} mb="6">
            We have a{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://slack.com"
            >
              Slack
            </Link>{" "}
            server where you can ask questions and track Mattrax&apos;s
            development!
          </Text>
          <chakra.form onSubmit={handleSlackInviteSubmit}>
            <VStack
              maxW="md"
              spacing="4"
              direction={{ base: "column", sm: "row" }}
            >
              <FormControl id="email" isRequired>
                <FormLabel fontSize="sm">Your Email:</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="bob@example.com"
                  disabled={isLoadingSlack}
                  required
                />
              </FormControl>

              <Button
                w="full"
                colorScheme="blue"
                px="10"
                type="submit"
                disabled={isLoadingSlack}
              >
                Invite to Slack
              </Button>
            </VStack>
          </chakra.form>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default IndexPage;
