import { Col, Row } from "reactstrap";
import { Container } from "styles/container";
import { Sections, Title } from "./styles";
import { formatPrice } from "utils/format";
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

export function RecentProperties() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await api.get("/properties");
        setAllData(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetch();
  }, []);

  return (
    <Sections>
      <Container>
        <Title>
          <h2>Propriedades relacionadas</h2>
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
                  to={`../propriedades/${uuid}`}
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
      </Container>
    </Sections>
  );
}
