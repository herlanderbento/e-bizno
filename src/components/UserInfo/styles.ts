import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  
  .d-flex{
    cursor: pointer;
  }
  .user-info{
    h4{
      margin: 0;
      font-size: 14px;
      color: var(--dark);
      font-weight: 500;
    }

    small{
      color: var(--primary);
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  .logout{
    font-size: 20px;
    cursor: pointer;

    &:hover{
      color: var(--primary);
    }
  }
`;

export const Avatar = styled.div`
  width: 52px;
  height: 52px;

  margin: 0 15px;

  background: var(--light);
  padding: .2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 2px solid var(--primary);

  color: var(--text-dark);
  font-size: 18px;
  font-weight: 500;

  line-height: 1;

  h2{
    margin: 0;
  }
`