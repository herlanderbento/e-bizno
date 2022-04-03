import styled from "styled-components";

export const SectionContent = styled.section`
  padding: 70px 15px 90px;

  .contact-form,
  .contact-info {
    position: relative;

    .contact-form-title,
    .contact-info-title {
      h2 {
        margin-bottom: 10px;
      }

      p {
        color: var(--text);
        line-height: 26px;
      }
    }
  }

  .form-group {
    margin: 10px 0;

    label {
      margin-bottom: 10px;
    }

    .form-control {
      background: #f2f3f5 !important;
    }

    button {
      padding: 16px 35px;
      width: 100%;
    }
  }

  .address {
    margin-top: 40px;

    ul.nav-list {
      padding: 0;

      li {
        display: flex;
        align-items: center;
        gap: 15px;

        margin: 10px 0;

        svg {
          color: var(--primary);
          font-size: 18px;
        }

        address,
        a {
          margin: 0;
          color: var(--text);

          font-weight: 500;
          font-size: 15px;

          transition: color 0.3s;
        }

        a:hover {
          color: var(--primary);
        }
      }
    }
  }
`;
