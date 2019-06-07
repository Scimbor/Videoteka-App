import styled from "styled-components";
import { Colors } from "../../../src/shared/Colors";
import { Nav, Navbar } from "react-bootstrap";

const { blueLight100: mainColorNavbar, white: hoverMenuColor } = Colors;

const NavbarStyled = styled(Navbar)`
  padding: 0 !important;
  box-sizing: border-box;
  border-bottom: 1px solid #ecebeb;
  @media screen and (max-width: 992px) {
    padding: 10px !important;
  }
`;

const NavbarBrand = styled(Navbar.Brand)`
  color: ${mainColorNavbar} !important;
  font-size: 2.2rem !important;
  padding: 10px 0 10px 10px !important;
`;

const NavLink = styled(Nav.Link)`
  color: ${mainColorNavbar} !important;
  padding: 23px 25px 24px 25px;
  text-transform: uppercase;
  transition: 0.3s;

  @media screen and (max-width: 992px) {
    text-align: center;
  }

  &:hover {
    background-color: ${mainColorNavbar};
    color: ${hoverMenuColor} !important;
    text-decoration: none;
  }
`;

const NavPhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
  color: ${hoverMenuColor};
  background: ${mainColorNavbar};
  padding: 7px 0 10px;
  padding: 12px 21px 12px 21px;

  @media screen and (max-width: 992px) {
    padding: 12px 10px 12px 10px;
  }
`;

const TextPhone = styled.a`
  display: block;
  margin: 0;
  padding-left: 10px;
  color: ${hoverMenuColor};
  text-decoration: none;
  cursor: pointer;
  
  &:visited,
  &:hover,
  &:focus {
    color: ${hoverMenuColor};
    text-decoration: none;
  }
`;

export { NavLink, NavbarStyled, NavbarBrand, NavPhoneWrapper, TextPhone };
