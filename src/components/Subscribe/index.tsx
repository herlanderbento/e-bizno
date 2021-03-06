import { Container } from "../../styles/container";
import { Button } from "../Button";
import { Section } from "./styles";

export function Subscribe() {
  return (
    <Section>
      <Container>
        <div className="subscribe">
          <p>
            Está à procura de uma casa ou cliente para a venda de um imóvel?
          </p>
          <Button>Subscribe now</Button>
        </div>
      </Container>
    </Section>
  );
}
