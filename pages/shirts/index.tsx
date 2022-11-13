import Head from "next/head";
import React from "react";
import Layout from "./../../components/layout";
import Clothes from "../../components/clothes";

interface HomeProps {
  records: {
    id: string;
    name: string;
    path_to_image: string;
    price: number;
    rating: number;
    sizes: string;
    bestseller: boolean;
  }[];
}

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
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/shirts/records?page=1&perPage=30`
  );

  let data = await res.json();
  data = data?.items as any[];

  return {
    props: {
      records: data,
    },
  };
}

export default Home;
