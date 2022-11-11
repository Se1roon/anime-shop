import React from "react";
import Card from "./card";
import styles from "./css/Showcase.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

interface ShowcaseProps {
  records: {
    id: string;
    name: string;
    path_to_image: string;
    price: number;
    rating: number;
    sizes: string;
  }[];
  headerText: string;
}

const Showcase: React.FC<ShowcaseProps> = ({
  records,
  headerText,
}): JSX.Element => {
  const getRating = (record): JSX.Element => {
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
    <div className={styles.showcase}>
      <h2 className={styles.headerText}>{headerText}</h2>
      <section className={styles.section}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {records.map((record) => (
            <SwiperSlide key={record.id}>
              <Card record={record} getRating={getRating} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className={styles.grid}>
        {records.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              <Image
                src={`${item.path_to_image}.webp`}
                width={200}
                height={200}
                alt="Bestseller"
                className={styles.img}
              />
              <div className={styles.namePrice}>
                <h2>{item.name}</h2>
                <p>{item.price}zł</p>
              </div>
              <div className={styles.rating}>
                {item.rating ? getRating(item) : null}
              </div>
              <div className={styles.button}>
                <button className={styles.aboutMe}>Show</button>
                <button className={styles.hireMe}>Buy</button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Showcase;
