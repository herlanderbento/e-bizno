import styled from "styled-components";
import { Card as Cards } from "reactstrap";

export const Section = styled.section`
  padding: 80px 15px 100px;
  background: var(--light-primary);
  .row {
    margin-top: 40px;
    align-items: stretch;
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

        h4{
          font-size: 20px;
        }

        span{
          font-size: 15px;
        }

      }
    }
  }

  
`;
