import { useState, useEffect} from "react";
import api from 'axios'
import { formatPrice } from "utils/format";
import { Section } from "./styles";


export function Properties() {
  const [properties, setProperties] = useState([])

  useEffect(() => {

    async function fetchProperties() {
      try {
        const { data } = await api.get(`${process.env.REACT_APP_URL_PRODUCT}/10`);
        setProperties(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProperties();
  }, []);


  return (
    <Section>
      <div className="profile-info-items">
        <div className="profile-header">
          <h2>Meus imóveis</h2>
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
                  <tr key={IdProduct}>
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
    </Section>
  )
}