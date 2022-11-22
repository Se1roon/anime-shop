import React from "react";
import styles from "./css/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import styled from "styled-components";

// Styles

const FooterContainer = styled.footer`
  font-family: "Poppins", sans-serif;
  color: var(--bg-light);
  background-color: var(--bg-dark);
  width: 100%;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  position: relative;
  bottom: 0;
`;

const Icon = styled.i`
  border-radius: 100%;
  width: 20px;
  aspect-ratio: 1;
  transition: all 0.3s ease-in;

  &:hover {
    color: var(--clr-accent);
    box-shadow: 0 0 0.5rem 1px var(--clr-accent);
  }
`;

// ==============================

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterContainer>
      <p>Copyright 2022 &copy; Se1roon</p>
      <div>
        <Link href="https://github.com/Se1roon/anime-shop" target="_blank">
          <Icon as={FontAwesomeIcon} icon={faGithub} />
        </Link>
      </div>
    </FooterContainer>
  );
};

export default Footer;
