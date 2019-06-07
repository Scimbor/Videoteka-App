import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  NavLink,
  NavbarStyled,
  NavbarBrand,
  NavPhoneWrapper,
  TextPhone
} from "./navbar.style";
import SmartphoneOutline from "@material-ui/icons/SmartphoneOutlined";

const NavbarComponent = () => {
  return (
    <>
      <NavPhoneWrapper>
            <SmartphoneOutline />
            <TextPhone href="tel:+48509978263">509 978 263</TextPhone>
      </NavPhoneWrapper>
      <NavbarStyled collapseOnSelect sticky="top" expand="lg" bg="white">
          <NavbarBrand href="#home">DrukCad</NavbarBrand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            variant="outline-info"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <NavLink href="#deets">Strona Główna</NavLink>
              <NavLink href="#memes"> Oferta </NavLink>
              <NavLink href="#memes"> Kontakt </NavLink>
              <NavLink href="#memes"> Lokalizacja </NavLink>
            </Nav>
          </Navbar.Collapse>
      </NavbarStyled>
    </>
  );
};

export default NavbarComponent;
