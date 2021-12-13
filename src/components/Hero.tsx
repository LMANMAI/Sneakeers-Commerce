import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer, Carrousel } from "../styles";
const Hero: React.FC = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <SliderContainer>
      <Carrousel {...settings}>
        <div>
          <img
            src="https://essential.vteximg.com.br/arquivos/ids/461284/Retro5RagingBull-1600x576.jpg?v=637653208921000000"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://essential.vteximg.com.br/arquivos/ids/460189/Grid-DarkDreams1600x576.jpg?v=637649908228000000"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://essential.vteximg.com.br/arquivos/ids/469125/BannerWeb-MoveToZero1600x576.png?v=637673899532070000"
            alt=""
          />
        </div>
      </Carrousel>
    </SliderContainer>
  );
};

export default Hero;
