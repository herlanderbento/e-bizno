import { formatPrice } from "utils/format";
import { Section } from "./styles";


export function Properties() {
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