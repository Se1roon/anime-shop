import Head from "next/head";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Showcase from "../components/showcase";
import pocketbaseEs from "pocketbase";
interface HomeProps {
  bestsellers: {
    id: string;
    name: string;
    path_to_image: string;
    price: number;
    rating: number;
    sizes: string;
    bestseller: boolean;
  }[];
  collection: string;
}

const Home: React.FC<HomeProps> = ({
  bestsellers,
  collection,
}): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>ZA WORUDO</title>
      </Head>
      <Showcase
        records={bestsellers}
        collection={collection}
        headerText="🔥 Bestsellers 🔥"
      />
    </Layout>
  );
};

export async function getStaticProps() {
  const types = ["hoodies", "shirts", "pants"];
  const typeIndex = Math.floor(Math.random() * types.length);

  const client = new pocketbaseEs("http://127.0.0.1:8090");

  const res = await client.records.getFullList(`${types[typeIndex]}`);

  let bestsellers = res.filter((entry) => entry.bestseller);

  bestsellers = JSON.parse(JSON.stringify(bestsellers));

  return {
    props: {
      bestsellers,
      collection: types[typeIndex],
    },
  };
}

export default Home;
