import React from "react";
import styles from "./css/Filter.module.css";

const Filter: React.FC = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" name="minPrice" id="minPrice" />
        </li>
        <li className={styles.item}>
          <label htmlFor="maxPrice">Max Price</label>
          <input type="number" name="maxPrice" id="maxPrice" />
        </li>
      </ul>
    </section>
  );
};

export default Filter;
