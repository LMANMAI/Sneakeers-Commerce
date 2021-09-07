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
const Card: React.FC = () => {
  return (
    <MainCard>
      <TopContainer>
        <img src={Image} alt={Image} />
      </TopContainer>
      <BotContainer>
        <Name>Nombre</Name>
        <Series>series</Series>
        <Price>$100</Price>
      </BotContainer>
    </MainCard>
  );
};

export default Card;
