import React, { useState } from "react";
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
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(299.99);

  const updateMinPrice = (value) => {
    setMinPrice(value);
  };

  const updateMaxPrice = (value) => {
    setMaxPrice(value);
  };

  const filterRecords = () => {
    const filtered = records.filter(
      (record) => record.price >= minPrice && record.price <= maxPrice
    );

    return filtered;
  };

  return (
    <section className={styles.section}>
      <Filter
        maxPrice={maxPrice}
        minPrice={minPrice}
        setMinPrice={updateMinPrice}
        setMaxPrice={updateMaxPrice}
      />
      <Grid records={filterRecords()} />
    </section>
  );
};

export default Clothes;
