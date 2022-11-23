import Head from "next/head";
import React from "react";
import Layout from "./../../components/layout";
import Clothes from "../../components/clothes";
import { HomeProps } from "../../interfaces/HomeProps";
import getPants from "../../utils/getPants";

const Home: React.FC<HomeProps> = ({ records }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Hoodies</title>
      </Head>
      <Clothes records={records} linkTo="pants" />
    </Layout>
  );
};

export async function getStaticProps() {
  const pants = await getPants();

  return {
    props: {
      records: pants,
    },
  };
}

export default Home;
