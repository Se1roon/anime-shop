import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Styles
import styles from "./css/Footer.module.css";

// Components
import Link from "next/link";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={styles.container}>
      <p>Copyright 2022 &copy; Se1roon</p>
      <div>
        <Link href="https://github.com/Se1roon/anime-shop" target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
