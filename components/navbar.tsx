import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./css/Navbar.module.css";
import styled from "styled-components";

// Styles

const Header = styled.header`
  --clr-dark: #000;

  background-color: var(--bg-light);
  width: 100%;
  padding: 1rem 3rem;
  box-shadow: 0 0 2rem 4px var(--clr-accent);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;

  & li,
  & a,
  & button {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: var(--clr-dark);
    text-decoration: none;
  }

  @media screen and (max-width: 630px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  @media screen and (max-width: 630px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Logo = styled.img`
  cursor: pointer;
  width: 60px;
  height: auto;
`;

const Menu = styled.div`
  display: none;

  @media screen and (max-width: 630px) {
    cursor: pointer;
    display: block;

    & > * {
      background-color: var(--clr-dark);
      width: 2rem;
      height: 2px;
      margin-block: 8px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 630px) {
    background-color: ${(props) =>
      props.isMenuExpanded ? "var(--bg-light)" : "unset"};
    max-height: ${(props) => (props.isMenuExpanded ? "100%" : "0")};
    width: ${(props) => (props.isMenuExpanded ? "100%" : "0%")};
    aspect-ratio: ${(props) => (props.isMenuExpanded ? "1" : "unset")};
    padding-top: 1rem;
    padding-bottom: ${(props) => (props.isMenuExpanded ? "2rem" : "0")};
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 100%;
    transition: all 0.3s ease;

    & > * {
      transform: ${(props) => (props.isMenuExpanded ? "scale(1)" : "scale(0)")};
      transition: all 0.3s ease;
    }
  }
`;

const Links = styled.ul`
  list-style: none;
  margin-right: 3rem;

  & li {
    padding-inline: 1.4rem;
    display: inline-block;
  }

  & li a {
    transition: all 0.3s ease;
  }

  & li a:hover,
  & li a:focus {
    color: var(--clr-accent);
  }

  @media screen and (max-width: 630px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Button = styled.button`
  cursor: pointer;
  background: var(--clr-accent);
  padding: 0.8rem 1.8rem;
  border: 0;
  border-radius: 2em;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: 0 0 10px 2px var(--clr-accent);
  }
`;

// =================================

const Navbar: React.FC = (): JSX.Element => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleMenuExpand = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <Header>
      <Container>
        <Link href="/">
          <Logo
            as={Image}
            src="https://i.postimg.cc/D0xq27VX/logo.png"
            width={64}
            height={64}
            alt="Logo"
          />
        </Link>
        <Menu onClick={handleMenuExpand}>
          <div></div>
          <div></div>
          <div></div>
        </Menu>
      </Container>
      <Nav isMenuExpanded={isMenuExpanded}>
        <Links>
          <li>
            <Link href="/hoodies">Hoodies</Link>
          </li>
          <li>
            <Link href="/shirts">Shirts</Link>
          </li>
          <li>
            <Link href="/pants">Pants</Link>
          </li>
        </Links>
        <Link href="/contact">
          <Button>Contact</Button>
        </Link>
      </Nav>
    </Header>
  );
};

export default Navbar;
