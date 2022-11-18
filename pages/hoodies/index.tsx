import Head from "next/head";
import React from "react";
import Layout from "./../../components/layout";
import Clothes from "../../components/clothes";
import { HomeProps } from "../../interfaces/HomeProps";
import getHoodies from "../../utils/getHoodies";

const Home: React.FC<HomeProps> = ({ records }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Hoodies</title>
      </Head>
      <Clothes records={records} linkTo={"hoodies"} />
    </Layout>
  );
};

export async function getStaticProps() {
  const hoodies = await getHoodies();

  return {
    props: {
      records: hoodies,
    },
  };
}

export default Home;
