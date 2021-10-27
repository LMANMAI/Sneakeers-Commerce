import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeSneakerBasket, selectBasket } from "../features/sneakersSlice";
import { IShopProps, ISneaker } from "../interfaces";
import { SneakerCardCart } from "../styles";
import { Link } from "react-router-dom";
import { GoTrashcan } from "react-icons/go";
import { useEffect } from "react";
const ShopCartContainer = styled.div<IShopProps>`
  height: 100%;
  width: 65vw;
  position: fixed;
  flex-direction: column;
  justify-content: space-evenly;
  transition: all 450ms ease-in-out;
  right: ${(props) => (props.position ? "0px" : "-100vw")};
  top: 0px;
  z-index: 99;
  background-color: #eee;
  padding: 1.125rem;
  .wraper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90%;
    overflow-y: auto;
  }
  .link_button {
    text-decoration: none;
    padding: 8px;
    background-color: #fa6b34;
    color: whitesmoke;
    border-radius: 5px;
  }
  .sneaker_cart_container {
    background-color: white;
    border-radius: 5px;
    margin: 5px;
    width: 90%;
  }
  p {
    text-align: center;
  }
  @media (min-width: 768px) {
    width: 35vw;
    max-width: 400px;
  }
`;

const Cart = (props: { position: Boolean; fn: Function }) => {
  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();
  const handleFuncitons = (sneaker: ISneaker) => {
    dispatch(removeSneakerBasket(sneaker));
  };

  return (
    <ShopCartContainer position={props.position}>
      <div className="wraper">
        {basket.length > 0 ? (
          basket.map((sneaker) => (
            <>
              <div className="sneaker_cart_container" key={sneaker._id}>
                <SneakerCardCart>
                  <img src={sneaker.imageURL} alt={sneaker.name} />
                  <p>{sneaker.name}</p>
                </SneakerCardCart>
                <button onClick={() => handleFuncitons(sneaker)}>
                  <GoTrashcan />
                </button>
              </div>
              <hr />
            </>
          ))
        ) : (
          <p>Todavia no hay productos en el carrito</p>
        )}
      </div>
      {basket.length !== 0 && (
        <Link className="link_button" to="/Checkout" onClick={() => props.fn()}>
          Ver Carrito
        </Link>
      )}
      <button className="button_close" onClick={() => props.fn()}>
        Cerrar
      </button>
    </ShopCartContainer>
  );
};

export default Cart;
