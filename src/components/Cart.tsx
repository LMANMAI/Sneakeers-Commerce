import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectSneakers, removeSneakerCart } from "../features/sneakersSlice";
import { IShopProps } from "../interfaces";
import { SneakerCardCart } from "../styles";
import { Link } from "react-router-dom";
import { GoTrashcan } from "react-icons/go";
const ShopCartContainer = styled.div<IShopProps>`
  height: 100%;
  width: 65vw;
  position: fixed;
  transition: all 450ms ease-in-out;
  right: ${(props) => (props.position ? "0px" : "-100vw")};
  top: 0px;
  z-index: 99;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  padding: 1.125rem;
  .link_button {
    text-decoration: none;
    padding: 8px;
    background-color: #fa6b34;
    color: whitesmoke;
    border-radius: 5px;
    position: absolute;
    bottom: 70px;
  }
  .sneaker_cart_container {
    background-color: white;
    border-radius: 5px;
    margin: 5px;
  }
  .button_close {
    position: fixed;
    bottom: 25px;
  }
  @media (min-width: 768px) {
    width: 35vw;
    max-width: 400px;
  }
`;

const Cart = (props: { position: Boolean; fn: Function }) => {
  const sneakers = useSelector(selectSneakers);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Los sneakers son: ", sneakers);
  }, [sneakers]);
  return (
    <ShopCartContainer position={props.position}>
      {sneakers.length > 0 ? (
        sneakers.map((sneaker) => (
          <>
            <div className="sneaker_cart_container">
              <SneakerCardCart>
                <img src={sneaker.imageURL} alt={sneaker.name} />
                <p>{sneaker.name}</p>
              </SneakerCardCart>
              <button onClick={() => dispatch(removeSneakerCart(sneaker._id))}>
                <GoTrashcan />
              </button>
            </div>
            <hr />
          </>
        ))
      ) : (
        <p>Todavia no hay productos en el carrito</p>
      )}
      <Link className="link_button" to="/Checkout" onClick={() => props.fn()}>
        Terminar compra
      </Link>
      <button className="button_close" onClick={() => props.fn()}>
        Cerrar
      </button>
    </ShopCartContainer>
  );
};

export default Cart;
