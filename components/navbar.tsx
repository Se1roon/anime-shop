import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./css/Navbar.module.css";

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
      <nav
        className={
          isMenuExpanded ? `${styles.nav} ${styles.visible}` : styles.nav
        }
      >
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
        <Link className={styles.cta} href="/contact">
          <button className={styles.btn}>Contact</button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
