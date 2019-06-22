import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <Navbar expand="sm">
        <NavbarBrand href="/">VBB departures</NavbarBrand>
      </Navbar>
    </header>
  );
};

export default Header;
