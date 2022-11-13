import React from "react";
import Grid from "./grid";
import styles from "./css/Clothes.module.css";
import Filter from "./filter";

interface ClothesProps {
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

const Clothes: React.FC<ClothesProps> = ({ records }): JSX.Element => {
  return (
    <section className={styles.section}>
      <Filter />
      <Grid records={records} />
    </section>
  );
};

export default Clothes;
