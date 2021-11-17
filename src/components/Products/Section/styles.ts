import styled from "styled-components";

export const Sections = styled.section`
  padding: 40px 15px 90px;
  background: #ffffff;

  .row {
    margin-top: 40px;
    align-items: stretch;
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

  button {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const Title = styled.div`
  span {
    font-size: 18px;
    color: #8c98a4;
  }
  h2 {
    margin-top: 10px;
    span {
      color: var(--primary);
      font-size: 28px;
    }
  }
`;
