import Slider from "react-slick";

import { Card, Section } from "./styles";

import { allData } from "./data";
import { Container } from "styles/container";
import { Title } from "components/Title";
import { settings } from "utils";

export function OtherInfo() {
  return (
    <Section>
      <Container>
        <Title
          className="mb-5 py-10"
          name="Encontras imóveis em outros lugares"
          desc="Estamos nas 18 províncias do país."
        />
        <Slider {...settings}>
          {allData?.map(({ id, img, title, amount }) => (
            <Card key={id}>
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
          ))}
        </Slider>
      </Container>
    </Section>
  );
}
