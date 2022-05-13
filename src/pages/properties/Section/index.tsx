import { Col, Row } from "reactstrap";
import { Container } from "styles/container";
import { Sections, Title } from "./styles";
import { formatPrice } from "utils/format";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useEffect, useState } from "react";
import img01 from "../../../assets/images/property/property-grid-1.png";
import { api } from "services/api";
import { Cards } from "components/Cards";

interface Request {
  uuid: string;
  image: string;
  amount: number;
  title: string;
  categories: string;
  location: string;
  beds: string;
  rooms: string;
  area: string;
}

export function Section() {

  const [properties, setProperties] = useState([])

  useEffect(() => {

    async function fetchProperties() {
      try {
        const { data } = await api.get(`${process.env.REACT_APP_URL_PRODUCT}/9`);
        setProperties(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProperties();
  }, []);

  return (
    <Sections>
      <Container>
        <Title>
          <span>Casas e terrenos</span>
          <h2>
            Propriedade à venda no e-Bizno<span>.</span>
          </h2>
        </Title>
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
              <Col key={IdProduct} lg="4" md="4" sm="6" className="my-3">
                <Cards
                  to={`propriedades/id/${IdProduct}`}
                  sales="Novo"
                  feature="Disponível"
                  image={path}
                  price={formatPrice(price)}
                  title={name}
                  location={localization}
                  category="Imóveis"                
                  classNamePrice="price"
                  classNameTitles="title"
                />
              </Col>
            )
          )}
        </Row>
        <Pagination className="section-center">
          <PaginationItem disabled>
            <PaginationLink href="#" previous />
          </PaginationItem>
          <PaginationItem className="active">
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" next />
          </PaginationItem>
        </Pagination>
      </Container>
    </Sections>
  );
}
