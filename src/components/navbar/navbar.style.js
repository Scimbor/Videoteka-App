import styled from "styled-components";
import { Nav, Navbar } from "react-bootstrap";

const NavbarStyled = styled(Navbar)`
  padding: 0 !important;
  box-sizing: border-box;
  border-bottom: 1px solid #ecebeb;
  @media screen and (max-width: 992px) {
    padding: 10px !important;
  }
`;

const NavbarBrand = styled(Navbar.Brand)`
  color: #23b0c8 !important;
  font-size: 2.2rem !important;
  padding: 0 0 0 10px !important;

  @media screen and (max-width: 992px) {
    padding: 0 !important;
  }
`;

const NavLink = styled(Nav.Link)`
  color: #23b0c8;
  padding: 23px 25px 24px 25px;
  text-transform: uppercase;
  transition: 0.3s;

  @media screen and (max-width: 992px) {
    text-align: center;
  }

  &:hover {
    background-color: #23b0c8;
    color: white;
    text-decoration: none;
  }
`;

const NavPhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
  color: white;
  background: #45c8de;
  padding: 7px 0 10px;
  padding: 12px 21px 12px 21px;

  @media screen and (max-width: 992px) {
    padding: 12px 10px 12px 10px;
  }
`;

const TextPhone = styled.p`
  margin: 0;
  padding-left: 10px;
`;
export {
  NavLink,
  NavbarStyled,
  NavbarBrand,
  NavPhoneWrapper,
  TextPhone
};
