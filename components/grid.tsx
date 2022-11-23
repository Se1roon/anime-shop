import React from "react";
import Image from "next/image";
import styles from "./css/Grid.module.css";
import Link from "next/link";
import getRating from "../utils/getRating";
import styled from "styled-components";

// Styles

const GridContainer = styled.section`
  width: 80%;
  margin-top: 5rem;
  margin-inline: auto;
  font-family: "Poppins", sans-serif;
  color: var(--bg-light);
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 1.5rem;

  @media (min-width: 660px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    width: 65%;
    margin-inline: unset;
    align-self: flex-end;
  }

  @media (min-width: 1450px) {
    width: 70%;
    margin-inline: unset;
    align-self: flex-end;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledLink = styled.a`
  --bg: #111;

  cursor: pointer;
  font-size: 0.8rem;
  background-color: var(--bg);
  width: 100%;
  padding-block: 1.2rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: 0 0 1.1rem 1px var(--clr-accent);
  }

  @media (min-width: 500px) {
    font-size: 1.1rem;
  }

  @media (min-width: 660px) {
    font-size: 0.8rem;
  }
`;

const Item = styled.div`
  width: 100%;
  padding-block: 1.2rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  margin-bottom: 1rem;
  border-radius: 2rem;
`;

const ItemContent = styled.section`
  text-align: center;
`;

const Rating = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    width: 20px;
    aspect-ratio: 1;
  }
`;

// ================================

interface GridProps {
  records: {
    id: string;
    name: string;
    path_to_image: string;
    price: number;
    rating: number;
    sizes: string;
    bestseller: boolean;
  }[];
  linkTo: string;
}

const Grid: React.FC<GridProps> = ({ records, linkTo }): JSX.Element => {
  return (
    <GridContainer>
      {records.map((record) => {
        return (
          <StyledLink
            as={Link}
            key={record.id}
            href={`/${linkTo}/${record.id}`}
          >
            <Item>
              <StyledImage
                as={Image}
                src={`${record.path_to_image}`}
                width={180}
                height={200}
                alt="cc"
              />
              <ItemContent>
                <h2>{record.name}</h2>
                <p>{record.price}zł</p>
                <Rating>{record.rating ? getRating(record) : null}</Rating>
              </ItemContent>
            </Item>
          </StyledLink>
        );
      })}
    </GridContainer>
  );
};

export default Grid;
