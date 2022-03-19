import styled from "styled-components";
import { Container as Containers } from "reactstrap";

export const Container = styled(Containers)`
  @media screen and (max-width: 992px) {
    max-width: 960px;
  }

  @media screen and (min-width: 1320px) {
    max-width: 1160px;
  }
`;
