import React from "react";
import Image from "../../../assets/gy3438_ta.webp";
import {
  MainCard,
  TopContainer,
  BotContainer,
  Name,
  Series,
  Price,
} from "../../../styles";
interface ISneaker {
  _id: String;
  name: string;
  price: Number;
  relaseYear: String;
  imageURL: string;
  brand: String;
  createdAt: Date;
}
const Card = (props: { sneaker: ISneaker }) => {
  console.log(props.sneaker);
  return (
    <MainCard>
      <TopContainer>
        <img src={props.sneaker.imageURL} alt={props.sneaker.name} />
      </TopContainer>
      <BotContainer>
        <Name>{props.sneaker.name}</Name>
        <Series>{props.sneaker.brand}</Series>
        <Price>${props.sneaker.price}</Price>
      </BotContainer>
    </MainCard>
  );
};

export default Card;
