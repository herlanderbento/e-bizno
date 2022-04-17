import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: auto;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(55, 125, 255, 0.075) 50%,
    rgba(255, 255, 255, 0)
  );
  z-index: 0;
  position: relative;
  overflow: hidden;

  .row {
    align-items: center;
  }

  .container {
    padding: 0;
  }

  .banner-left {
    padding: 0 15px;
  }

  .banner-text {
    position: relative;
    margin-top: 120px;

    h1 {
      font-size: 56px;
      font-weight: 600;
      margin-bottom: 60px;
      line-height: 68px;

      span {
        color: var(--primary);
      }

      @media screen and (max-width: 1199px) {
        font-size: 46px;
        line-height: 54px;
      }
      @media screen and (max-width: 820px) {
        margin-bottom: 20px;
      }

      @media screen and (max-width: 800px) {
        font-size: 36px;
      }

      @media screen and (max-width: 768px) {
        br {
          display: none;
        }
      }
    }

    p {
      font-size: 21px;
      color: var(--secondary);
    }

    @media screen and (max-width: 768px) {
      margin-top: 80px;
    }

    @media screen and (max-width: 575px) {
      margin-top: 40px;
    }
  }

  .form-text {
    margin-top: 1rem;
    font-size: 16px;
    color: #8c98a4;
  }

  .img-fluid {
    margin-top: 30px;
    width: 90%;
    z-index: -1 !important;

    @media screen and (max-width: 991px) {
      width: 90%;
    }
  }
`;

export const InputCard = styled.div`
  width: 100%;
  z-index: 999 !important;
  display: flex;
  background-color: #fff;
  padding: 0.6125rem 0.6125rem;
  box-shadow: 0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%);
  border-radius: 0.5rem;

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
