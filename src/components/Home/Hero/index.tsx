import { Col } from "reactstrap";
import { Container } from "../../../styles/container";
import { Banner, InputCard } from "./styles";
import { BiSearch } from "react-icons/bi";
import { Button } from "../../Button";

export function Hero() {
  return (
    <Banner>
      <Container className="position-relative">
        <div className="row position-relative">
          <Col lg="8">
            <div className="banner-text">
              <h1>
                Discover a place <br /> you'll <span>love to live</span>
              </h1>
            </div>

            <form>
              <InputCard>
                <div className="input-group">
                  <span className="input-group-prepend input-group-text">
                    <BiSearch size={18} color="#677788" />
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
          </Col>
        </div>
        <Col lg="6" className="text-center position-absolute top-0 end">
          <img
            className="img-fluid"
            src="/assets/images/img20.jpg"
            alt="Banner"
          />
        </Col>
      </Container>
    </Banner>
  );
}
