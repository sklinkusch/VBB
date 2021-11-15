import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "../styles/Header.scss";
import getLocale from "./getLocale";

const Header = () => {
  return (
    <header>
      <Navbar expand="sm">
        <NavbarBrand href="/">{getLocale("VBBDep")}</NavbarBrand>
      </Navbar>
    </header>
  );
};

export default Header;
