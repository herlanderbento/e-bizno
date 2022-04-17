import { Button } from "components/Button";
import { Container } from "styles/container";
import { Section } from "./styles";

export function Subscribe() {
  return (
    <Section>
      <Container>
        <div className="row">
          <div className="col-lg-9 col-sm-9 col-md-9 my-2">
            <div className="subscribe">
              <p>
                Está à procura de uma casa ou cliente para a venda de um imóvel?
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-3 col-md-3 my-2">
            <div className="subscribe text-right">
              <Button>Subscribe now</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
