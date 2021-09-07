import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LinkContainer,
  InputContainer,
  InputSearch,
} from "../styles";
import { ImCart, ImSearch } from "react-icons/im";
import SneakerLogo from "../assets/sneakers.png";
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LinkContainer>
        <Link to="/">
          <div>
            <img src={SneakerLogo} alt="logo" />
          </div>
        </Link>
      </LinkContainer>

      <InputContainer>
        <ImSearch />
        <InputSearch
          type="search"
          name=""
          id=""
          placeholder="Buscar producto"
        />
      </InputContainer>
      <LinkContainer>
        <Link to="/Checkout">
          <div>
            <ImCart />
          </div>
        </Link>
      </LinkContainer>
    </HeaderContainer>
  );
};

export default Header;
