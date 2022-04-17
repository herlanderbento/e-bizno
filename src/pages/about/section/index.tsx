import { Col, Row } from "reactstrap";
import { Container } from "styles/container";
import { SectionContent } from "./styles";

export function Section() {
  return (
    <SectionContent>
      <Container>
        <Row>
          <Col lg="6" md="12" sm="12">
            <div className="about-items">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-md-6 col-6 mb-4">
                  <img
                    src="/assets/images/about/about-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-6 mb-4">
                  <img
                    src="/assets/images/about/about-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-6 mb-4">
                  <img
                    src="/assets/images/about/about-3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 col-6 mb-4">
                  <img
                    src="/assets/images/about/about-4.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6" md="12" sm="12">
            <div className="about-items">
              <div className="about-info">
                <h2>
                  Nosso motivo é fornecer o melhor para todos e cumprir seu
                  desejo
                </h2>
                <p>
                  O "e-bizno" é Sistema de Compra e Venda de Casas e Terrenos é
                  um sistema que permite a compra e venda de imóveis em Angola,
                  sistema desenvolvido para web com o objetivo de facilitar a
                  adesão de imóveis em Angola.
                </p>
                <p>
                  O sistema é composto por módulos dois utilizadores Vendedor e
                  Cliente, Vendedor terá como objetivo divulgar imóveis e o
                  Cliente fazer a compra dos mesmos
                </p>
              </div>
              <div className="about-card-info">
                <div className="icons"></div>
                <div className="desc">
                  <h4>Missão</h4>
                  <p>
                    Garantir um serviço de excelência na oferta de serviços
                    imobiliários e mediação, gestão de imóveis e promoção.
                  </p>
                </div>
              </div>

              <div className="about-card-info">
                <div className="icons"></div>
                <div className="desc">
                  <h4>Visão</h4>
                  <p>Ser a melhor opção em consultoria imobiliária.</p>
                </div>
              </div>

              <div className="about-card-info">
                <div className="icons"></div>
                <div className="desc">
                  <h4>Valores</h4>
                  <p>
                    Ética, Transparência e Responsabilidade, Excelência,
                    Responsabilidade Social.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionContent>
  );
}
