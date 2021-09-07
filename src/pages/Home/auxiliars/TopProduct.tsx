import React from "react";
import Img from "../../../assets/btn_banner_nike.webp";
import { BannerContainer, BannerWrapper, Banner } from "../../../styles";
const TopProduct: React.FC = () => {
  return (
    <BannerContainer>
      <BannerWrapper>
        <Banner>
          <img src={Img} alt="" />
          <p>Brand</p>
        </Banner>
        <Banner>
          <img src={Img} alt="" />
          <p>Brand</p>
        </Banner>
        <Banner>
          <img src={Img} alt="" />
          <p>Brand</p>
        </Banner>
      </BannerWrapper>
    </BannerContainer>
  );
};

export default TopProduct;
