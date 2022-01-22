import { useState, useEffect } from "react";
import { Card } from "./";
import {
  CardWrapperMain,
  CardContainer,
  ModalCardCarrousel,
  ModalCard,
  RightSide,
} from "../../../styles";
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
  //state de la img
  const [imgCarrousel, setImgCarrousel] = useState(
    sneakerActive?.posterPathImage
  );
  useEffect(() => {
    setImgCarrousel(sneakerActive?.posterPathImage);
  }, [sneakerActive]);
  return (
    <CardWrapperMain>
      <h2>{props.tittle}</h2>
      <CardContainer>
        {props.snekaersApi.map((sneaker: ISneaker) => (
          <Card key={sneaker._id} sneaker={sneaker} />
        ))}
        {modalstate && (
          <Modal>
            <ModalCard>
              <ModalCardCarrousel>
                {sneakerActive &&
                  sneakerActive.imgs.map((sneaker, index) => (
                    <img
                      key={`img_${index}`}
                      src={sneaker}
                      alt={`img_${index}`}
                      loading="lazy"
                      onClick={() => setImgCarrousel(sneaker)}
                    />
                  ))}
              </ModalCardCarrousel>
              <div className="front_image">
                <img src={imgCarrousel} alt="imagen_carrousel" loading="lazy" />
              </div>
              <RightSide>
                <h3>{sneakerActive?.name}</h3>
                <p>{sneakerActive?.brand}</p>
                <select name="genero" id="genero">
                  <option value={sneakerActive?.genre}>
                    Genero: {sneakerActive?.genre}
                  </option>
                </select>
                <select name="talles" id="talles">
                  {sneakerActive?.sizes.map((size) => (
                    <option value={size}>Talle: {size}us</option>
                  ))}
                </select>
                <button className="basket_button">Agreagar al carrito</button>
              </RightSide>
            </ModalCard>
          </Modal>
        )}
      </CardContainer>
    </CardWrapperMain>
  );
};

export default CardContent;
