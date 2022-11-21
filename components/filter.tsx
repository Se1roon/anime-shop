import React, { useState } from "react";
import styled from "styled-components";

// Styles

const Section = styled.section`
  font-family: "Montserrat", sans-serif;
  color: var(--bg-light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1000px) {
    margin-top: 6rem;
    padding-inline: 4rem;
    align-self: flex-start;
    position: sticky;
    top: 20%;
  }

  @media (min-width: 1100px) {
    padding-left: 0;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.3rem;
  margin-bottom: 0.2rem;
`;

const Input = styled.input`
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  color: var(--bg-light);
  background: transparent;
  outline: 0;
  padding: 0.3rem 1rem;
  border: 2px solid var(--clr-accent);
  border-radius: 1rem;
`;

// ==============================
interface FilterProps {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
}

const Filter: React.FC<FilterProps> = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}): JSX.Element => {
  return (
    <Section>
      <List>
        <ListItem>
          <Label htmlFor="minPrice">Min Price</Label>
          <Input
            as="input"
            type="number"
            name="minPrice"
            id="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </ListItem>
        <ListItem>
          <Label htmlFor="maxPrice">Max Price</Label>
          <Input
            as="input"
            type="number"
            name="maxPrice"
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </ListItem>
      </List>
    </Section>
  );
};

export default Filter;
