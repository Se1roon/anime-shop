import React, { useState } from "react";

// Styles
import styles from "./css/Clothes.module.css";

// Components
import Grid from "./grid";
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
  linkTo: string;
}

const Clothes: React.FC<ClothesProps> = ({ records, linkTo }): JSX.Element => {
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
    <section className={styles.container}>
      <Filter
        maxPrice={maxPrice}
        minPrice={minPrice}
        setMinPrice={updateMinPrice}
        setMaxPrice={updateMaxPrice}
      />
      <Grid records={filterRecords()} linkTo={linkTo} />
    </section>
  );
};

export default Clothes;
