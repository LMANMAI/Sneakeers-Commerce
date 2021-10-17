import { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectSneakers } from "../features/sneakersSlice";
import { IShopProps } from "../interfaces";
const ShopCartContainer = styled.div<IShopProps>`
  height: 100vh;
  width: 50vw;
  position: fixed;
  transition: all 450ms ease-in-out;
  right: ${(props) => (props.position ? 0 : "-100vw")};
  top: 0px;
  z-index: 99;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  padding: 1.125rem;
  @media (min-width: 768px) {
    width: 30vw;
  }
`;

const Cart = (props: { position: Boolean; fn: Function }) => {
  const sneakers = useSelector(selectSneakers);
  useEffect(() => {
    console.log("Los sneakers son: ", sneakers);
  }, [sneakers]);
  return (
    <ShopCartContainer position={props.position}>
      {sneakers.map((sneaker) => (
        <p>{sneaker.name}</p>
      ))}
      <button onClick={() => props.fn()}>Cerrar</button>
    </ShopCartContainer>
  );
};

export default Cart;
