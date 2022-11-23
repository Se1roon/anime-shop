import React from "react";
import Card from "./card";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import getRating from "../utils/getRating";
import Link from "next/link";
import styled from "styled-components";

// Styles

const ShowcaseContainer = styled.div`
  margin-top: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1100px) {
    margin-top: 6rem;
  }
`;

const Header2 = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-style: italic;
  text-transform: uppercase;
  color: var(--bg-light);

  @media (max-width: 1100px) {
    margin-top: 4.5rem;
  }

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  width: min(90%, 1000px);
  height: 450px;
  padding-inline: 2.5rem;
  margin-inline: auto;
  display: none;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (min-width: 1100px) {
    display: flex;
  }
`;

const Grid = styled.section`
  width: 80%;
  margin-block: 3rem;
  margin-inline: auto;
  display: grid;
  grid-template-areas:
    "item1 item2"
    "item1 item2"
    "item3 item4"
    "item5 item6";
  gap: 1.5rem;

  & .item:first-child {
    grid-area: item1;
  }

  & .item:nth-child(2) {
    grid-area: item2;
  }

  & .item:nth-child(3) {
    grid-area: item3;
  }

  & .item:nth-child(4) {
    grid-area: item4;
  }

  & .item:nth-child(5) {
    grid-area: item5;
  }

  & .item:last-child {
    grid-area: item6;
  }

  @media (min-width: 1100px) {
    display: none;
  }

  @media (max-width: 670px) {
    grid-template-areas:
      "item1"
      "item2"
      "item3"
      "item4"
      "item5"
      "item6";
  }
`;

const GridItem = styled.div`
  font-family: "Montserrat", sans-serif;
  color: var(--bg-light);
  padding: 1rem 2rem;
  background-color: #111;
  border-radius: 20px;
  box-shadow: 0 0 5px 2px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  transition: box-shadow 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: 0 0 8px 2px var(--clr-accent);
  }
`;

const StyledImage = styled.img`
  object-fit: cover;
  border-radius: 4rem;
`;

const NamePrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NPHeader2 = styled.h2`
  font-size: 1.4rem;

  @media (max-width: 670px) {
    font-size: 1.3rem;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
  }
`;

const Rating = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: center;

  & > * {
    width: 20px;
    height: 20px;
    color: var(--bg-light);
  }
`;

const Buttons = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  --hover: hsl(100 10% 50%);

  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: var(--bg-light);
  background-color: var(--clr-accent);
  padding: 8px 22px;
  outline: none;
  border: none;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--hover);
  }
`;

// ==============================

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
    <ShowcaseContainer>
      <Header2>{headerText}</Header2>
      <Section>
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
      </Section>
      <Grid>
        {records.map((item) => {
          return (
            <GridItem key={item.id} className="item">
              <StyledImage
                as={Image}
                src={`${item.path_to_image}`}
                width={200}
                height={200}
                alt="Bestseller"
              />
              <NamePrice>
                <NPHeader2>{item.name}</NPHeader2>
                <p>{item.price}zł</p>
              </NamePrice>
              <Rating>{item.rating ? getRating(item) : null}</Rating>
              <Buttons>
                <Link href={`/${collection}/${item.id}`}>
                  <Button>Show</Button>
                </Link>
                <Button>Buy</Button>
              </Buttons>
            </GridItem>
          );
        })}
      </Grid>
    </ShowcaseContainer>
  );
};

export default Showcase;
