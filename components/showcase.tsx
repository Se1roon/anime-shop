import React from "react";
import Card from "./card";
import styles from "./css/Showcase.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";

interface ShowcaseProps {
  records: {
    id: string;
    name: string;
    path_to_image: string;
    price: number;
    rating: number;
    sizes: string;
  }[];
}

const Showcase: React.FC<ShowcaseProps> = ({ records }): JSX.Element => {
  return (
    <>
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
              <Card record={record} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Showcase;
