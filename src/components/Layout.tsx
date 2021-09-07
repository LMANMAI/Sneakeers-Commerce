import React from "react";
import { Container } from "../styles";
import { Header, Footer } from "../components";
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
