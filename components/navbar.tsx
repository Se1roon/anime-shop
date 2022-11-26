import React, { useState } from "react";
import styled from "styled-components";

// Styles
import styles from "./css/Navbar.module.css";

// Components
import Image from "next/image";
import Link from "next/link";

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 630px) {
    background-color: var(--bg-light);
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
      transform-origin: top;
      transform: ${(props) => (props.isMenuExpanded ? "scale(1)" : "scale(0)")};
      transition: all 0.3s ease;
    }
  }
`;

const Navbar: React.FC = (): JSX.Element => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleMenuExpand = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="https://i.postimg.cc/D0xq27VX/logo.png"
            width={64}
            height={64}
            alt="Logo"
          />
        </Link>
        <div className={styles.menu} onClick={handleMenuExpand}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Nav isMenuExpanded={isMenuExpanded}>
        <ul className={styles.links}>
          <li>
            <Link href="/hoodies">Hoodies</Link>
          </li>
          <li>
            <Link href="/shirts">Shirts</Link>
          </li>
          <li>
            <Link href="/pants">Pants</Link>
          </li>
        </ul>
        <Link href="/contact">
          <button className={styles.btn}>Contact</button>
        </Link>
      </Nav>
    </header>
  );
};

export default Navbar;
