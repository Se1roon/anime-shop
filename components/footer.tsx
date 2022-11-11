import React from "react";
import styles from "./css/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <p>Copyright 2022 &copy; Se1roon</p>
      <div>
        <Link href="https://github.com/Se1roon" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
