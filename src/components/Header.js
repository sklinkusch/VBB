/** @jsxImportSource theme-ui */
import { useDebugState } from "use-named-state"
import { Navbar, NavbarBrand, NavbarToggler, NavLink, Collapse, Nav, NavItem } from "reactstrap";
import { NavLink as RRNavLink, useLocation } from "react-router-dom"
import getLocale from "./getLocale";

const Header = () => {
  const [isOpen, setOpen] = useDebugState("isOpen", false)
  const toggle = () => {
    setOpen(!isOpen)
  }
  const location = useLocation()
  const { pathname = "" } = location
  const id = pathname.substring(1).split("/")[1] || null
  return (
    <header sx={{ backgroundColor: "darkblue", width: "85%", mx: "auto", my: "20px", padding: "10px", borderRadius: "15px", 'nav': { backgroundColor: "darkblue !important" }, '.navbar-brand': { color: "white"}}}>
      <Navbar color="dark" dark expand="lg">
        <NavbarBrand href="/">{getLocale("VBBInfo")}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to={id ? `/departures/${id}` : '/departures'} exact tag={RRNavLink} className={({isActive}) => isActive ? "active" : null}>{getLocale("Depart")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={id ? `/arrivals/${id}` : '/arrivals'} tag={RRNavLink} className={({isActive}) => isActive ? "active" : null}>{getLocale("Arrive")}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

// export default withRouter(Header);
export default Header;
