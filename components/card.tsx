import React from "react";
import Image from "next/image";
import styles from "./css/Card.module.css";

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
}

const Card: React.FC<CardProps> = ({ record, getRating }): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <div className={styles.image}>
          <Image
            src={`${record.path_to_image}.webp`}
            width={140}
            height={135}
            alt="A hoodie"
            className={styles.img}
          />
        </div>

        <div className={styles.name_profession}>
          <span className={styles.name}>{record.name}</span>
          <span className={styles.profession}>{`${record.price} zł`}</span>
        </div>

        <div className={styles.rating}>
          {record.rating ? getRating(record) : null}
        </div>

        <div className={styles.button}>
          <button className={styles.aboutMe}>Show</button>
          <button className={styles.hireMe}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
