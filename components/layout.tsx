import React from "react";

// CSS
import styles from "./css/Layout.module.css";

// Components
import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="https://i.postimg.cc/D0xq27VX/logo.png" />
        <meta
          name="description"
          content="You anime shopping centre! Buy clothes from your favorite animes and mangas!"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/L5bPZQdP/ogImg.jpg"
        />
        <meta name="og:title" content="ZA WORUDO" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
