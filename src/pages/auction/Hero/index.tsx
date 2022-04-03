import { Col, Row } from "reactstrap";
import { InputCard, Section } from "./styles";
import { BiSearch, BiMapPin } from "react-icons/bi";
import { Container } from "styles/container";
import { Button } from "components/Button";

export function Hero() {
  return (
    <Section>
      <Container>
        <Row>
          <Col lg="12" sm="12" md="12">
            <div className="hero">
              <form>
                <InputCard>
                  <div className="input-group">
                    <span className="input-group-prepend input-group-text">
                      <BiSearch size={18} color="#677788" />
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="O que você está procurando?"
                    />
                  </div>
                  <div className="separator"></div>
                  <div className="input-group">
                    <span className="input-group-prepend input-group-text">
                      <BiMapPin size={18} color="#677788" />
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Digita a localização"
                    />
                  </div>
                  <Button>Pesquisar</Button>
                </InputCard>
              </form>

              <p className="form-text small">
                Pesquise em mais de 125.000 listagens
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
