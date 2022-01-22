import React, { useState, useEffect } from "react";
import { Hero, ButtonNav } from "../../components";
import { CardContent, TopProduct, MenuBrandsFilter } from "./auxiliars";
import { ISneaker } from "../../interfaces";

import { LandingContainer } from "../../styles";
const LandingPage: React.FC = () => {
  const [snekaersApi, setSneakersApi] = useState<ISneaker[]>([]);
  useEffect(() => {
    const requestApi = async () => {
      const res = await fetch("https://sneakersapinest.herokuapp.com/sneaker");
      const resJson = await res.json();
      setSneakersApi(resJson.sneakers);
    };
    setTimeout(() => {
      requestApi();
    }, 1500);
  }, []);

  return (
    <LandingContainer>
      <Hero />
      <ButtonNav />
      <CardContent tittle="Ultimos lanzamientos" snekaersApi={snekaersApi} />
      <TopProduct />
      <CardContent tittle="Más vendidos" snekaersApi={snekaersApi} />
      <MenuBrandsFilter />
    </LandingContainer>
  );
};

export default LandingPage;
