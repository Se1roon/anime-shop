import React from "react";
import Image from "next/image";
import styles from "./css/Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface CardProps {
  record: {
    id: string;
    name: string;
    path_to_image: string;
    price: number;
    rating: number;
    sizes: string;
  };
}

const Card: React.FC<CardProps> = ({ record }): JSX.Element => {
  const getRating = (): JSX.Element => {
    const fullStars = Math.floor(record.rating);
    const stars = new Array(fullStars).fill(0);

    if (record.rating > fullStars) stars.push(1);

    return (
      <>
        {stars.map((star, index) => {
          return star ? (
            <FontAwesomeIcon key={index} icon={faStarHalf as IconProp} />
          ) : (
            <FontAwesomeIcon key={index} icon={faStar as IconProp} />
          );
        })}
      </>
    );
  };

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
          {record.rating ? getRating() : null}
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
