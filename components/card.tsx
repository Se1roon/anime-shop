import React from "react";

// Styles
import styles from "./css/Card.module.css";

// Components
import Image from "next/image";
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
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={`${record.path_to_image}`}
            width={140}
            height={135}
            alt="A hoodie"
            priority
          />
        </div>

        <div className={styles.namePrice}>
          <span className={styles.name}>{record.name}</span>
          <span className={styles.price}>{`${record.price} zł`}</span>
        </div>

        <div className={styles.rating}>
          {record.rating ? getRating(record) : null}
        </div>

        <div className={styles.btns}>
          <Link href={`/${collection}/${record.id}`}>
            <button className={styles.btn}>Show</button>
          </Link>
          <button className={styles.btn}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
