import { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";

import api from "axios"

import { Button } from "components/Button";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Container } from "styles/container";
import { formatPrice } from "utils/format";
import { Content } from "./styles";

interface UseParamsProps {
  id: string;
}

interface IDataPropertyProps{
  name: string;
  IdProduct: string;
  localization: string;
  price: number;
  area: string;
  description: string;
  path: string
}

export function Section() {
  const { id } = useParams<UseParamsProps>();
  const [dataProperty, setDataProperty] = useState<IDataPropertyProps>();

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await api.get(`${process.env.REACT_APP_URL_PRODUCT}/id/${id}`);
        setDataProperty(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetch();
  }, [id]);

  const formatPrice = () => dataProperty?.price.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' });

  return (
    <Content>
      <Container>
        {/* <div className="section-top">
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
        </div> */}
        <Row>
          <Col lg="8" sm="6" md="8">
            <div className="product">
              <div className="section-product-image">
                <img src={dataProperty?.path} alt="" />
              </div>
              <div className="section-product-description">
                <div className="product-title">
                  <span>Apartamento</span>
                  <h1>{dataProperty?.name}</h1>
                </div>
                <div className="product-location">
                  <FaMapMarkerAlt color="#7e6ee5" size={16} />
                  <span>{dataProperty?.localization}</span>
                </div>
                <div className="product-amount">
                  <label>{formatPrice()}</label>
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
                      <span>Área: {dataProperty?.area}</span>
                    </li>
                  </ul>
                </div>
                <div className="product-description">
                  <h3>Descrição</h3>
                  <p>
                    {dataProperty?.description}
                  </p>
                
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" sm="6" md="4">
            <div className="merchant">
              <div className="merchant-header">
                {/* <div className="merchant-avatar">
                  <img
                    src="/assets/images/avatar/avatar-img-01.jpg"
                    alt="avatar"
                  />
                </div> */}
                <div className="merchant-info">
                  <h4>ENVIA UMA MENSAGEM</h4>
                  {/* <span>Vendedor</span> */}
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
                  <p>
                    Você pode responder a mensagens privadas na página "Caixa
                    de entrada" da sua conta de usuário.
                  </p>
                  
                </form>
                <div className="form-group mt-5">
                    <Button>Comprar</Button>
                  </div>
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
      </Container>
    </Content>
  );
}
