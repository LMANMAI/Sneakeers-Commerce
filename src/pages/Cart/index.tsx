import React, { useEffect, useState } from "react";
import {
  CartPageContainer,
  CartBoxItemsContainer,
  CartButton,
  CartPageShop,
  ImgShopContainer,
  DeleteButton,
} from "../../styles";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectBasket,
  selectTotalCart,
  removeSneakerBasket,
} from "../../features/sneakersSlice";
import { ISneaker } from "../../interfaces";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import axios from "../../config/axios";

const CartPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const sneakers = useSelector(selectBasket);
  const totalCart = useSelector(selectTotalCart);

  //stripe
  const stripe = useStripe();
  const elements = useElements();
  //states
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [processing, setProcessing] = useState<boolean | string>();
  const [message, setMessage] = useState<null | string>();
  const [success, setScucces] = useState(false);
  const [clientsecret, setClientSecret] = useState<any>();
  //functions

  const handleRemove = (snesaker: ISneaker) => {
    dispatch(removeSneakerBasket(snesaker));
  };
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${totalCart}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [sneakers]);

  console.log("the secret is", clientsecret);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }
    setMessage("Creating payment intent");

    const cardElement = elements.getElement(CardElement);
    if (cardElement) {
      const payload = await stripe
        .confirmCardPayment(clientsecret, {
          payment_method: {
            card: cardElement,
          },
        })
        .then(({ paymentIntent }) => {
          setScucces(true);
          setError(null);
          setProcessing(false);
          history.replace("/Checkout");
        });
    }
  };
  const handleChange = (event: any) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

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
              <CartPageShop key={sneaker._id}>
                <ImgShopContainer>
                  <img src={sneaker.imageURL} alt={sneaker.name} />
                </ImgShopContainer>
                <div>
                  <p>{sneaker.name}</p>
                  <DeleteButton onClick={() => handleRemove(sneaker)}>
                    Eliminar
                  </DeleteButton>
                </div>
                <span>${sneaker.price}</span>
              </CartPageShop>
            ))
          )}
        </CartBoxItemsContainer>
        {totalCart > 0 && (
          <>
            <CartPageShop className="total_shop">
              <span>Total: </span>
              <p>$ {totalCart}</p>
            </CartPageShop>
            <div className="payment_section">
              <div className="payment_tittle">
                <h3>Metodos de pago</h3>
              </div>
              <div className="payment_details">
                <form onSubmit={handleSubmit} id="payment-form">
                  {message ? <p>{message}</p> : null}
                  <CardElement onChange={handleChange} id="card-element" />
                  <CartButton
                    type="submit"
                    disabled={
                      sneakers.length === 0 || processing || disabled
                        ? true
                        : false
                    }
                  >
                    {processing ? "Procesando" : "Comprar carrito"}
                  </CartButton>
                </form>
              </div>
            </div>
          </>
        )}
      </CartPageContainer>
    </main>
  );
};

export default CartPage;
