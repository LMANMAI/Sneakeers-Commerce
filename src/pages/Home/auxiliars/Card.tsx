import { useDispatch } from "react-redux";
import { setBasket } from "../../../features/sneakersSlice";
import {
  MainCard,
  TopContainer,
  BotContainer,
  Name,
  Series,
  Price,
} from "../../../styles";
import { ISneaker } from "../../../interfaces";
import { useSelector } from "react-redux";
import {
  selectModal,
  setModal,
  setSneakerActive,
} from "../../../features/sneakersSlice";

const Card = (props: { sneaker: ISneaker | null }) => {
  const { sneaker } = props;
  const dispatch = useDispatch();
  const handleSneakerCart = (sneaker: ISneaker) => {
    localStorage.setItem("sneaker", sneaker._id);
    dispatch(setBasket(sneaker));
  };
  const modalstate = useSelector(selectModal);

  const handleCloseModal = (value: boolean) => {
    dispatch(setModal(value));
  };
  if (sneaker === null) return null;
  return (
    <>
      <MainCard>
        <div>
          <TopContainer>
            <img
              src={sneaker.posterPathImage}
              alt={sneaker.name}
              loading="lazy"
            />
          </TopContainer>
          <BotContainer>
            <Name>{sneaker.name}</Name>
            <Series>{sneaker.brand}</Series>
            <Price>${sneaker.price}</Price>
          </BotContainer>
          <div className="button_container">
            {modalstate ? (
              <button
                className="button_cart"
                onClick={() => handleSneakerCart(sneaker)}
              >
                Agregar al carrito
              </button>
            ) : (
              <button
                className="button_cart"
                onClick={() => {
                  //handleSneakerCart(sneaker);
                  handleCloseModal(true);
                  dispatch(setSneakerActive(sneaker));
                }}
              >
                Ver más
              </button>
            )}
          </div>
        </div>
      </MainCard>
    </>
  );
};

export default Card;
