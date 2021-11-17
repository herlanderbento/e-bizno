import { Col, Row } from "reactstrap";
import { Container } from "../../../styles/container";
import { Button } from "../../Button";
import { Sections } from "./styles";
import { Title } from "../../Title";
import { Cards } from "../../Cards";
import { allData } from "./data";
import { formatPrice } from "../../../utils/format";
import { Link } from "react-router-dom";

export function Auction() {
  return (
    <Sections>
      <Container>
        <Title
          className="mb-5 py-20"
          name="Leilão eletrónico no e-Bizno"
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
              <Col key={id} lg="3" md="3" sm="3" className="my-3">
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
