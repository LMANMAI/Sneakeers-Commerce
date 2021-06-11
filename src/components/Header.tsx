import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  border: 1px solid red;
`;
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      ACA TIENE QUE IR ELHEADER
      <Link to="/">
        <p>Landing</p>
      </Link>
      <Link to="/Checkout">
        <p>CArrito</p>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
