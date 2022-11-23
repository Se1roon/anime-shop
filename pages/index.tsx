import Head from "next/head";
import Layout from "../components/layout";
import Showcase from "../components/showcase";
import getClothes from "../utils/getClothes";
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
  const collections = ["hoodies", "shirts", "pants"];
  const collection =
    collections[Math.floor(Math.random() * collections.length)];

  const clothes = await getClothes(collection);
  const bestsellers = clothes.filter((item) => item.bestseller);

  return {
    props: {
      bestsellers,
      collection,
    },
  };
}

export default Home;
