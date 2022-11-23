import styled from "styled-components";

export const Section = styled.section`
  margin-block: 10rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 870px) {
    margin-top: 15rem;
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (min-width: 1100px) {
    margin-inline: 10%;
  }

  @media (min-width: 1300px) {
    margin-inline: 20%;
  }
`;

export const ImgContainer = styled.div`
  width: min(80%, 22rem);
  height: auto;
`;

export const StyledImage = styled.img`
  width: 100%;
  border-radius: 2rem;
  box-shadow: 0 0 0.8rem 2px var(--clr-accent);
`;

export const Content = styled.div`
  font-family: "Montserrat", sans-serif;
  color: var(--bg-light);
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Price = styled.p`
  font-size: 1.1em;
`;

export const Rating = styled.div`
  margin-block: 0.4rem 1rem;
  display: flex;
  justify-content: center;

  & > * {
  width: 1.5rem;
  aspect-ratio: 1;
`;

export const SizesContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: grid;
  place-content: center;
  grid-template-areas:
    "XS S"
    "M L"
    "XL XL";
  gap: 0.35rem;

  & > div {
    cursor: pointer;
    width: 4rem;
    aspect-ratio: 1;
    border: 2px solid var(--bg-light);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: border-color 0.3s ease;
  }

  & > div:hover {
    border-color: var(--clr-accent);
  }

  & > .clicked {
    background-color: var(--clr-accent);
    border-color: var(--bg-dark);
  }
`;

export const XS = styled.div`
  grid-area: XS;
`;

export const S = styled.div`
  grid-area: S;
`;

export const M = styled.div`
  grid-area: M;
`;

export const L = styled.div`
  grid-area: L;
`;

export const XL = styled.div`
  justify-self: center;
  grid-area: XL;
`;

export const BuyBtn = styled.button`
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  color: var(--bg-light);
  background: transparent;
  margin-top: 1.5rem;
  padding: 0.4rem 1.1rem;
  outline: 0;
  border: 2px solid var(--clr-accent);
  border-radius: 1em;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background-color: var(--clr-accent);
    box-shadow: 0 0 1rem 1px var(--clr-accent);
  }
`;
