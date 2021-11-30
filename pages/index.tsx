import type { NextPage } from 'next';
import Head from 'next/head';
import { Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mattrax</title>
      </Head>

      <Text color="red">Hello World!</Text>
    </div>
  )
}

export default Home
