import React, { useState, useEffect, Suspense } from "react";
import { Hero, ButtonNav } from "../../components";
import { TopProduct, MenuBrandsFilter } from "./auxiliars";
import { ISneaker } from "../../interfaces";

import { LandingContainer } from "../../styles";
const CardContentComponent = React.lazy(
  () => import("./auxiliars/CardContent")
);
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
      <Suspense fallback={<div>cargando...</div>}>
        <CardContentComponent
          tittle="Ultimos lanzamientos"
          snekaersApi={snekaersApi}
        />
      </Suspense>
      <TopProduct />
      <Suspense fallback={<div>cargando...</div>}>
        <CardContentComponent tittle="Más vendidos" snekaersApi={snekaersApi} />
      </Suspense>
      <MenuBrandsFilter />
    </LandingContainer>
  );
};

export default LandingPage;
