import Head from "next/head";
import React from "react";
import Layout from "./../../components/layout";
import Clothes from "../../components/clothes";
import { HomeProps } from "../../interfaces/HomeProps";
import getShirts from "../../utils/getShirts";

const Home: React.FC<HomeProps> = ({ records }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Shirts</title>
      </Head>
      <Clothes records={records} linkTo="shirts" />
    </Layout>
  );
};

export async function getStaticProps() {
  const shirts = await getShirts();

  return {
    props: {
      records: shirts,
    },
  };
}

export default Home;
