/** @jsxImportSource theme-ui */
import { useDebugState } from "use-named-state"
import { Navbar, NavbarBrand, NavbarToggler, NavLink, Collapse, Nav, NavItem } from "reactstrap";
import { NavLink as RRNavLink, useLocation } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"
import getLocale from "./getLocale";

const Header = () => {
  const [isOpen, setOpen] = useDebugState<boolean>("isOpen", false)
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
              <LinkContainer to={id ? `/departures/${id}` : '/departures'}>
                <NavLink as={RRNavLink} active={false}>{getLocale("Depart")}</NavLink>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to={id ? `/arrivals/${id}` : '/arrivals'}>
                <NavLink as={RRNavLink} active={false}>{getLocale("Arrive")}</NavLink>
              </LinkContainer>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

// export default withRouter(Header);
export default Header;
