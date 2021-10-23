//importo las interfaces
import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.main`
  min-height: 100vh;
`;
export const LandingContainer = styled.div`
  width: 90%;
  margin: 60px auto;
`;
// Header
export const HeaderContainer = styled.header`
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  background: white;
`;
export const LinkContainer = styled.div`
  width: 65px;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    svg {
      color: #7a7a7a;
      font-size: 25px;
      align-self: center;
    }
  }
  img {
    width: 100%;
    max-width: 50px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;

export const InputContainer = styled.div`
  flex-grow: 1;
  padding: 0px 2vw;
  max-width: 50%;
  display: grid;
  grid-template-columns: 25px 1fr;
  align-items: center;
  border-radius: 15px;
  background-color: #f9f9f9;
`;
export const InputSearch = styled.input`
  padding: 12px;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  &:focus {
    ${InputContainer} {
      border: 5px solid;
    }
  }
`;
export const CartSticky = styled.span`
  position: absolute;
  width: 15px;
  height: 15px;
  color: white;
  font-size: 10px;
  line-height: 15px;
  background-color: red;
  border-radius: 50%;
`;
//slider
export const SliderContainer = styled.div`
  width: 90vw;
  margin: 20px auto;
  margin-bottom: 28px;
  img {
    width: 100%;
    object-fit: contain;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const Carrousel = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
  }
  &:hover {
    opacity: 1;
    transition: opacity 0.2s;
  }
`;
//Menu Principal de navegacion
export const MenuNavContainer = styled.div`
  padding: 10px;
  width: 91%;
  margin: 0 auto;
`;
export const NavMenu = styled.nav`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
  }
`;
export const MenuItem = styled.li`
  border: 1px solid;
  padding: 13px;
  border-radius: 15px;
  text-align: center;
  transition: all 350ms ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;
//Card Section
export const CardWrapperMain = styled.main`
  margin: 10px;
  h2 {
    text-align: center;
    margin: 10px 0;
    text-transform: uppercase;
  }
`;
export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
  gap: 15px;
  box-sizing: border-box;
`;
export const MainCard = styled.div`
  transition: all 150ms ease-in-out;

  .button_container {
    width: 100%;
    display: flex;
  }
  .button_cart {
    justify-content: center;
    margin: 10px auto;
    padding: 5px;
    border: none;
    cursor: pointer;
    visibility: hidden;
  }
  &:hover {
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    .button_cart {
      visibility: visible;
    }
  }
`;
export const TopContainer = styled.div`
  height: 80%;
  padding: 10px;
  img {
    max-width: 100%;
    height: auto;
  }
`;
export const BotContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  span {
    margin-bottom: 5px;
  }
`;
export const Name = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Series = styled.span`
  font-size: 13px;
`;
export const Price = styled.span`
  font-size: 12px;
  font-weight: 400;
`;
//Baner section
export const BannerContainer = styled.main``;
export const BannerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin: 20px;
`;
export const Banner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 5px 0;
    font-weight: bold;
  }
  img {
    width: 100%;
  }
`;
//Cart
export const SneakerCardCart = styled.div`
  border-radius: 15px;
  width: 80%;
  display: flex;
  overflow: hidden;
  background-color: white;
  margin: 5px 0;
  p {
    font-size: 0.625;
  }
  img {
    padding: 5px;
  }
`;
//CART PAGE
export const CartPageContainer = styled.div`
  margin: 1.125rem;
  padding: 2rem 1.225rem;
  display: flex;
  flex-direction: column;
  .total_shop {
    width: 80%;
    margin: 0 auto;
    padding: 2 1.225rem;
    padding: 40px 50px;
  }
`;
export const CartBoxItemsContainer = styled.div`
  background-color: #fbf9f9;
  width: 100%;
  height: 70vh;
  padding: 0.725rem 1.125rem;
  @media (min-width: 768px) {
    width: 80%;
    margin: 2rem auto;
    min-height: 55vh;
    overflow-y: auto;
  }
  .message_container {
    margin: 96px auto;
    max-width: 450px;
    text-align: center;
    h3 {
      margin-bottom: 0;
      font-size: 32px;
      color: #333;
    }
    p {
      color: #999;
      font-size: 18px;
    }
  }
`;
export const CartButton = styled.button`
  padding: 13px 32px 12px;
  background-color: #fa6b34;
  font-size: 17px;
  width: 90%;
  margin: 10px auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  color: white;
  @media (min-width: 768px) {
    min-width: 142px;
    width: 200px;
    align-self: flex-end;
    margin: 0.725rem 1.725rem;
  }
`;
export const CartPageShop = styled.div`
  padding: 44px 0 48px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ImgShopContainer = styled.div`
  width: 85px;
  img {
    width: 100%;
  }
`;
//Footer
export const FooterContainer = styled.footer`
  height: 25px;
  padding: 5px;
  p {
    text-align: center;
  }
`;
