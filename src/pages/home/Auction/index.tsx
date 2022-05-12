import { Col, Row } from "reactstrap";
import { Sections } from "./styles";
import { allData } from "./data";
import { formatPrice } from "../../../utils/format";
import { Link } from "react-router-dom";
import { Container } from "styles/container";
import { Title } from "components/Title";
import { Cards } from "components/Cards";
import { Button } from "components/Button";

export function Auction() {
  return (
    <Sections>
      <Container>
        <Title
          className="mb-5 py-20"
          name="Nossos imóveis eBizno"
          pointer="."
          desc="Mostrando todos os 36 resultados
          classificação padrão
          "
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
              <Col key={id} lg="3" md="4" sm="6" className="my-3">
                <Cards
                  to={`propriedades/${id}`}
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
                  classNamePrice="price"
                  classNameNav="nav-list-nav"
                  classNameTitles="title"
                />
              </Col>
            )
          )}
          <Col lg="12" className="mt-5">
            <Link to="/auction">
              <Button>Ver mais productos</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Sections>
  );
}
