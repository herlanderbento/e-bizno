import styled from "styled-components";

export const Section = styled.section`

 .profile-info-items{
    background-color: #ffffff  ;
    border-radius: 5px;

    margin-bottom: 40px;
    padding: 32px;
  }

  .profile-header{
    padding-bottom: 5px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--light);

    h2{
      font-size: 18px;
    }
  }
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
      padding: 4px !important;

      &::placeholder {
        color: var(--text-dark);
      }
    }

    .form-select{
      border: 2px solid var(--light);
      background-color: var(--white);
      border-radius: 4px;
      width: 100%;
      margin-bottom: 10px;
      padding: 10px 15px;

      &.selected{
        color: var(--text-dark);
      }
    }

    button{
      width: 100%;
      padding: 12px 16px;
    }
  }
    
`