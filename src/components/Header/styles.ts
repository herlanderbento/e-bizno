import styled from "styled-components";
import { Navbar as NavbarContent } from "reactstrap";
import { NavLink as Links } from "react-router-dom";

export const HeaderContent = styled.header`
  &.header {
    width: 100%;
  }

  .navbar-toggler {
    margin-top: 10px;

    font-size: 28px;
    color: var(--primary);
  }

  .navbar {
    padding: 10px 0;
    margin: 0;

    @media screen and (max-width: 834px) {
      padding: 10px 15px;
    }
  }

  .container {
    padding: 0;
  }

  &.is-sticky {
    position: fixed;
    width: 100%;
    left: 0;
    z-index: 2000;
    box-shadow: 0 2px 24px 0 rgb(0 0 0 / 8%);
    background-color: #ffffff;
    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
    transition: 0.2s ease-in-out;

    .navbar {
      padding: 5px 15px !important;
    }
  }
`;

export const Navbar = styled(NavbarContent)`
  padding: 10px 15px;

  @media screen and (max-width: 991px) {
    padding: 5px 15px;
  }

  .ml-auto {
    margin-left: auto !important;
  }
  .navbar-nav {
    align-items: center;
    gap: 50px;

    @media screen and (max-width: 991px) {
      padding-top: 20px;
      align-items: start;
      gap: 20px;
    }
  }

  .navbar-brand {
    color: var(--dark);
    h1 {
      font-family: "Pacifico", sans-serif;
      span {
        color: var(--primary);
      }
    }
  }

  .nav-link {
    /* &::before,
    &::after{
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--primary);
    }

    &::before{
      top: 0;
    }
    &::after{
      bottom: 0;
    } */
  }

  .is-Active {
    color: var(--primary);
    font-weight: 400;
  }
  .navbar-toggler {
    border: 0;
    box-shadow: 0;
    outline: none;
    margin-left: auto !important;
    position: absolute;
    right: 0;
    top: -2px;

    &:focus {
      box-shadow: none;
    }
  }

  .auth-content{
    display: flex;
  }
`;

export const NavLink = styled(Links)`
  color: var(--dark);
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  position: relative;
  padding-bottom: 10px;
  transition: all 0.2s ease-in-out;
  transform: translateY(0);

  &:hover {
    color: var(--primary);
    transform: translateY(-10%) !important;
  }
`;

export const Button = styled.a`
  display: inline-block;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  background-color: var(--primary);
  border: 0.0625rem solid transparent;
  border-radius: 0.3125rem;
  padding: 0.6125rem 2rem;
  transition: all 0.2s ease-in-out;
  transform: translateY(0);

  &:hover {
    color: #ffffff;
    transform: translateY(-10%);
  }
`;
