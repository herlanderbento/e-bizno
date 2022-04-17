import styled from "styled-components";
import { Card as Cards } from "reactstrap";

export const Section = styled.section`
  padding: 80px 15px 100px;
  overflow-x: hidden;
  background: var(--light-primary);
  .row {
    margin-top: 40px;
    align-items: stretch;
  }

  .slick-slider {
    margin-top: 40px;
  }

  .slick-prev,
  .slick-next {
    z-index: 999;
  }

  .slick-prev {
    left: -18px;
  }

  .slick-next {
    right: -8px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 1;
    color: var(--primary);
  }
`;
export const Card = styled(Cards)`
  width: 100%;
  height: 100%;
  background: none;
  border: 0;
  padding: 0;

  .images {
    position: relative;
    figure {
      position: relative;
      img {
        width: 286px;
        height: 352.97px !important;

        @media screen and (max-width: 1200px) {
          width: 100%;
          height: 380px !important;
        }
      }
      figcaption {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        padding: 20px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        //filter: brightness(1);
        background: rgba(0, 0, 0, 0.4);
        color: var(--light);

        h4 {
          font-size: 20px;
        }

        span {
          font-size: 15px;
        }
      }
    }
  }
`;
