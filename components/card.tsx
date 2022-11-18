import React from "react";
import Image from "next/image";
import styles from "./css/Card.module.css";
import Link from "next/link";

interface CardProps {
  record: {
    id: string;
    name: string;
    path_to_image: string;
    price: number;
    rating: number;
    sizes: string;
  };
  getRating: (record: any) => JSX.Element;
  collection: string;
}

const Card: React.FC<CardProps> = ({
  record,
  getRating,
  collection,
}): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <div className={styles.image}>
          <Image
            src={`${record.path_to_image}`}
            width={140}
            height={135}
            alt="A hoodie"
            className={styles.img}
          />
        </div>

        <div className={styles.namePrice}>
          <span className={styles.name}>{record.name}</span>
          <span className={styles.price}>{`${record.price} zł`}</span>
        </div>

        <div className={styles.rating}>
          {record.rating ? getRating(record) : null}
        </div>

        <div className={styles.button}>
          <Link href={`/${collection}/${record.id}`}>
            <button className={styles.show}>Show</button>
          </Link>
          <button className={styles.buy}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
