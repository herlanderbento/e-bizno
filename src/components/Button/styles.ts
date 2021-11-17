import styled from "styled-components";

export const Btn = styled.button`
  display: inline-block;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  background-color: var(--primary);
  border: 0.0625rem solid transparent;
  border-radius: 0.3125rem;
  padding: 0.6125rem 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #ffffff;
  }
`;