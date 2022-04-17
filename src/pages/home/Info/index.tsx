/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Col, Row } from "reactstrap";
import { FiHexagon, FiHome, FiSearch } from "react-icons/fi";
import { Information, InfoContainer } from "./styles";
import { Container } from "styles/container";

export function Info() {
  return (
    <Information>
      <Container>
        <InfoContainer>
          <Row>
            <Col lg="4" md="6" sm="6">
              <div className="info-items card">
                <div className="header-info">
                  <FiSearch size={42} color="#7c6ee4" />
                  <h3>Encontre casas à venda</h3>
                </div>
                <div className="body-info">
                  <p>
                    Amet eleifend nostra torquent facilisi pharetra ante gravida
                    cursus auctor consequat metus sociosqu. Aenean nec egestas
                    fusce integer ante.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="6">
              <div className="info-items card">
                <div className="header-info">
                  <FiHome size={42} color="#7c6ee4" />
                  <h3>Encontre imóveis para alugar</h3>
                </div>
                <div className="body-info">
                  <p>
                    Amet eleifend nostra torquent facilisi pharetra ante gravida
                    cursus auctor consequat metus sociosqu. Aenean nec egestas
                    fusce integer ante.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="6">
              <div className="info-items card">
                <div className="header-info">
                  <FiHexagon size={42} color="#7c6ee4" />
                  <h3>Vender propriedades</h3>
                </div>
                <div className="body-info">
                  <p>
                    Amet eleifend nostra torquent facilisi pharetra ante gravida
                    cursus auctor consequat metus sociosqu. Aenean nec egestas
                    fusce integer ante.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </InfoContainer>
      </Container>
    </Information>
  );
}
