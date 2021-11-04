import { useEffect, useState } from "react";
import { Card } from "./";
import { CardWrapperMain, CardContainer } from "../../../styles";
import { ISneaker } from "../../../interfaces";
import { Spinner } from "../../../components";
const CardContent = (): JSX.Element => {
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
    <CardWrapperMain>
      <h2>Lanzamientos</h2>

      <CardContainer>
        {snekaersApi.length !== 0 ? (
          snekaersApi.map((sneaker: ISneaker) => (
            <Card key={sneaker._id} sneaker={sneaker} />
          ))
        ) : (
          <Spinner />
        )}
      </CardContainer>
    </CardWrapperMain>
  );
};

export default CardContent;
