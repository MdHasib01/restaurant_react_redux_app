import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, RatingBar, Text } from "components";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import PopularMenu from "components/PopularMenu/PopularMenu";

const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[140px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10  items-center justify-start max-w-[1240px] mx-auto md:px-5 w-full">
          <Navbar activeNav={"menu"} />
          <PopularMenu />
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default MenuPage;
