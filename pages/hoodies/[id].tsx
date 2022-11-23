import React from "react";
import Layout from "../../components/layout";
import styles from "/styles/Clothes.module.css";
import Image from "next/image";
import getRating from "../../utils/getRating";
import Head from "next/head";
import { Sizes } from "../../interfaces/Sizes";
import getPaths from "../../utils/getPaths";
import getHoodie from "../../utils/getHoodie";
interface HoodieProps {
  item: {
    id: string;
    name: string;
    path_to_image: string;
    price: number;
    rating: number;
    sizes: string;
    bestseller: boolean;
  };
  sizes: Sizes;
}

const Hoodie: React.FC<HoodieProps> = ({ item, sizes }): JSX.Element => {
  const sizeSelect = (e) => {
    const target = e.target;

    target.classList.toggle(`${styles.clicked}`);
  };

  return (
    <Layout>
      <Head>
        <title>{item.name}</title>
      </Head>
      <section className={styles.section}>
        <div className={styles.imgContainer}>
          <Image
            src={`${item.path_to_image}`}
            width={550}
            height={450}
            alt="Hoodie image"
            priority
          />
        </div>
        <div className={styles.content}>
          <h2>{item.name}</h2>
          <p className={styles.price}>{item.price}zł</p>
          <div className={styles.rating}>
            {item.rating ? getRating(item) : null}
          </div>
          <div className={styles.sizes}>
            <div className={styles.xs} onClick={sizeSelect}>
              <h4>XS</h4>
              <p>{sizes.xs}</p>
            </div>
            <div className={styles.s} onClick={sizeSelect}>
              <h4>S</h4>
              <p>{sizes.s}</p>
            </div>
            <div className={styles.m} onClick={sizeSelect}>
              <h4>M</h4>
              <p>{sizes.m}</p>
            </div>
            <div className={styles.l} onClick={sizeSelect}>
              <h4>L</h4>
              <p>{sizes.l}</p>
            </div>
            <div className={styles.xl} onClick={sizeSelect}>
              <h4>XL</h4>
              <p>{sizes.xl}</p>
            </div>
          </div>
          <div className={styles.button}>
            <button className={styles.buy}>Buy</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const ids = await getPaths("hoodies");

  const paths = ids.map((id) => ({
    params: {
      id,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const hoodie = await getHoodie(params.id);

  return {
    props: {
      item: hoodie,
      sizes: hoodie.sizes,
    },
  };
}

export default Hoodie;
