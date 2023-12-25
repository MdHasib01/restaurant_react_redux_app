import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  RatingBar,
  Slider,
  Text,
} from "components";
import Cart from "components/Cart";
import { userLoggedIn, userLoggedOut } from "features/auth/authSlice";
import useAuth from "hooks/useAuth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = ({ activeNav }) => {
  const isLoggedin = useAuth();

  const dispatch = useDispatch();
  console.log("usersss", dispatch(userLoggedIn()));
  const logout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
  };
  const [open, setOpen] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false);
  const navigate = useNavigate();
  const textAvtive = "text-red-400";
  const textInactive = "text-gray-900_cc";
  const sizeActive = "txtOpenSansRomanRegular16Red400";
  const sizeInactive = "txtOpenSansRomanRegular16Gray900cc";
  return (
    <header className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
      <div className="header-row ">
        <Img
          onClick={() => navigate("/")}
          className="h-[51px] common-pointer"
          src="images/img_logo.svg"
          alt="Logo"
        />
        <div
          className="mobile-menu"
          onClick={() => setNavbarActive(!navbarActive)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div
        className={`flex md:flex-1 sm:flex-col flex-row font-opensans ${
          !navbarActive && "sm:hidden"
        } sm:gap-5 items-start justify-center md:ml-[0] ml-[107px] md:mt-0 mt-2.5 pt-0.5 w-[52%] md:w-full`}
      >
        <div className={`flex flex-col items-center justify-start`}>
          <Text
            className="common-pointer hover:text-red-400 duration-100 text-base "
            size="txtOpenSansRomanRegular16Red400"
            onClick={() => navigate("/")}
          >
            Home
          </Text>
          {activeNav === "home" && <Line className="bg-red-400 h-px w-full" />}
        </div>
        <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
          <Text
            className={`common-pointer hover:text-red-400 duration-100 text-base ${
              activeNav === "menu" ? textAvtive : textInactive
            } `}
            size={activeNav === "menu" ? sizeActive : sizeInactive}
            onClick={() => navigate("/menu")}
          >
            Menu
          </Text>
          {activeNav === "menu" && <Line className="bg-red-400 h-px w-full" />}
        </div>
        <div className="flex flex-col gap-[7px] items-start justify-start ml-8 sm:ml-[0] w-[12%] sm:w-full">
          <Text
            className={`common-pointer hover:text-red-400 duration-100 text-base ${
              activeNav === "aboutus" ? textAvtive : textInactive
            } `}
            size={activeNav === "aboutus" ? sizeActive : sizeInactive}
            onClick={() => navigate("/aboutus")}
          >
            About us
          </Text>
          {activeNav === "aboutus" && (
            <Line className="bg-red-400 h-px w-full" />
          )}
        </div>
        <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px]">
          <Text
            className={`common-pointer hover:text-red-400 duration-100 text-base ${
              activeNav === "orderonline" ? textAvtive : textInactive
            } `}
            size={activeNav === "orderonline" ? sizeActive : sizeInactive}
            onClick={() => navigate("/orderonline")}
          >
            Order online
          </Text>
          {activeNav === "orderonline" && (
            <Line className="bg-red-400 h-px w-full" />
          )}
        </div>
        <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[27px]">
          <Text
            className={`common-pointer hover:text-red-400 duration-100 text-base ${
              activeNav === "reservation" ? textAvtive : textInactive
            } `}
            size={activeNav === "reservation" ? sizeActive : sizeInactive}
            onClick={() => navigate("/reservation")}
          >
            Reservation
          </Text>
          {activeNav === "reservation" && (
            <Line className="bg-red-400 h-px w-full" />
          )}
        </div>
        <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px]">
          <Text
            className={`common-pointer hover:text-red-400 duration-100 text-base ${
              activeNav === "contact" ? textAvtive : textInactive
            } `}
            size={activeNav === "contact" ? sizeActive : sizeInactive}
            onClick={() => navigate("/contact")}
          >
            Contact us
          </Text>
          {activeNav === "contact" && (
            <Line className="bg-red-400 h-px w-full" />
          )}
        </div>
      </div>
      <Button
        onClick={() => setOpen(true)}
        className={`cursor-pointer border hover:border-red-400 duration-200 hover:drop-shadow-xl hover:scale-105 flex h-[50px] items-center ${
          !navbarActive && "sm:hidden"
        } justify-center md:ml-[0] ml-[122px] w-[50px]`}
        leftIcon={
          <Img
            className={`h-6 m-[13px] ${!navbarActive && "sm:hidden"}`}
            src="images/img_cart.svg"
            alt="cart"
          />
        }
        shape="circle"
        color="white_A700"
        variant="fill"
      >
        <div className={!navbarActive && "sm:hidden"}></div>
      </Button>

      {!isLoggedin ? (
        <Button
          className={`cursor-pointer border rounded-lg hover:border-red-400 hover:bg-[#fff] hover:text-red-400 hover:drop-shadow-lg font-semibold leading-[normal] min-w-[112px] ${
            !navbarActive && "sm:hidden"
          } md:ml-[0] ml-[25px] text-center text-sm`}
          color="red_400"
          size="sm"
          variant="fill"
          onClick={() => navigate("/login")}
        >
          Log in
        </Button>
      ) : (
        <Button
          className={`cursor-pointer border rounded-lg hover:border-red-400 hover:bg-[#fff] hover:text-red-400 hover:drop-shadow-lg font-semibold leading-[normal] min-w-[112px] ${
            !navbarActive && "sm:hidden"
          } md:ml-[0] ml-[25px] text-center text-sm`}
          shape="round"
          color="red_400"
          size="sm"
          variant="fill"
          onClick={logout}
        >
          Log out
        </Button>
      )}
      <Cart open={open} setOpen={setOpen} />
    </header>
  );
};

export default Navbar;
