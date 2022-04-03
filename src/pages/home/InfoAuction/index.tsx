import { Col, Row } from "reactstrap";
import { Card, Link, Section } from "./styles";
import {
  RiArrowDropRightLine,
  RiFileEditLine,
  RiFilePaper2Line,
  RiUser4Line,
} from "react-icons/ri";
import { Container } from "styles/container";
import { Title } from "components/Title";

export function InfoAuction() {
  return (
    <Section>
      <Container className="container-md">
        <Col lg="9" x="12">
          <Col lg="9" className="mb-5">
            <Title
              className="mb-5"
              name="Leilão aberto no dia X até"
              nameSecond="dia Y de Mês X."
              desc="Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis."
            />
          </Col>
          <Row>
            <Col lg="4" md="4" sm="4">
              <Card>
                <div className="header-info">
                  <RiFileEditLine size={32} color="#7c6ee4" />
                  <h3>Formulário eletrónico</h3>
                </div>
                <div className="body-info">
                  <p>
                    Aliquam faucibus, odio nec commodo aliquam, neque felis
                    placerat dui, a porta ante lectus dapibus est.
                  </p>
                  <label>
                    <Link to={`/`}>Saiba mais</Link>
                    <RiArrowDropRightLine size={28} />
                  </label>
                </div>
              </Card>
            </Col>

            <Col lg="4" md="4" sm="4">
              <Card>
                <div className="header-info">
                  <RiFilePaper2Line size={32} color="#7c6ee4" />
                  <h3>Comissão de avaliação</h3>
                </div>
                <div className="body-info">
                  <p>
                    Aliquam faucibus, odio nec commodo aliquam, neque felis
                    placerat dui, a porta ante lectus dapibus est.
                  </p>
                  <label>
                    <Link to={`/`}>Saiba mais</Link>
                    <RiArrowDropRightLine size={28} />
                  </label>
                </div>
              </Card>
            </Col>

            <Col lg="4" md="4" sm="4">
              <Card>
                <div className="header-info">
                  <RiUser4Line size={32} color="#7c6ee4" />
                  <h3>Primeiro lance</h3>
                </div>
                <div className="body-info">
                  <p>
                    Aliquam faucibus, odio nec commodo aliquam, neque felis
                    placerat dui, a porta ante lectus dapibus est.
                  </p>
                  <label>
                    <Link to={`/`}>Saiba mais</Link>
                    <RiArrowDropRightLine size={28} />
                  </label>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>

        <div className="banner-half-middle-x bg-img-start bg-img"></div>
      </Container>
    </Section>
  );
}
