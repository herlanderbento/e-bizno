import styled from "styled-components";

export const Information = styled.div`
  padding: 70px 15px 40px;
`
export const InfoContainer = styled.div`
  padding: 48px 28px;
  background: var(--light-primary);

  .row{
    align-items: stretch;
  }

  .card{
    width: 100%;
    height: 100%;
    border: 0;
    background: none;
  }
  .info-items{
    padding: 0 15px;

    h3{
      font-size: 24px;
      font-weight: 400;
      margin: 24px 0 16px;
    }

    p{
      color: var(--secondary);
      line-height: 28px;
      margin-bottom: 1rem;
    }
  }
`
