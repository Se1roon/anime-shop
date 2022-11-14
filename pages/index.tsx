import Head from "next/head";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Showcase from "../components/showcase";

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

  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/${types[typeIndex]}/records?page=1&perPage=30`
  );

  let data = await res.json();
  data = data?.items as any[];

  const bestsellers = data.filter((entry) => entry.bestseller);

  return {
    props: {
      bestsellers,
      collection: types[typeIndex],
    },
  };
}

export default Home;
