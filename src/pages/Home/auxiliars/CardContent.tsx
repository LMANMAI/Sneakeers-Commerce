import React, { useEffect, useState } from "react";
import { Card } from "./";
import { CardWrapperMain, CardContainer } from "../../../styles";
interface ISneaker {
  _id: String;
  name: string;
  price: Number;
  relaseYear: String;
  imageURL: string;
  brand: String;
  createdAt: Date;
}
const CardContent = (): JSX.Element => {
  const [snekaers, setSneakers] = useState([]);
  useEffect(() => {
    const requestApi = async () => {
      const res = await fetch("https://sneakersapinest.herokuapp.com/sneaker");
      const resJson = await res.json();
      console.log("respuesta de la api", resJson.sneakers);
      setSneakers(resJson.sneakers);
    };
    requestApi();
  }, []);
  return (
    <CardWrapperMain>
      <h2>Lanzamientos</h2>
      <CardContainer>
        {snekaers.map((sneaker: ISneaker) => (
          <Card sneaker={sneaker} />
        ))}
      </CardContainer>
    </CardWrapperMain>
  );
};

export default CardContent;
