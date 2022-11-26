import React from "react";
import getRating from "../utils/getRating";

// Styles
import styles from "./css/Showcase.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Components
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Card from "./card";

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
  collection: string;
}

const Showcase: React.FC<ShowcaseProps> = ({
  records,
  collection,
  headerText,
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{headerText}</h2>
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
              <Card
                record={record}
                getRating={getRating}
                collection={collection}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className={styles.grid}>
        {records.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              <Image
                className={styles.img}
                src={`${item.path_to_image}`}
                width={200}
                height={200}
                alt="Bestseller"
              />
              <div className={styles.namePrice}>
                <h2 className={styles.name}>{item.name}</h2>
                <p>{item.price}zł</p>
              </div>
              <div className={styles.rating}>
                {item.rating ? getRating(item) : null}
              </div>
              <div className={styles.btns}>
                <Link href={`/${collection}/${item.id}`}>
                  <button className={styles.btn}>Show</button>
                </Link>
                <button className={styles.btn}>Buy</button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Showcase;
