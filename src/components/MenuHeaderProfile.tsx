import styled from "styled-components";
import { IShopProps } from "../interfaces";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  selectAuthenticated,
  setUserLogOut,
} from "../features/userSlice";
const MenuHeaderProfileWrapper = styled.nav<IShopProps>`
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
  const authenticated = useSelector(selectAuthenticated);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(setUserLogOut());
    props.fn(false);
  };
  if (!authenticated && !user) return null;
  return (
    <MenuHeaderProfileWrapper position={props.position}>
      <button className="login_button" onClick={() => props.fn(false)}>
        <GrClose />
      </button>
      <p>Hola! {user?.firstName}</p>

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
    </MenuHeaderProfileWrapper>
  );
};

export default MenuHeaderProfile;
