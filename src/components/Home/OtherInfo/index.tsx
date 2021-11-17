import { Col, Row } from "reactstrap";
import { Container } from "../../../styles/container";
import { Card, Section } from "./styles";
import { Title } from "../../Title";

import { allData } from "./data";

export function OtherInfo() {
  return (
    <Section>
      <Container>
        <Title
          className="mb-5 py-10"
          name="Encontras imóveis em outros lugares"
          desc="Estamos nas 18 províncias do país."
        />
        <Row>
          {allData?.map(({ id, img, title, amount }) => (
            <Col key={id} lg="3" md="3" sm="3">
              <Card>
                <div className="images">
                  <figure>
                    <img src={img} className="img-fluid" alt={title} />
                    <figcaption>
                      <h4>{title}</h4>
                      <span>{amount}</span>
                    </figcaption>
                  </figure>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}
