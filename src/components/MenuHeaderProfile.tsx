import styled from "styled-components";
import { IShopProps } from "../interfaces";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUserLogOut } from "../features/userSlice";
const MenuHeaderProfile_Wrapper = styled.nav<IShopProps>`
  width: 210px;
  position: absolute;
  left: ${(props) => (props.position ? "0px" : "-70vw;")};
  height: 110vh;
  top: 0;
  background: #d3d3d3;
  z-index: 99;
  transition: all 450ms ease-in-out;
  p {
    text-align: center;
    padding: 7px;
    margin: 5px;
  }
`;
const MenuHeaderProfile = (props: { position: boolean; fn: Function }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(setUserLogOut());
    props.fn(false);
  };

  return (
    <MenuHeaderProfile_Wrapper position={props.position}>
      <p>HI! {user?.firstName}</p>
      <button className="login_button" onClick={() => props.fn(false)}>
        <GrClose />
      </button>
      <ul>
        <li>
          <button className="login_button"> Mis favoritos</button>
        </li>
        <li>
          <button className="login_button">Mis pedidos</button>
        </li>
        <li>
          <button
            type="button"
            className="login_button"
            onClick={(e) => handleLogOut()}
          >
            Cerrar Sesion
          </button>
        </li>
      </ul>
    </MenuHeaderProfile_Wrapper>
  );
};

export default MenuHeaderProfile;
