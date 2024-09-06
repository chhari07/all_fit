import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
 
<section className="bg-[url('http://m.gettywallpapers.com/wp-content/uploads/2022/06/Wallpaper-Chris-Bumstead.jpg')] bg-cover bg-center bg-black">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center bg-black bg-opacity-50">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
    ALL FIT
        <strong className="font-extrabold text-red-700 sm:block"> Increase Conversion. </strong>
      </h1>

     
      </div>
    </div>
  
</section>

  );
};


;

export default HeroSection;
