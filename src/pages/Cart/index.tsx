import React from "react";
import {
  CartPageContainer,
  CartBoxItemsContainer,
  CartButton,
  CartPageShop,
  ImgShopContainer,
} from "../../styles";
import { useSelector } from "react-redux";
import { selectBasket, selectTotalCart } from "../../features/sneakersSlice";
const CartPage: React.FC = () => {
  const sneakers = useSelector(selectBasket);
  const totalCart = useSelector(selectTotalCart);

  return (
    <main>
      <CartPageContainer>
        <CartBoxItemsContainer>
          {sneakers.length === 0 ? (
            <div className="message_container">
              <h3>Tu carrito está vacío</h3>
              <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
            </div>
          ) : (
            sneakers.map((sneaker) => (
              <CartPageShop>
                <ImgShopContainer>
                  <img src={sneaker.imageURL} alt={sneaker.name} />
                </ImgShopContainer>
                <p>{sneaker.name}</p>
                <span>${sneaker.price}</span>
              </CartPageShop>
            ))
          )}
        </CartBoxItemsContainer>
        {totalCart > 0 && (
          <CartPageShop className="total_shop">
            <span>Total: </span>
            <p>$ {totalCart}</p>
          </CartPageShop>
        )}
        <CartButton type="button" disabled>
          Comprar carrito
        </CartButton>
      </CartPageContainer>
    </main>
  );
};

export default CartPage;
