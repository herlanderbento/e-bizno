import styled from "styled-components";

export const SectionContent = styled.section`
  position: relative;
  background-color: #f7faff;


  .banner{
    background: url('/assets/images/wave-pattern-light.svg') var(--primary) top center;
    background-size: cover;
    width: 100%;
    padding: 80px 15px 120px;

    .info{
      color: #ffffff;
      p{
        font-size: 16px;
      }
    }
  }

  .profile-info{
    margin-top: -60px;

    &-items{
      background-color: #ffffff  ;
      border-radius: 5px;

      margin-bottom: 40px;
      padding: 32px;
    }
  }

  .profile-info-header{
    position: relative;

    .avatar{
      width: 112px;
      height: 112px;

      background: var(--light);
      border-radius: 120px;
      
      border: 4px solid var(--primary);

      display: flex;
      align-items: center;
      justify-content: center;

      h2{
        font-size: 52px;
        margin: 0;
      }

      margin: auto;
      
      img{
        width: 100%;
        border-radius: 120px;
      }
    }

    .description{
      margin-top: 20px;
      text-align: center;

      h2{
        font-size: 18px;
        color: var(--dark);
      }

      p{
        color: var(--text-dark);
      }
    }
  }


  .profile-info-body{

    .title{
      margin: 20px 0 10px;
      font-size: 14px;
      text-transform: uppercase;
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
      position: relative;
      color: var(--primary);

      &:after{
        content: '';
        position: absolute;
        top: 0;
        left: -32px;
        bottom: 0;

        width: 4px;
        height: inherit;

        background: var(--primary);
      }
    }
  }
`