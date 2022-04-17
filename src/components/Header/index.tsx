import { useState, useEffect } from "react";
import { Collapse, Nav, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { BiMenuAltRight } from "react-icons/bi";

import { Navbar, Button, NavLink, HeaderContent } from "./styles";
import { allData } from "./data";
import { Container } from "styles/container";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  function isSticky() {
    const header = document.querySelector(".header") as Element;

    const scrollTop = window.scrollY as Number;

    scrollTop >= 70
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  }

  return (
    <HeaderContent className="header">
      <Container>
        <Navbar expand="lg">
          <NavbarBrand href="/">
            <h1>
              e-Bizno<span>.</span>
            </h1>
          </NavbarBrand>
          <NavbarToggler onClick={toggle}>
            <BiMenuAltRight />
          </NavbarToggler>

          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {allData?.map(({ id, menu, route }) => (
                <NavItem key={id}>
                  <NavLink exact activeClassName="is-Active" to={`${route}`}>
                    {menu}
                  </NavLink>
                </NavItem>
              ))}
              <NavItem>
                <Button href="/contact">Entrar</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </HeaderContent>
  );
}
