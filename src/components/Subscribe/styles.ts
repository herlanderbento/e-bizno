import styled from "styled-components";

export const Section = styled.section`
  padding: 40px 15px;
  background: var(--primary);
  margin-top: 60px;

  .subscribe {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button{
    background: #ffffff;
    color: var(--primary) !important;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  p {
    color: var(--light);
    font-size: 28px;
  }
`;
