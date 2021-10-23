import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LinkContainer,
  InputContainer,
  InputSearch,
  CartSticky,
} from "../styles";
import { ImCart, ImSearch } from "react-icons/im";
import SneakerLogo from "../assets/sneakers.png";
import { Cart } from ".";
import { useSelector } from "react-redux";
import { selectCountProduct } from "../features/sneakersSlice";
const Header: React.FC = () => {
  const [position, setPosition] = useState(false);
  const count = useSelector(selectCountProduct);
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
        <button onClick={() => setPosition(!position)}>
          <ImCart />
          {count !== 0 ? <CartSticky>{count}</CartSticky> : null}
        </button>
        <Cart position={position} fn={setPosition} />
      </LinkContainer>
    </HeaderContainer>
  );
};

export default Header;
