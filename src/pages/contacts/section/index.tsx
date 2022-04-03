import { Button } from "components/Button";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Container } from "styles/container";
import { SectionContent } from "./styles";

export function Section() {
  return (
    <SectionContent>
      <Container>
        <Row className="justify-content-between">
          <Col lg="7" sm="7" md="7">
            <div className="contact-form">
              <div className="contact-form-title">
                <h2>Get in Touch</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore
                  <br /> magna aliqua enim ad minim veniam quis nostrud
                  exercitation ullamco laboris.
                </p>
              </div>

              <form className="row">
                <div className="form-group col-lg-6">
                  <label>Nome</label>
                  <Input type="text" className="form-control" required />
                </div>
                <div className="form-group col-lg-6">
                  <label>Email</label>
                  <Input type="text" className="form-control" required />
                </div>
                <div className="form-group col-lg-6">
                  <label>Telefone</label>
                  <Input type="text" className="form-control" required />
                </div>
                <div className="form-group col-lg-6">
                  <label>Assunto</label>
                  <Input type="text" className="form-control" required />
                </div>
                <div className="form-group col-lg-12">
                  <label>Mensagem</label>
                  <TextArea className="form-control" required />
                </div>
                <div className="form-group col-lg-12">
                  <Button>Enviar Mensagem</Button>
                </div>
              </form>
            </div>
          </Col>

          <Col lg="4" sm="4" md="4">
            <div className="contact-info">
              <div className="contact-info-title">
                <h2>Contact Address:</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>

              <div className="address">
                <ul className="nav-list">
                  <li>
                    <FaMapMarkerAlt />
                    <address>
                      48 Brooke Street, New York United States of America
                    </address>
                  </li>
                  <li>
                    <FaPhoneAlt />
                    <Link to="/">+244 000 003 005</Link>
                  </li>
                  <li>
                    <FaEnvelope />
                    <Link to="/">ebizno@gmail.com</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionContent>
  );
}
