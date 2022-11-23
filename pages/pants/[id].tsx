import React from "react";
import Layout from "../../components/layout";
import Image from "next/image";
import getRating from "../../utils/getRating";
import Head from "next/head";
import { Sizes } from "../../interfaces/Sizes";
import getPaths from "../../utils/getPaths";
import getSinglePants from "../../utils/getSinglePants";
import {
  Content,
  ImgContainer,
  L,
  M,
  Price,
  Rating,
  S,
  Section,
  SizesContainer,
  StyledImage,
  XL,
  XS,
  BuyBtn,
} from "../../styles/clothes";

interface HoodieProps {
  item: {
    id: string;
    name: string;
    path_to_image: string;
    price: number;
    rating: number;
    sizes: string;
    bestseller: boolean;
  };
  sizes: Sizes;
}

const Pants: React.FC<HoodieProps> = ({ item, sizes }): JSX.Element => {
  const sizeSelect = (e) => {
    const target = e.target;

    target.classList.toggle(`clicked`);
  };

  return (
    <Layout>
      <Head>
        <title>{item.name}</title>
      </Head>
      <Section>
        <ImgContainer>
          <StyledImage
            as={Image}
            src={`${item.path_to_image}`}
            width={550}
            height={450}
            alt="Pants image"
            priority
          />
        </ImgContainer>
        <Content>
          <h2>{item.name}</h2>
          <Price>{item.price}zł</Price>
          <Rating>{item.rating ? getRating(item) : null}</Rating>
          <SizesContainer>
            <XS onClick={sizeSelect}>
              <h4>XS</h4>
              <p>{sizes.xs}</p>
            </XS>
            <S onClick={sizeSelect}>
              <h4>S</h4>
              <p>{sizes.s}</p>
            </S>
            <M onClick={sizeSelect}>
              <h4>M</h4>
              <p>{sizes.m}</p>
            </M>
            <L onClick={sizeSelect}>
              <h4>L</h4>
              <p>{sizes.l}</p>
            </L>
            <XL onClick={sizeSelect}>
              <h4>XL</h4>
              <p>{sizes.xl}</p>
            </XL>
          </SizesContainer>
          <BuyBtn>Buy</BuyBtn>
        </Content>
      </Section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const ids = await getPaths("pants");

  const paths = ids.map((id) => ({
    params: {
      id,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const singlePants = await getSinglePants(params.id);

  return {
    props: {
      item: singlePants,
      sizes: singlePants.sizes,
    },
  };
}

export default Pants;
