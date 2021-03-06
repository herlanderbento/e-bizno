import styled from "styled-components";

export const Section = styled.section`
  padding: 40px 15px;
  background: var(--primary);
  margin-top: 60px;

  .subscribe {
    button {
      width: 100%;
      padding: 15px 0;
    }
  }
  .text-right {
    text-align: right;
  }

  button {
    background: #ffffff;
    color: var(--primary) !important;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  p {
    color: var(--light);
    font-size: 28px;

    @media screen and (max-width: 991px) {
      font-size: 26px;
    }

    @media screen and (max-width: 480px) {
      font-size: 18px;
    }
  }
`;
