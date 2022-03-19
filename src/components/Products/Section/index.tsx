import axios from "axios";
import { Col, Row } from "reactstrap";
import { Container } from "styles/container";
import { Sections, Title } from "./styles";
import { Cards } from "../../Cards";
import { formatPrice } from "utils/format";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useEffect, useState } from "react";
import img01 from "../../../assets/images/property/property-grid-1.png";

// import { allData } from "./data";
// import api from "../../../services/api";

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
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await axios.get("http://localhost:8888/property");
        setAllData(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetch();
  }, []);

  console.log(allData);

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
          {allData?.map(
            ({
              uuid,
              image,
              title,
              categories,
              location,
              rooms,
              beds,
              area,
              amount,
            }: Request) => (
              <Col key={uuid} lg="3" md="3" sm="3" className="my-3">
                <Cards
                  sales="Novo"
                  feature="Disponível"
                  image={img01}
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
