import Navbar from "../components/navbar";
import Showcase from "../components/showcase";

interface HomeProps {
  records: {
    id: string;
    name: string;
    path_to_image: string;
    price: number;
    rating: number;
    sizes: string;
  }[];
}

const Home: React.FC<HomeProps> = ({ records }): JSX.Element => {
  return (
    <>
      <Navbar />
      <Showcase records={records} />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/hoodies/records?page=1&perPage=30"
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
