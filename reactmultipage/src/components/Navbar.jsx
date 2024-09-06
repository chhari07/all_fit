import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";
import"./Navbar.css"; 


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: white;
            transition: color 0.3s linear;
          }
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
    }

    /* Laptop/Desktop View */
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: none;
        background: transparent;
        cursor: pointer;

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }

        .close-outline {
          display: none;
        }
      }

      .navbar-list {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8); /* Transparent black background */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        transform: translateX(100%);
        transition: all 0.3s ease-in-out;
        z-index: 999;
      }

      .menuIcon.active .navbar-list {
        transform: translateX(0);
      }

      .menuIcon.active .mobile-nav-icon {
        display: none;
      }

      .menuIcon.active .close-outline {
        display: inline-block;
        color: white;
        font-size: 4.2rem;
        position: absolute;
        top: 1.5rem;
        right: 2rem;
        cursor: pointer;
      }
    }
  `;

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        {/* Navigation Links */}
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/service">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
