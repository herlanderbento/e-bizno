import styled from "styled-components";

export const Section = styled.section`
  overflow: hidden;
  position: relative;

  .signup-left-items{
    background-color: var(--primary);
    background-image: url('/assets/images/wave-pattern-light.svg');
    background-size: cover;
    padding:  20px;

    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
  }

  .signup-brand{
    position: absolute;
    top: 30px;

    h1 {
      font-family: "Pacifico", sans-serif;
      font-size: 30px;
      color: var(--light);

      span {
        color: var(--dark-text);
      }
    }
  }

  .signup-content{
    padding: 20px 0;

    .description{
      text-align: center;
      color: #ffffff;
      p{
        line-height: 34px;

        font-size: 20px;
        margin-top: 20px;
      }
    }
    
  }

  .signup-profile{
    display: flex;

    align-items: center;
    justify-content: center;

    flex-direction: column;

    .avatar{
      width: 75px;
      height: 75px;

      margin-top: 40px;

      img{
        width: 100%;
        border-radius: 120px;
      }
    }

    .profile-desc{
      margin-top: 10px;
      text-align: center;
      color: var(--light);

      h2{
        font-size: 24px;
      }

      span{
        font-size: 16px;
        opacity: .8;
      }
    }
  }

  .signup-right-items{
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    position: relative;
  }

  .ms-auto{
    position: absolute;
    top: 15px;
    right: 15px;

    a{
      color: var(--text-dark) !important;
      font-size: 14px;
      font-weight: 500;
    }
  }

  .form-signup{
    position: relative;

    .header{
      text-align: center;
      h1{
        font-size: 28px;
        color: var(--dark);
        margin-bottom: 8px;
      }

      p{
        font-size: 16px;
        color: var(--text-dark);
      }
    }

    .body{
      margin-top: 46px;
      .form-group{
        .form-label{
          font-size: 14px;
        }

        .form-label-link{
          color: var(--primary);
          font-size: 14px;
          font-weight: 500;       
        }
        .required{
          color: red !important;
        }

        input{
          padding: 5px !important;

          &::placeholder {
            color: var(--text-dark);
          }
        }

        button{
          width: 100%;
          padding: 12px 16px;
        }
      }
    }
  }

  .separator{
    padding-bottom: 10px;
    border-bottom: 2px solid var(--light);
  }
  .nav-item {
    &:first-child{
      margin-right: 20px;
    }
    .nav-link{
      display: flex;
      align-items: center;

      color: var(--text-dark);
      font-size: 16px;

      padding: 8px 0 !important;
      cursor: pointer;

      position: relative;

      svg{
        margin-right: 6px;
      }

    }
    .active{
      color: var(--primary) !important;
    }
  }
  
`