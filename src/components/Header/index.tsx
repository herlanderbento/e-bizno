import { useState, useEffect } from "react";
import { Collapse, Nav, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { BiMenuAltRight, BiWallet } from "react-icons/bi";

import { Navbar, Button, NavLink, HeaderContent } from "./styles";
import { allData } from "./data";
import { Container } from "styles/container";
import { UserInfo } from "components/UserInfo";
import { useAuth } from "hooks/useAuth";

export default function Header() {
  const { user } = useAuth();
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
              eBizno<span>.</span>
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
              {user ? (
                <div className="auth-content">
                  <UserInfo />
                </div>
              ) : (<Button href="/login">Entrar</Button>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </HeaderContent>
  );
}
