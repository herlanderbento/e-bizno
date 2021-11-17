import { Col, Row } from "reactstrap";
import { Container } from "../../../styles/container";
import { Sections, Title } from "./styles";
import { Cards } from "../../Cards";
import { allData } from "./data";
import { formatPrice } from "../../../utils/format";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export function Section() {
  return (
    <Sections>
      <Container>
        <Title>
          <span>Casas e terrenos</span>
          <h2>
            Leilão eletrónico no e-Bizno<span>.</span>
          </h2>
        </Title>
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
        <Pagination  className="section-center">
            <PaginationItem disabled>
              <PaginationLink first href="#" />
            </PaginationItem>
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
            <PaginationItem>
              <PaginationLink href="#" last />
            </PaginationItem>
          </Pagination>
      </Container>
    </Sections>
  );
}
