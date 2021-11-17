import styled from "styled-components";
import { Navbar as NavbarContent } from "reactstrap";
import { Container as Containers } from "../../styles/container";
import { NavLink as Links } from "react-router-dom";

export const HeaderTopContent = styled.header`
  width: 100%;
  background: var(--primary);

  .row {
    width: 100%;
  }

  .nav-icons {
    justify-content: flex-end;
    gap: 30px;
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 10px 0;
    padding: 0;

    li a {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--light);
      font-weight: 500;
      font-size: 12px;
      transition: all 0.2s ease-in-out;
      transform: translateY(0);

      &:hover {
        color: var(--primary);
      }
    }
  }
`;

export const Container = styled(Containers)`
  display: flex;
  justify-content: space-between;
  align-self: center;
  position: relative;

  @media screen and (max-width: 991px) {
    display: block;
  }

  @media screen and (max-width: 992px) {
    max-width: 960px;
  }

  .sticky-top {
    background: red !important;
  }
`;

export const Navbar = styled(NavbarContent)`
  padding: 20px 15px;


  .ml-auto {
    margin-left: auto !important;
  }
  .navbar-nav {
    align-items: center;
    gap: 20px;
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

  .is-Active{
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
`;

export const NavLink = styled(Links)`
  color: var(--dark) ;
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
