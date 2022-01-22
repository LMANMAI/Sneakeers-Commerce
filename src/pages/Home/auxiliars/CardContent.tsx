import { Card } from "./";
import {
  CardWrapperMain,
  CardContainer,
  ModalCardCarrousel,
  ModalCard,
  RightSide,
} from "../../../styles";
import { Spinner } from "../../../components";
import { ISneaker } from "../../../interfaces";
import { Modal } from "../../../components";
import {
  selectSneakerActive,
  selectModal,
} from "../../../features/sneakersSlice";
import { useSelector } from "react-redux";
const CardContent = (props: {
  snekaersApi: ISneaker[];
  tittle: String;
}): JSX.Element => {
  const sneakerActive = useSelector(selectSneakerActive);
  const modalstate = useSelector(selectModal);
  return (
    <CardWrapperMain>
      <h2>{props.tittle}</h2>
      <CardContainer>
        {props.snekaersApi.length !== 0 ? (
          props.snekaersApi.map((sneaker: ISneaker) => (
            <Card key={sneaker._id} sneaker={sneaker} />
          ))
        ) : (
          <Spinner />
        )}
        {modalstate ? (
          <Modal>
            <ModalCard>
              <ModalCardCarrousel>
                {sneakerActive &&
                  sneakerActive.imgs.map((sneaker) => (
                    <img src={sneaker} alt="img" loading="lazy" />
                  ))}
              </ModalCardCarrousel>
              <Card sneaker={sneakerActive} />
              <RightSide>
                <h3>{sneakerActive?.name}</h3>
                <p>{sneakerActive?.brand}</p>
                <select name="" id="">
                  <option value="">Genero: {sneakerActive?.genre}</option>
                </select>
                <select name="" id="">
                  {sneakerActive?.sizes.map((size) => (
                    <option value="size">Talle: {size}us</option>
                  ))}
                </select>
                <button className="basket_button">Agreagar al carrito</button>
              </RightSide>
            </ModalCard>
          </Modal>
        ) : null}
      </CardContainer>
    </CardWrapperMain>
  );
};

export default CardContent;
