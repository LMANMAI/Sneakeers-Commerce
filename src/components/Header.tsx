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
import { selectBasket } from "../features/sneakersSlice";
import { provider, auth, signInWithPopup } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";
const Header: React.FC = () => {
  const [position, setPosition] = useState(false);
  const basket = useSelector(selectBasket);
  const handleSingIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log(result.user);
    });
  };
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
        <div>
          <button
            type="button"
            className="login_button"
            onClick={() => handleSingIn()}
          >
            Inicia sesion
          </button>
          <div>
            <ImCart
              onClick={() => setPosition(!position)}
              className="button_cart"
            />
            {basket.length !== 0 ? (
              <CartSticky>{basket.length}</CartSticky>
            ) : null}
          </div>
        </div>
        <Cart position={position} fn={setPosition} />
      </LinkContainer>
    </HeaderContainer>
  );
};

export default Header;
