import Head from "next/head";
import React from "react";
import Layout from "./../../components/layout";
import Clothes from "../../components/clothes";
import { HomeProps } from "../../interfaces/HomeProps";
import pocketbaseEs from "pocketbase";

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
  const client = new pocketbaseEs("http://127.0.0.1:8090");

  const res = await client.records.getFullList("pants");

  const records = JSON.parse(JSON.stringify(res));

  return {
    props: {
      records,
    },
  };
}

export default Home;
