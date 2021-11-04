import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LinkContainer,
  InputContainer,
  InputSearch,
  CartSticky,
} from "../styles";
import { ImCart, ImSearch } from "react-icons/im";
import { HiMenu } from "react-icons/hi";
import SneakerLogo from "../assets/sneakers.png";
import { Cart, MenuHeaderProfile } from ".";
import { useSelector, useDispatch } from "react-redux";
import { selectBasket } from "../features/sneakersSlice";
import { provider, auth, signInWithPopup } from "../firebase";
import {
  setUser,
  setVerification,
  selectAuthenticated,
} from "../features/userSlice";
const Header: React.FC = () => {
  //states
  const [position, setPosition] = useState<boolean>(false);
  const [menuposition, setMenuPosition] = useState<boolean>(false);
  const dispatch = useDispatch();
  //partes del reducer
  const basket = useSelector(selectBasket);
  const authenticated = useSelector(selectAuthenticated);

  const handleSingIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      dispatch(
        setUser({
          firstName: result.user.displayName,
          email: result.user.email,
          id: result.user.uid,
          createdAt: result.user.metadata.creationTime,
        })
      );
      dispatch(setVerification());
    });
  };

  return (
    <HeaderContainer>
      <LinkContainer>
        <div>
          {authenticated ? (
            <button onClick={() => setMenuPosition(true)}>
              <HiMenu />
            </button>
          ) : null}
          <MenuHeaderProfile position={menuposition} fn={setMenuPosition} />
        </div>
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
          {!authenticated ? (
            <button
              type="button"
              className="login_button"
              onClick={() => handleSingIn()}
            >
              Inicia sesion
            </button>
          ) : null}
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
