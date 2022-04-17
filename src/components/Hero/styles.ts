import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 10px 15px 0;
  border-radius: 5px;
  background-image: linear-gradient(
    to right,
    rgba(55, 125, 255, 0.03),
    rgba(9, 165, 190, 0.05) 50%,
    rgba(245, 202, 153, 0.05)
  );

  @media screen and (max-width: 990px) {
    padding-top: 40px;
  }

  .section-text {
    position: relative;

    @media (max-width: 990px) {
      text-align: center;

      .nav-list {
        justify-content: center;
      }

      margin-bottom: 40px;

     
    }

    .nav-list {
      margin-top: 20px;

      display: flex;
      align-items: center;
      gap: 10px;

      padding: 0;

      li {
        font-size: 14px;
        font-weight: 500;
        position: relative;

        &:nth-child(2),
        &:nth-child(3) {
          margin-left: 20px;

          &::before {
            content: "";
            position: absolute;
            left: -18px;
            top: 8px;
            height: 5px;
            width: 5px;
            background: #201c2d;
            border-radius: 50%;
          }
        }
      }

      a {
        color: var(--dark);
        transition: color 0.3s;

        &:hover {
          color: var(--primary);
        }
      }
    }
  }

  .section-img {
    text-align: center;

    img {
      height: 200px;
      object-fit: cover;
    }
  }
`;
export const SectionTitle = styled.section``;
