import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Container } from "styles/container";
import { Section } from "./styles";

type HeroProps = {
  title: string;
  page: string;
};

export function Hero({ title, page }: HeroProps) {
  return (
    <Section>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col lg="4" sm="6" md="6">
            <div className="section-text">
              <h2>{title}</h2>
              <ul className="nav-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <span>Páginas</span>
                </li>
                <li>
                  <span>{page}</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" sm="6" md="6">
            <div className="section-img">
              <img
                src="/assets/images/page-banner.png"
                alt="Banner"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
