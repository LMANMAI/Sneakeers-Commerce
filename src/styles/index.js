import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.main`
  min-height: 100vh;
`;
export const LandingContainer = styled.div`
  width: 90%;
  margin: 0px auto;
`;
// Header
export const HeaderContainer = styled.header`
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const LinkContainer = styled.div`
  width: 65px;
  img {
    width: 100%;
    max-width: 50px;
  }
  div {
    display: flex;
    align-items: center;
    svg {
      color: #7a7a7a;
      font-size: 25px;
      align-self: center;
    }
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
`;
export const MainCard = styled.div`
  transition: all 150ms ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
export const BannerContainer = styled.section``;
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
//Footer
export const FooterContainer = styled.footer`
  height: 25px;
  padding: 5px;
  p {
    text-align: center;
  }
`;
