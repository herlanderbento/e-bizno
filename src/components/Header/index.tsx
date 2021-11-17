import { useState } from "react";
import {
  Collapse,
  // DropdownItem,
  // DropdownMenu,
  // DropdownToggle,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  // UncontrolledDropdown,
} from "reactstrap";


import {
  //  HeaderTop, 
   Navbar, 
   Container, 
   Button, 
   NavLink 
} from "./styles";
// import {
//   FaEnvelope,
//   FaMobileAlt,
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaTelegramPlane,
//   FaWhatsapp,
// } from "react-icons/fa";

// import { Logo }from './Logo'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* <HeaderTop>
        <Container>
          <Row>
            <Col lg="6">
              <ul className="nav-list">
                <li>
                  <a href="#">
                    <FaEnvelope size={16} />
                    <span>ebiznocompany.7@gmail.co.ao</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaMobileAlt size={16} />
                    <span>222222222</span>
                  </a>
                </li>
              </ul>
            </Col>

            <Col lg="6">
              <ul className="nav-list nav-icons">
                <li>
                  <a href="#">
                    <FaFacebookF size={16} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter size={16} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram size={16} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTelegramPlane size={16} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWhatsapp size={16} />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </HeaderTop> */}
      <Navbar expand="lg">
        <Container>
          <NavbarBrand href="/">
            {/* <Logo/> */}
            <h1>
              e-Bizno<span>.</span>
            </h1>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact activeClassName="is-Active" to={`/`}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="is-Active" to={`/about`}>
                  Sobre nós
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="" to="/leilão">
                Leilão
                </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown inNavbar nav>
                <DropdownToggle nav>Leilão</DropdownToggle>
                <DropdownMenu right={true}>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem>
                <NavLink activeClassName="" to="/imóveis">
                  Imóveis
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeClassName="" to="/contactos">
                  Contactos
                </NavLink>
              </NavItem>
              <NavItem>
                <Button href="/contact">Entrar</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}
