import React from "react";
import { Card } from "./";
import { CardWrapperMain, CardContainer } from "../../../styles";
const CardContent: React.FC = () => {
  return (
    <CardWrapperMain>
      <h2>Lanzamientos</h2>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </CardWrapperMain>
  );
};

export default CardContent;
