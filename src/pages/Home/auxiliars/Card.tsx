import { useDispatch } from "react-redux";
import {
  setSneakerCart,
  setTotalCart,
  setCountCartProduct,
} from "../../../features/sneakersSlice";
import {
  MainCard,
  TopContainer,
  BotContainer,
  Name,
  Series,
  Price,
} from "../../../styles";
import { ISneaker } from "../../../interfaces";
const Card = (props: { sneaker: ISneaker }) => {
  const dispatch = useDispatch();
  const handleSneakerCart = (sneaker: ISneaker) => {
    dispatch(setSneakerCart(sneaker));
    dispatch(setTotalCart(sneaker.price));
    dispatch(setCountCartProduct());
  };
  return (
    <MainCard>
      <div>
        <TopContainer>
          <img src={props.sneaker.imageURL} alt={props.sneaker.name} />
        </TopContainer>
        <BotContainer>
          <Name>{props.sneaker.name}</Name>
          <Series>{props.sneaker.brand}</Series>
          <Price>${props.sneaker.price}</Price>
        </BotContainer>
        <div className="button_container">
          <button
            className="button_cart"
            onClick={() => handleSneakerCart(props.sneaker)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </MainCard>
  );
};

export default Card;
