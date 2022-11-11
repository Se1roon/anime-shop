import Head from "next/head";
import React from "react";
import Layout from "./../../components/layout";

const Home: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Hoodies</title>
      </Head>
    </Layout>
  );
};

export default Home;
