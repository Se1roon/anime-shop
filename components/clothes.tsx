import React, { useState } from "react";
import Grid from "./grid";
import Filter from "./filter";
import styled from "styled-components";

// Styles

const ClothesContainer = styled.section`
  margin-top: 10rem;
  margin-bottom: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

// ====================================

interface ClothesProps {
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

const Clothes: React.FC<ClothesProps> = ({ records, linkTo }): JSX.Element => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(299.99);

  const updateMinPrice = (value) => {
    setMinPrice(value);
  };

  const updateMaxPrice = (value) => {
    setMaxPrice(value);
  };

  const filterRecords = () => {
    const filtered = records.filter(
      (record) => record.price >= minPrice && record.price <= maxPrice
    );

    return filtered;
  };

  return (
    <ClothesContainer>
      <Filter
        maxPrice={maxPrice}
        minPrice={minPrice}
        setMinPrice={updateMinPrice}
        setMaxPrice={updateMaxPrice}
      />
      <Grid records={filterRecords()} linkTo={linkTo} />
    </ClothesContainer>
  );
};

export default Clothes;
