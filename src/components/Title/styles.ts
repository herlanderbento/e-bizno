import styled from "styled-components";

export const TitleContent = styled.div`
  h2 {
    font-size: 40px;
    position: relative;
    margin-bottom: 24px;
    padding-bottom: 15px;

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }

    span {
      color: var(--primary);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      //left: calc(50% - 40px);
      width: 90px;
      height: 3px;
      background: var(--primary);
    }
  }

  p {
    font-size: 20px;
    color: var(--secondary);
  }
`;
