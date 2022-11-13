import React from "react";
import Layout from "../../components/layout";
import styles from "/styles/Hoodie.module.css";
import Image from "next/image";
import getRating from "../../utils/getRating";
import Head from "next/head";

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
}

const Hoodie: React.FC<HoodieProps> = ({ item }): JSX.Element => {
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
            src={`${item.path_to_image}.webp`}
            width={350}
            height={550}
            alt="Hoodie image"
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
              <p>10</p>
            </div>
            <div className={styles.s} onClick={sizeSelect}>
              <h4>S</h4>
              <p>10</p>
            </div>
            <div className={styles.m} onClick={sizeSelect}>
              <h4>M</h4>
              <p>10</p>
            </div>
            <div className={styles.l} onClick={sizeSelect}>
              <h4>L</h4>
              <p>10</p>
            </div>
            <div className={styles.xl} onClick={sizeSelect}>
              <h4>XL</h4>
              <p>10</p>
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
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/hoodies/records?page=1&perPage=30`
  );

  let data = await res.json();
  data = data?.items as any[];

  const paths = data.map((entry) => ({
    params: {
      id: entry.id,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/hoodies/records/${params.id}`
  );

  let data = await res.json();

  return {
    props: {
      item: data,
    },
  };
}

export default Hoodie;
