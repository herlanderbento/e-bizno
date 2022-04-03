import styled from "styled-components";

export const Content = styled.section`
  padding: 60px 15px;
  background: var(--light-primary);

  .section-top {
    padding-bottom: 20px;

    ul {
      margin: 0;
      padding: 0;

      display: flex;
      gap: 20px;

      li {
        position: relative;
        a {
          color: var(--dark);
          font-size: 18px;

          &.active {
            color: var(--primary);
          }
        }
      }
    }

    h2 {
      margin-top: 16px;
    }
  }

  .product {
    box-shadow: 0px 15px 38px rgb(0 0 0 / 03%);
    background: #fff;

    .section-product-image {
      width: 100%;

      img {
        width: 100%;
        height: 454px;

        object-fit: cover;
      }
    }

    .section-product-description {
      padding: 26px;

      .product-title {
        padding: 15px 0;

        span {
          color: var(--primary);
          font-size: 16px;
        }
        h1 {
          color: var(--dark);
          font-weight: 600;

          margin: 10px 0;
        }
      }

      .product-location {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .product-amount {
        label {
          padding: 6px 12px;
          border-radius: 2px;
          font-weight: 600;
          font-size: 28px;
          color: var(--primary);
        }
      }

      .product-content {
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
            font-size: 14px;
          }
        }
      }

      .product-description {
        margin-top: 20px;

        h3 {
          font-size: 18px;
          font-weight: 600;

          margin-bottom: 20px;
        }

        p {
          line-height: 28px;
        }
      }
    }
  }

  .merchant {
    box-shadow: 0px 15px 38px rgb(0 0 0 / 03%);
    background: #fff;

    padding: 20px;

    .merchant-header {
      position: relative;

      display: flex;
      align-items: center;

      gap: 20px;

      padding-bottom: 20px;
      margin-bottom: 20px;

      border-bottom: 1px solid rgb(0 0 0 /5%);

      .merchant-avatar {
        width: 72px;
        height: 72px;

        img {
          width: 100%;
          border-radius: 120px;
        }
      }

      .merchant-info {
        h4 {
          margin: 0;

          font-size: 18px;
        }

        span {
          color: var(--primary);
        }
      }
    }

    .merchant-form {
      .form-group button {
        width: 100%;
        padding: 15px;
      }

      .d-flex {
        gap: 10px;

        button {
          background: var(--white);

          border: 2px solid var(--primary);

          color: var(--primary);

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          font-size: 16px;
        }
      }

      p {
        margin-top: 15px;
      }
    }
  }

  .info {
    box-shadow: 0px 15px 38px rgb(0 0 0 / 03%);
    background: #fff;

    padding: 20px;
    margin-top: 20px;

    h2 {
      font-size: 18px;
      margin: 0;

      padding-top: 10px;
    }

    ol {
      padding: 10px 20px 20px;
      margin: 0;

      li {
        margin: 10px 0;

        span {
          font-size: 15px;
        }
      }
    }

    div {
      border-top: 1px solid rgb(0 0 0 /5%);
      padding: 15px 0 0;

      a {
        font-size: 16px;
        color: var(--primary);
      }
    }
  }

  .price {
    font-size: 16px;
  }

  .title {
    font-size: 14px !important;
  }

  .nav-list-nav li span {
    font-size: 12px !important;
  }
`;
