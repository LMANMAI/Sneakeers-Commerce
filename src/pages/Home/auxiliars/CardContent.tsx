import { useEffect, useState } from "react";
import { Card } from "./";
import { CardWrapperMain, CardContainer } from "../../../styles";
import { ISneaker } from "../../../interfaces";
const CardContent = (): JSX.Element => {
  const [snekaersApi, setSneakersApi] = useState<ISneaker[]>([]);
  useEffect(() => {
    const requestApi = async () => {
      const res = await fetch("https://sneakersapinest.herokuapp.com/sneaker");
      const resJson = await res.json();

      setSneakersApi(resJson.sneakers);
    };
    requestApi();
  }, []);

  return (
    <CardWrapperMain>
      <h2>Lanzamientos</h2>
      <CardContainer>
        {snekaersApi.map((sneaker: ISneaker) => (
          <Card sneaker={sneaker} />
        ))}
      </CardContainer>
    </CardWrapperMain>
  );
};

export default CardContent;
