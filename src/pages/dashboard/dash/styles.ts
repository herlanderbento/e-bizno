import { Card } from "reactstrap";
import styled from "styled-components";

export const Section = styled.section`
  .table{
    thead{
      border: 0;
    }
  }
    
  .table-thead-bordered>:not(:last-child)>:last-child>* {
    border-bottom: 0.0625rem solid rgba(33,50,91,.1);
  }

  .table-light{
    background-color: #e7eaf3;
  }

  .img-property{
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }
`;

export const CardItems = styled(Card)`
  display: flex !important;
  background: #ffffff;
  padding: 20px;
  border: 0;
  .header {
    display: flex;
    justify-content: space-between;
    .count {
      font-size: 42px;
      font-weight: 600;
      color: var(--gray);
    }
    .title {
      font-size: 16px;
    }
    .icon {
      svg {
        font-size: 42px;
      }
      .color-success {
        color: #198754;
      }
      .color-info {
        color: #0dcaf0;
      }
      .color-danger {
        color: #dc3545;
      }
    }
  }
  .body {
    margin: 10px 0;
    .progress {
      background: var(--light);
      border-radius: 5px;
      height: 10px;
    }
  }
`;