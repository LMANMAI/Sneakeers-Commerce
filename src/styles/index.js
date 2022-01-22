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
  display: flex;
  width: 15%;
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
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  .login_button.login_button {
    width: 100%;
    padding: 5px;
  }
  .button_cart {
    width: 50px;
    position: absolute;
    cursor: pointer;
    font-size: 22px;
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
  position: relative;
  right: -2px;
  top: -7px;
  width: 15px;
  height: 15px;
  color: white;
  font-size: 10px;
  line-height: 15px;
  background-color: white;
  color: black;
  border-radius: 50%;
  text-align: center;
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
    display: flex;
    justify-content: space-between;
  }
`;
export const MenuItem = styled.li`
  width: 30%;
  flex: 1;
  margin: 0px 10px;
  border: 1px solid;
  padding: 13px;
  border-radius: 15px;
  text-align: center;
  transition: all 350ms ease-in-out;
  font-size: 1.125rem;
  &:hover {
    cursor: pointer;
    background-color: #ccc;
    border: none;
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
  //border: 1px solid red;
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
  gap: 15px;
  box-sizing: border-box;
  .sk-chase {
    margin: 10px auto;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(15%, 1fr));
  }
`;
export const MainCard = styled.div`
  transition: all 150ms ease-in-out;
  text-align: center;
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
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
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
  .payment_section {
    border: 1px solid #e6e6e6;
    width: 80%;
    margin: 0 auto;
    padding: 1.725rem 1.125rem;
    h3 {
      margin: 8px;
    }
  }
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
  &:disabled {
    background-color: #fa6b3478;
    cursor: not-allowed;
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

export const DeleteButton = styled.button`
  margin: 15px 0px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: #fa6b34;
`;

//MODAL
export const ModalView = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  top: 0;
  left: 0;
  z-index: 9999;
  overflow-y: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContent = styled.div`
  width: 90%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 15px;
  background-color: white;
  overflow-y: auto;
  h4 {
    text-align: center;
  }
  ${MainCard} {
    width: 100%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (min-width: 768px) {
    min-width: 40vw;
    width: 90%;
    ${MainCard} {
      width: 25%;
    }
  }
`;
export const ModalCloseButton = styled.div`
  position: relative;
  top: 5%;
  border: none;
  background-color: transparent;
  text-align: end;
  width: 100%;
  cursor: pointer;
  svg {
    font-size: 20px;
    font-weight: bold;
  }
`;
export const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;}
 padding-top: 4rem;
 .front_image{
   width: 100%;
   max-width: 350px;
   margin: 1rem 0px;
   height: 350px;
   align-self: center;
   img{
     width: 100%;
     max-width: 350px;
   }
 }
  @media (min-width: 768px) {
    flex-direction: row;
    .front_image{
      width: 50%;
      margin: 0px 2rem;
        
   }
 }
  }
`;
export const ModalCardCarrousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  flex-direction: row;

  img {
    width: 90%;
    max-width: 40vw;
    border-radius: 15px;
    &:hover {
      cursor: pointer;
    }
  }
  @media (min-width: 768px) {
    min-width: 100px;
    max-width: 10vw;
    flex-direction: column;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 10px;
  select {
    padding: 9px;
    outline: none;
    border: 1px solid #ccc;
  }
  .basket_button {
    padding: 10px;
    border: none;
    outline: none;
    background-color: #fa6b34;
    color: white;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    border-radius: 15px;
    border: 1px solid #ccc;
    height: 100%;
    padding: 3rem 10px;
  }
`;
