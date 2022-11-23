import Head from "next/head";
import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import styled from "styled-components";

// Styles

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// ==================================

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/images/logo.png" />
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
    </Container>
  );
};

export default Layout;
