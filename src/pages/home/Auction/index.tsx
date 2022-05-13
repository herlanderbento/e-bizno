import { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import { Sections } from "./styles";
import { allData } from "./data";
import { formatPrice } from "../../../utils/format";
import { Link } from "react-router-dom";
import { Container } from "styles/container";
import { Title } from "components/Title";
import { Cards } from "components/Cards";
import { Button } from "components/Button";
import api from 'axios';

export function Auction() {
  const [properties, setProperties] = useState([])

  useEffect(() => {

    async function fetchProperties() {
      try {
        const { data } = await api.get(`${process.env.REACT_APP_URL_PRODUCT}/8`);
        setProperties(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProperties();
  }, []);

  console.log(properties)


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
          {properties?.map(
            ({
              IdProduct,
              path,
              name,
              localization,
              area,
              price,
            }) => (
              <Col key={IdProduct} lg="3" md="4" sm="6" className="my-3">
                <Cards
                  to={`propriedades/id/${IdProduct}`}
                  sales="Novo"
                  feature="Disponível"
                  image="/assets/images/property/property-grid-1.png"
                  price={formatPrice(price)}
                  title={name}
                  location={localization}
                  classNamePrice="price"
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
