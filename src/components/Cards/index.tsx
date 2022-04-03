import { FaMapMarkerAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Card } from "./styles";

interface CardProps {
  to: string;
  sales?: string;
  feature?: string;
  image: string;
  price: string | number;
  title: string;
  category: string;
  location: string;
  beds?: string;
  rooms?: string;
  area?: string;
  classNameTitles?: string;
  classNameNav?: string;
  classNamePrice?: string;
}

export function Cards({
  to,
  sales,
  feature,
  image,
  price,
  title,
  category,
  location,
  beds,
  rooms,
  area,
  classNameTitles,
  classNameNav,
  classNamePrice,
}: CardProps) {
  const { push } = useHistory();

  return (
    <Card onClick={() => push(`${to}`)}>
      <div className="img">
        <figure>
          <img src={image} alt={title} className="img-fluid" />
          <figcaption className="info">
            <div className="info-top">
              <label className="bg-primary">{sales}</label>
              <label className="bg-secondary">{feature}</label>
            </div>
            <div className="info-bottom">
              <label>
                <span className={classNamePrice}>{price}</span>
              </label>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="body">
        <div className="title">
          <span>{category}</span>
          <h2 className={classNameTitles}>{title}</h2>
        </div>
        <div className="location">
          <FaMapMarkerAlt color="#7e6ee5" size={16} />
          <span>{location}</span>
        </div>
        <div className="content">
          <ul className={`nav-list ${classNameNav}`}>
            <li>
              <span>{beds}</span>
            </li>
            <li>
              <span>{rooms}</span>
            </li>
            <li>
              <span>{area}</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
}
