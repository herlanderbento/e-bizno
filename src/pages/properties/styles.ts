import styled from "styled-components";

export const Hero = styled.section`
  width: 100%;
  padding: 60px 15px 30px;
  border-radius: 5px;
  background-image: linear-gradient(
    to right,
    rgba(55, 125, 255, 0.03),
    rgba(9, 165, 190, 0.05) 50%,
    rgba(245, 202, 153, 0.05)
  );
  display: flex;
  justify-content: center;
  align-items: center;

  .row {
    justify-content: center;
  }

  .form-text {
    margin-top: 1rem;
    font-size: 16px;
    color: #8c98a4;
  }
`;

export const InputCard = styled.div`
  display: flex;
  background-color: #fff;
  align-items: center;
  padding: 0.6125rem 0.6125rem;
  box-shadow: 0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%);
  border-radius: 0.5rem;

  .separator{
    width: 2px;
    height: 20px;
    background: #8c98a4 !important;
    opacity: .7;
  }

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
      font-size: 16px;
      color: var(--secondary);
    }
    &:focus {
      outline: none !important;
      box-shadow: none !important;
    }
  }

  button {
    padding: 10px 15px;
  }
`;

export const Sections = styled.section`
  padding: 40px 15px 50px;
  background: #ffffff;

  .row {
    margin-top: 40px;
    align-items: stretch;
  }

  .price {
    font-size: 16px;
  }

  .title {
    font-size: 20px !important;
    text-transform: capitalize;
  }

  .nav-list-nav li span {
    font-size: 12px !important;
  }

  button {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .section-center{
    display: flex;
    align-items: center !important;
    justify-content: center !important;
    padding: 0 !important;
    margin-top: 40px;

    .pagination{
      margin: 0;

      .page-link{
        color: var(--dark);
        padding: 10px 15px;
      }

      .active .page-link{
        color: var(--light);
        background: var(--primary) !important;
        border: 0;
      }
    }
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

