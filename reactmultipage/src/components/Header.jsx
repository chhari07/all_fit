import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import logo from '../images/Logo.png';


const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" className="text-white">
        <img src="https://wallpapercave.com/uwp/uwp4490699.png  "   alt="Logo" className=" bg-white" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;

 
`;

export default Header;
