import { useState } from "react";
import { Collapse, Nav, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";

import { Navbar, Container, Button, NavLink } from "./styles";
import { allData } from "./data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <NavbarBrand href="/">
            <h1>
              e-Bizno<span>.</span>
            </h1>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />

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
        </Container>
      </Navbar>
    </>
  );
}
