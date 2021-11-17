import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: 600px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(55, 125, 255, 0.075) 50%,
    rgba(255, 255, 255, 0)
  );
  display: flex;
  align-self: center;
  .row{
    z-index: 999;
  }
  .banner-text {
    position: relative;
    margin-top: 120px;

    h1 {
      font-size: 56px;
      font-weight: 600;
      margin-bottom: 60px;

      span {
        color: var(--primary);
      }
    }

    p {
      font-size: 21px;
      color: var(--secondary);
    }
  }

  .position-relative{
    position: relative;
  }

  .position-absolute{
    position: absolute;
  } 
  .top-0{
    top: 0 !important;
  } 

  .end{
    right: 0;
  }

  .form-text {
    margin-top: 1rem;
    font-size: 16px;
    color: #8c98a4;
  }

  .img-fluid{
    width: 90%;
  }
`;

export const InputCard = styled.div`
  display: flex;
  background-color: #fff;
  padding: 0.6125rem 0.6125rem;
  box-shadow: 0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%);
  border-radius: 0.5rem;

  .input-card-form {
    position: relative;
  }

  .input-group {
    margin-right: 1rem;
  }
  .form-control,
  .input-group-prepend {
    border: 0;
    background: transparent;
  }

  .input-group-prepend {
    margin-left: 10px;
  }

  .form-control {
    box-shadow: none;
    outline: none;
    padding: 12px 5px;
    color: var(--secondary);
    font-size: 16px;

    &::placeholder {
      font-size: 14px;
      color: var(--secondary);
    }
    &:focus {
      outline: none !important;
      box-shadow: none !important;
    }
  }

  button {
    padding: 12px;
  }

`;
