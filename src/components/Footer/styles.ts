  import styled from "styled-components";

export const FooterContent = styled.footer`
  padding: 80px 15px 20px;
  background: var(--dark-secondary);

  color: var(--light);

  .row{
    align-items: stretch;
  }

  .footer-items{
    height: 100%;
    position: relative;

    .header{
      margin-bottom: 30px;

      h4{
        font-size: 24px;
      }

      .logo{
        font-size: 32px;
        font-family: var(--font-logo);
        span{
          color: var(--primary);
        }
      }
    }

    .body{
      p,
      address,
      a{
        line-height: 28px;
        font-size: 16px;
        opacity: .8;
        color: var(--light);

      }
      p{
        margin-bottom: 25px;
      }

      ul{
        padding: 0;
      }

      ul.nav-list{
        display: flex;
        flex-direction: column;
        gap: 8px;

        a{
          transition: all 0.2s ease-in-out;
          &:hover{
            color: var(--primary);
          }
        }
      }

      ul.links li a{
        opacity: 1;
      }
      ul.icons-items{
        margin-top: 30px;
        display: flex;
        align-items: center;
        gap: 20px;

        li svg{
          color: #8598b2;
          transition: all 0.2s ease-in-out;
          &:hover{
            color: var(--primary);
          }
        }
      }
      button{
        width: 100%;
        padding-top: 12px;
        padding-bottom: 12px;
      }
    }
  }

  .footer-end{
    align-items: stretch;
    border-top: 1.5px solid rgb(255, 255, 255, .1);
    justify-content: space-between;
    padding-top: 30px;
    margin-top: 30px;

    &-items{
      margin: 0 !important;
      padding: 0 !important;

      p{
        font-size: 14px;
        opacity: .8;
      }
    }

    ul{
      padding: 0;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin: 0;
      a{
        color: var(--light);
        opacity: .8;
        font-size: 14px;
        transition: all 0.2s ease-in-out;

        &:hover{
          color: var(--primary);
          opacity: 1;
        }
      }
    }
  }
`