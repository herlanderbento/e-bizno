import Header from "components/Header";
import Footer from "components/Footer";

import { Section } from "./Section";
import { Hero, InputCard, Sections, Title } from "./styles";
import { Container } from "styles/container";
import { Col, Row } from "reactstrap";
import { BiMapPin, BiSearch } from "react-icons/bi";
import { Button } from "components/Button";
import { ChangeEvent, useEffect, useState } from "react";
import { Cards } from "components/Cards";

import { api } from "services/api";
import { formatPrice } from "utils/format";



export function Properties() {
  const [properties, setProperties] = useState([])
  const [search, setSearch] = useState("");

  function handleButtonSearch() {
    const filteredData = properties.filter(
      (entry: any) =>
        entry?.properties.name.includes(
          search.charAt(0).toUpperCase() + search.slice(1)
        ) || entry?.properties.name.includes(search.toLowerCase())
    );

    setProperties(filteredData);
  }

  function handleInputSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

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
    <>
      <Header />
      <Hero>
        <Container>
          <Row>
            <Col lg="12" sm="12" md="12">
              <div className="hero">
                <form>
                  <InputCard>
                    <div className="input-group">
                      <span className="input-group-prepend input-group-text">
                        <BiSearch size={18} color="#677788" />
                      </span>
                      <input
                        type="text"
                        name=""
                        value={search}
                        onChange={handleInputSearch}
                        className="form-control form-control-lg"
                        placeholder="O que você está procurando?"
                      />
                    </div>
                    {/* <div className="separator"></div>
                    <div className="input-group">
                      <span className="input-group-prepend input-group-text">
                        <BiMapPin size={18} color="#677788" />
                      </span>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Digita a localização"
                      />
                    </div> */}
                    <Button onClick={handleButtonSearch}>Pesquisar</Button>
                  </InputCard>
                </form>

                <p className="form-text small">
                  Pesquise em mais de 125.000 listagens
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Hero>
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
          {/* <Pagination className="section-center">
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
        </Pagination> */}
        </Container>
      </Sections>
      <Footer />
    </>
  );
}
