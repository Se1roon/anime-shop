import React, { useState } from "react";
import styles from "./css/Filter.module.css";

interface FilterProps {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
}

const Filter: React.FC<FilterProps> = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}): JSX.Element => {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </li>
        <li className={styles.item}>
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </li>
      </ul>
    </section>
  );
};

export default Filter;
