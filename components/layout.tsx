import Head from "next/head";
import React from "react";
import styles from "./css/Layout.module.css";
import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <meta
          name="description"
          content="You anime shopping centre! Buy clothes from your favorite animes and mangas!"
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="og:title" content="ZA WORUDO" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
