import React from "react";
import getRating from "../utils/getRating";

// Styles
import styles from "./css/Grid.module.css";

// Components
import Image from "next/image";
import Link from "next/link";

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
  linkTo: string;
}

const Grid: React.FC<GridProps> = ({ records, linkTo }): JSX.Element => {
  return (
    <section className={styles.container}>
      {records.map((record) => {
        return (
          <Link
            className={styles.link}
            key={record.id}
            href={`/${linkTo}/${record.id}`}
          >
            <div className={styles.item}>
              <Image
                className={styles.img}
                src={`${record.path_to_image}`}
                width={180}
                height={200}
                alt="cc"
              />
              <section className={styles.content}>
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
