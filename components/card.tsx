import React from "react";
import Image from "next/image";
import styles from "./css/Card.module.css";
import Link from "next/link";
import styled from "styled-components";

// Styles

const CardContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: var(--bg-light);
  border-radius: 20px;
  margin: 20px 0;
  box-shadow: 0 0 6px 2px var(--clr-accent);
  position: relative;

  &::before {
    content: "";
    background-color: var(--clr-accent);
    width: 100%;
    height: 45%;
    border-radius: 20px 20px 0 0;
    position: absolute;
  }
`;

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ImageContainer = styled.div`
  --bg: #7d2ae8;
  --font-light-dark: #333;

  background-color: var(--bg);
  height: 140px;
  aspect-ratio: 1;
  padding: 3px;
  border-radius: 50%;
`;

const StyledImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border: 2px solid var(--bg-light);
  border-radius: 50%;
`;

const NamePrice = styled.div`
  color: var(--bg-dark);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.span`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const Price = styled.span`
  font-size: 15px;
`;

const Rating = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: center;

  & > * {
    width: 18px;
    aspect-ratio: 1;
    color: var(--bg-dark);
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

// =============================

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
    <CardContainer>
      <CardContent>
        <ImageContainer>
          <StyledImage
            as={Image}
            src={`${record.path_to_image}`}
            width={140}
            height={135}
            alt="A hoodie"
            className={styles.img}
            priority
          />
        </ImageContainer>

        <NamePrice>
          <Name>{record.name}</Name>
          <Price>{`${record.price} zł`}</Price>
        </NamePrice>

        <Rating>{record.rating ? getRating(record) : null}</Rating>

        <Buttons>
          <Link href={`/${collection}/${record.id}`}>
            <Button>Show</Button>
          </Link>
          <Button>Buy</Button>
        </Buttons>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
