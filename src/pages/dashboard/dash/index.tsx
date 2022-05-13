import { useState, useEffect} from "react";
import { Progress } from "reactstrap";
import { AiOutlineUser } from "react-icons/ai";
import { RiSoundModuleLine } from "react-icons/ri";
import { formatPrice } from "utils/format";
import api from 'axios'

import { Section, CardItems } from './styles'

export function Dash(){
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

  
  return(
    <Section>
       <div className="row mb-4">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <CardItems>
              <div className="header">
                <div className="desc">
                  <h4 className="count">2</h4>
                  <span className="title">Usuários</span>
                </div>
                <div className="icon">
                  <AiOutlineUser className="color-success" />
                </div>
              </div>
              <div className="body">
                <Progress animated color="success" value="25" />
              </div>
            </CardItems>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <CardItems>
              <div className="header">
                <div className="desc">
                  <h4 className="count">2</h4>
                  <span className="title">Usuários</span>
                </div>
                <div className="icon">
                  <AiOutlineUser className="color-success" />
                </div>
              </div>
              <div className="body">
                <Progress animated color="success" value="25" />
              </div>
            </CardItems>
          </div>
       </div>
       <div className="profile-info-items mb-4">
        <div className="profile-header">
          <h2>Imóveis</h2>
        </div>
        <div className="profile-body">
          <div className="table-responsive">
            <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle">
              <thead className="thead-light">
                <tr>
                  <th>Imagem</th>
                  <th>Imóvel</th>
                  <th>Preço</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {properties.map(({IdProduct, name, price, path}) => (
                  <tr>

                    <td>
                      <img src={path} alt="imóveis" className="img-property" />
                    </td>
                    <td>{name}</td>
                    <td>{price},00KZ</td>
                    <td>
                      <a className="btn btn-white btn-xs" href="./page-invoice.html">
                        <i className="bi-file-earmark-arrow-down-fill me-1"></i>
                        Ver detalhes
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
       </div>
       <div className="profile-info-items mb-4">
        <div className="profile-header">
          <h2>Imóveis</h2>
        </div>
        <div className="profile-body">
          <div className="table-responsive">
            <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle">
              <thead className="thead-light">
                <tr>
                  <th>Imagem</th>
                  <th>Imóvel</th>
                  <th>Preço</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <img src="/assets/images/property/property-grid-1.png" alt="imóveis" className="img-property" />
                  </td>
                  <td>Venda um apartamento no centro da cidade</td>
                  <td>{formatPrice(264)}</td>
                  <td>
                    <a className="btn btn-white btn-xs" href="./page-invoice.html">
                      <i className="bi-file-earmark-arrow-down-fill me-1"></i>
                      Ver detalhes
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>
                    <img src="/assets/images/property/property-grid-1.png" alt="imóveis" className="img-property" />
                  </td>
                  <td>Venda uma casa no bairro Uíge</td>
                  <td>{formatPrice(264)}</td>
                  <td>
                    <a className="btn btn-white btn-xs" href="./page-invoice.html">
                      <i className="bi-file-earmark-arrow-down-fill me-1"></i>
                      Ver detalhes
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>
                    <img src="/assets/images/property/property-grid-1.png" alt="imóveis" className="img-property" />
                  </td>
                  <td>Condomínio Quinta dos Coqueiros T3</td>
                  <td>{formatPrice(264)}</td>
                  <td>
                    <a className="btn btn-white btn-xs" href="./page-invoice.html">
                      <i className="bi-file-earmark-arrow-down-fill me-1"></i>
                      Ver detalhes
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
       </div>
    </Section>
  )
}