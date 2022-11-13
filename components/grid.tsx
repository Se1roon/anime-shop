import React from "react";
import Image from "next/image";
import styles from "./css/Grid.module.css";
import Link from "next/link";
import getRating from "../utils/getRating";

interface GridProps {
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

const Grid: React.FC<GridProps> = ({ records }): JSX.Element => {
  return (
    <section className={styles.grid}>
      {records.map((record) => {
        return (
          <Link
            key={record.id}
            href={`/hoodies/${record.id}`}
            className={styles.link}
          >
            <div className={styles.item}>
              <Image
                src={`${record.path_to_image}.webp`}
                width={180}
                height={200}
                alt="cc"
              />
              <section className={styles.itemContent}>
                <h2>{record.name}</h2>
                <p>{record.price}zł</p>
                <div className={styles.rating}>
                  {record.rating ? getRating(record) : null}
                </div>
              </section>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Grid;
