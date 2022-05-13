import { formatPrice } from "utils/format";
import { Section } from "./styles";


export function Users() {
  return (
    <Section>
      <div className="profile-info-items">
        <div className="profile-header">
          <h2>Usuários</h2>
        </div>
        <div className="profile-body">
          <div className="table-responsive">
            <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle">
              <thead className="thead-light">
                <tr>
                  <th>Referência</th>
                  <th>Status</th>
                  <th>Valor</th>
                  <th>Atualização</th>
                  <th>Invoice</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td><a href="#">#3682303</a></td>
                  <td><span className="badge bg-soft-warning text-warning">Pending</span></td>
                  <td>{formatPrice(264)}</td>
                  <td>22/04/2020</td>
                  <td>
                    <a className="btn btn-white btn-xs" href="./page-invoice.html">
                      <i className="bi-file-earmark-arrow-down-fill me-1"></i>
                      PDF
                    </a>
                  </td>
                </tr>

                <tr>
                  <td><a href="#">#2333234</a></td>
                  <td>
                    <span className="badge bg-soft-success text-success">Successful</span>
                  </td>
                  <td>{formatPrice(264)}</td>
                  <td>22/04/2019</td>
                  <td>
                    <a className="btn btn-white btn-xs" href="./page-invoice.html">
                      <i className="bi-file-earmark-arrow-down-fill me-1"></i>
                      PDF
                    </a>
                  </td>
                </tr>

                <tr>
                  <td><a href="#">#9834283</a></td>
                  <td>
                    <span className="badge bg-soft-success text-success">Successful</span>
                  </td>
                  <td>{formatPrice(264)}</td>
                  <td>22/04/2018</td>
                  <td>
                    <a className="btn btn-white btn-xs" href="./page-invoice.html">
                      <i className="bi-file-earmark-arrow-down-fill me-1"></i>
                      PDF
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