import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Container } from "../../styles/container";
import { Button } from "../Button";
import { FooterContent } from "./styles";

export default function Footer() {
  return (
    <FooterContent>
      <Container>
        <Row>
          <Col lg="3" md="3" sm="3">
            <div className="footer-items">
              <div className="header">
                <h4 className="logo">
                  e-Bizno<span>.</span>
                </h4>
              </div>
              <div className="body">
                <address>
                  e-bizno Site de anúncios de imóveis GreenHouse, Angola,
                  Luanda, Mutamba, E8 3DY.
                </address>
                <ul className="nav-list">
                  <li>
                    <Link to="/">
                      <a>+244 222 222 222</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <a>ebiznocompany@hotemail.co.ao</a>
                    </Link>
                  </li>
                </ul>
                <ul className="icons-items">
                  <li>
                    <Link to="/">
                      <FaFacebookF size={16} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaTwitter size={16} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaLinkedinIn size={16} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaGoogle size={16} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaPinterestP size={16} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="3" md="3" sm="3">
            <div className="footer-items">
              <div className="header">
                <h4>Informação</h4>
              </div>
              <div className="body">
                <ul className="nav-list">
                  <li>
                    <Link to="/">
                      <a>Contacto</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <a>Regulamento</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <a>Dicas de segurança</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <a>Termos e condições</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="3" md="3" sm="3">
            <div className="footer-items">
              <div className="header">
                <h4>Link rápido</h4>
              </div>
              <div className="body">
                <ul className="nav-list links">
                  <li>
                    <Link to="/">
                      <a>Sobre nós</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <a>Como funciona</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <a>Como vender no e-bizno</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <a>Perguntas frequentes</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="3" md="3" sm="3">
            <div className="footer-items">
              <div className="header">
                <h4>Como criar uma conta</h4>
              </div>
              <div className="body">
                <p>
                  Aliquam faucibus, odio nec commodo aliquam, neque felis
                  placerat dui.
                </p>
                <Button>Criar conta</Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="footer-end">
          <Col lg="6" sm="6" md="6" className="footer-end-items">
            <p>
              &copy;2021 | e-Bizno Imobiliária. Todos os direitos reservados.
            </p>
          </Col>
          <Col lg="3" sm="3" md="3" className="footer-end-items">
            <ul>
              <li>
                <Link to="/">
                  <a>Política de Privacidade</a>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <a>Mapa do site</a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </FooterContent>
  );
}
