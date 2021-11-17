import { Row, Col } from "reactstrap";
import { HeaderTopContent, Container } from "./styles";
import {
  FaEnvelope,
  FaMobileAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

export function HeaderTop() {
  return (
    <HeaderTopContent>
      <Container>
        <Row>
          <Col lg="6">
            <ul className="nav-list">
              <li>
                <a>
                  <FaEnvelope size={16} />
                  <span>ebiznocompany.7@gmail.co.ao</span>
                </a>
              </li>
              <li>
                <a>
                  <FaMobileAlt size={16} />
                  <span>222222222</span>
                </a>
              </li>
            </ul>
          </Col>

          <Col lg="6">
            <ul className="nav-list nav-icons">
              <li>
                <a>
                  <FaFacebookF size={16} />
                </a>
              </li>
              <li>
                <a>
                  <FaTwitter size={16} />
                </a>
              </li>
              <li>
                <a>
                  <FaInstagram size={16} />
                </a>
              </li>
              <li>
                <a>
                  <FaTelegramPlane size={16} />
                </a>
              </li>
              <li>
                <a>
                  <FaWhatsapp size={16} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </HeaderTopContent>
  );
}
