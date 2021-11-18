import React from "react";
import { useDebugState } from "use-named-state"
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as RRNavLink, withRouter } from "react-router-dom"
import "../styles/Header.scss";
import getLocale from "./getLocale";

const Header = () => {
  const [isOpen, setOpen] = useDebugState("isOpen", false)
  const toggle = () => {
    setOpen(!isOpen)
  }
  return (
    <header>
      <Navbar color="dark" dark expand="lg">
        <NavbarBrand href="/">{getLocale("VBBInfo")}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/" exact tag={RRNavLink} className={({isActive}) => isActive ? "active" : null}>{getLocale("Depart")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/arrivals" tag={RRNavLink} className={({isActive}) => isActive ? "active" : null}>{getLocale("Arrive")}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default withRouter(Header);
