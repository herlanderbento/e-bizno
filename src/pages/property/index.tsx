import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { formatPrice } from "utils/format";
import { Container } from "styles/container";
import { Section } from "./styles";
import { Input } from "components/Input";
import { Button } from "components/Button";

import { TextArea } from "components/TextArea";
import { Cards } from "components/Cards";

import { allData } from "./data";

export function Property() {
  return (
    <Section>
      <Container>
        <div className="section-top">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/" className="active">
                Imóveis
              </Link>
            </li>
          </ul>
        </div>
        <Row>
          <Col lg="8" sm="6" md="8">
            <div className="product">
              <div className="section-product-image">
                <img src="/assets/images/property/property-grid-1.png" alt="" />
              </div>
              <div className="section-product-description">
                <div className="product-title">
                  <span>Apartamento</span>
                  <h1>Condomínio Quinta dos Coqueiros T3</h1>
                </div>
                <div className="product-location">
                  <FaMapMarkerAlt color="#7e6ee5" size={16} />
                  <span>Calombotão, Benguela</span>
                </div>
                <div className="product-amount">
                  <label>{formatPrice(1200000)}</label>
                </div>
                <div className="product-content">
                  <ul className="nav-list">
                    <li>
                      <span>Quarto/s: 7</span>
                    </li>
                    <li>
                      <span>Banheiro: 7</span>
                    </li>
                    <li>
                      <span>Área: 1400 Sqft</span>
                    </li>
                  </ul>
                </div>
                <div className="product-description">
                  <h3>Descrição</h3>
                  <p>
                    Maecenas egestas quam et volutpat bibendum metus vulputate
                    platea eleifend sed Integer dictum ultricies consectetuer
                    nunc vivamus a. Eu mus justo magna lacinia purus sodales
                    scelerisque. Sociosqu pede facilisi. Curae; lacinia id.
                    Sociis pretium gravida auctor mus amet accumsan adipiscing
                    id dignissim, potenti. Curae; massa ridiculus lobortis
                    consectetuer condimentum mollis vulputate hymenaeos tellus
                    egestas auctor dictumst imperdiet curae; quisque ut porta
                    molestie dui duis blandit molestie etiam enim erat sociis
                    lacinia litora phasellus sit. Ipsum Lacinia class enim
                    pharetra interdum potenti tellus parturient. Potenti
                    scelerisque erat facilisi mauris tortor, mattis euismod
                    augue nascetur rutrum augue ipsum tortor cum Porta primis.
                  </p>
                  <p>
                    Praesent lectus facilisi tempor ridiculus arcu pharetra non
                    tellus. Torquent nisl tempor. Magnis mollis lobortis nam,
                    montes ut, consequat sed amet nullam, malesuada nascetur
                    ornare sociosqu magna cum gravida quam tincidunt dapibus
                    tellus felis nibh inceptos netus convallis facilisis
                    torquent. Laoreet pulvinar ut. Fringilla lacus tellus lectus
                    erat hac conubia eget quisque nisi aliquam nibh molestie
                    nisi hymenaeos id phasellus metus duis inceptos arcu
                    hendrerit ligula blandit lectus nisl fermentum sociosqu
                    pretium eros libero.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" sm="6" md="4">
            <div className="merchant">
              <div className="merchant-header">
                <div className="merchant-avatar">
                  <img
                    src="/assets/images/avatar/avatar-img-01.jpg"
                    alt="avatar"
                  />
                </div>
                <div className="merchant-info">
                  <h4>Herlander Bento</h4>
                  <span>Vendedor</span>
                </div>
              </div>
              <div className="merchant-form">
                <form>
                  <div className="form-group">
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Digita o nome"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="email"
                      className="form-control"
                      placeholder="Digita o e-mail"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="number"
                      className="form-control"
                      placeholder="Digita o telefone"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <TextArea
                      className="form-control"
                      placeholder="Estou interessado [ Terreno Quinta dos Coqueiros II ] "
                      required
                    />
                  </div>
                  <div className="form-group mt-4">
                    <Button>Enviar Email</Button>
                  </div>
                  <div className="form-group mt-4 d-flex">
                    <Button>
                      <FaPhoneAlt />
                      <span>Ligar</span>
                    </Button>
                    <Button>
                      <FaWhatsapp />
                      <span>WhatsApp</span>
                    </Button>
                  </div>
                  <div className="form-group mt-4">
                    <Button>Enviar mensagem privada</Button>

                    <p>
                      Você pode responder a mensagens privadas na página "Caixa
                      de entrada" da sua conta de usuário.
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="info">
              <h2>Dicas de segurança</h2>
              <ol>
                <li>
                  <span>Negocie apenas pessoalmente.</span>
                </li>
                <li>
                  <span>Encontre o vendedor em um lugar público.</span>
                </li>
                <li>
                  <span>Nunca transfira dinheiro à distância.</span>
                </li>

                <li>
                  <span>Denuncie anúncios suspeitos.</span>
                </li>
              </ol>
              <div className="text-center">
                <Link to="/">Ver mais</Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <div className="mt-5 mb-4">
            <h2>Productos relacionados</h2>
          </div>
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
    </Section>
  );
}
