import styled, { css } from "styled-components";

interface IContainerProps {
  isFilled: Boolean;
  isFocused: Boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border: 2px solid var(--light);
  background-color: var(--white);
  width: 100%;
  height: 140px;
  padding: 10px;
  margin-bottom: 10px;

  svg {
    margin: 10px 5px;
    color: var(--text);
  }

  ${(props) =>
    props.isFocused &&
    css`
      svg {
        color: var(--primary);
      }

      border-color: var(--primary);
    `}
  ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: var(--primary);
      }
    `}

  textarea {
    flex: 1;
    height: 100%;
    padding: 8px 10px;
    font-size: 14px;
    background-color: transparent;
    color: var(--text);
    border: 0;
    outline: none;

    &::placeholder {
      font-size: 14px;
    }
  }
`;
