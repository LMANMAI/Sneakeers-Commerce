import React from "react";
import { MenuNavContainer, NavMenu, MenuItem } from "../styles";
const ButtonNav: React.FC = () => {
  return (
    <MenuNavContainer>
      <NavMenu>
        <ul>
          <MenuItem> Hombre</MenuItem>
          <MenuItem> Mujer</MenuItem>
          <MenuItem> Niños</MenuItem>
        </ul>
      </NavMenu>
    </MenuNavContainer>
  );
};

export default ButtonNav;
