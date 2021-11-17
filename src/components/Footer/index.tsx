import { Col, Row } from "reactstrap";
import { Container } from "../../styles/container";
import { FooterContent } from "./styles";

export function Footer(){
  return(
    <FooterContent>
      <Container>
        <Row>
          <Col lg="3" md="3" sm="3">
            <div className="footer-items">
             <div className="header">
              <h4 className="logo">e-Bizno<span>.</span></h4>
             </div>
              <div className="body">
                <p>Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </FooterContent>
  )
}