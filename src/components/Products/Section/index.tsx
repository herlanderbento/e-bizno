import { Col, Row } from "reactstrap";
import { Container } from "../../../styles/container";
import { Sections } from "./styles";
import { Cards } from "../../Cards";
import { allData } from "./data";
import { formatPrice } from '../../../utils/format'

export function Section() {
  return (
    <Sections>
      <Container>
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
       
        </Row>
      </Container>
    </Sections>
  );
}
