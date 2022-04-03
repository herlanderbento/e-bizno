import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { Sections } from "./styles";
import { allData } from "./data";
import { Container } from "styles/container";
import { Title } from "components/Title";
import { Cards } from "components/Cards";
import { formatPrice } from "utils/format";
import { Button } from "components/Button";

export function Section() {
  return (
    <Sections>
      <Container>
        <Title
          className="mb-5 py-20"
          name="Novos imóveis no e-Bizno"
          pointer="."
          desc="Vê as novas as novas imóveis postado no e-bizno."
        />
        <Row>
          {allData?.map(
            ({
              id,
              img,
              title,
              categories,
              location,
              rooms,
              beds,
              area,
              amount,
            }) => (
              <Col key={id} lg="4" md="4" sm="4" className="my-3">
                <Cards
                  sales="Novo"
                  feature="Disponível"
                  image={img}
                  price={formatPrice(amount)}
                  title={title}
                  category={categories}
                  location={location}
                  beds={beds}
                  rooms={rooms}
                  area={area}
                />
              </Col>
            )
          )}
          <Col lg="12" className="mt-5">
            <Link to="/property">
              <Button>Ver mais productos</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Sections>
  );
}
