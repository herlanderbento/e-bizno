import styled from "styled-components";
import { Card as Cards } from "reactstrap";

export const Card = styled(Cards)`
  width: 100%;
  height: 100%;

  border: 0;
  box-shadow: 0px 15px 38px rgb(0 0 0 / 03%);

  cursor: pointer;

  .img {
    position: relative;

    figure {
      position: relative;

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

        filter: brightness(1);
        background: rgba(0, 0, 0, 0.4);

        .info-top {
          display: flex;
          gap: 10px;

          label {
            padding: 6px 12px;
            border-radius: 2px;
            font-weight: 600;
            font-size: 12px;
            color: var(--light);
          }

          .bg-primary {
            background: var(--primary) !important;
          }

          .bg-secondary {
            background: var(--dark-blue) !important;
          }
        }

        .info-bottom {
          display: flex;
          justify-content: space-between;

          label {
            font-size: 22px;
            font-weight: 600;
            color: var(--light);
          }
        }
      }
    }
  }

  .body {
    padding: 5px 15px 20px;
  }

  .title {
    span {
      color: var(--primary);
    }
    h2 {
      font-size: 18px;
      color: var(--dark);
      margin: 10px 0;
    }
  }

  .location {
    margin: 15px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .content {
    position: relative;
    margin-top: 18px;
    border-top: 1px solid rgb(0 0 0 / 05%);

    .nav-list {
      padding: 20px 0 0;
      display: flex;
      align-items: center;
      gap: 20px;

      svg {
        margin-right: 5px;
      }

      span {
        color: var(--secondary);
        font-size: 16px;

        @media screen and (max-width: 1200px) {
          font-size: 14px;
        }
      }

      @media screen and (max-width: 1200px) {
        gap: 5px;
      }
    }
  }
`;
