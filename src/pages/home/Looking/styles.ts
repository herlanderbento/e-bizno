import styled from "styled-components";
import { Link as Links } from "react-router-dom";
import { Card as Cards } from "reactstrap";

import img from "../../../assets/images/img22.jpg";

export const Section = styled.div`
  padding: 80px 15px;
  position: relative;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 80px 15px 20px;
  }

  .bg-img-start {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
  }

  .banner-half-middle-x {
    position: absolute;
    top: 0px;
    right: 0;
    bottom: 0;
    width: 40%;
    height: 100%;
    z-index: -1;
  }

  .bg-img {
    width: 546px;
    background: url(${img});
  }
`;

export const Card = styled(Cards)`
  width: 100%;
  height: 100%;

  border: 0;
  box-shadow: 0px 15px 38px 15px rgb(0 0 0 / 03%);

  padding: 24px 20px;

  svg {
    margin-top: 20px;
  }

  h3 {
    font-size: 18px;
    font-weight: 400;
    margin: 24px 0 16px;
  }

  p {
    color: var(--secondary);
    line-height: 26px;
    margin-bottom: 1.5rem;
  }

  label {
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 2px;

    svg {
      margin-top: 2px;
    }
  }
`;

export const Link = styled(Links)`
  color: var(--primary) !important ;
  font-size: 16px;
`;
