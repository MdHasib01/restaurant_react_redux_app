import React from "react";

import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";

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

import Footer from "components/Footer";
import Navbar from "components/Navbar/index.jsx";
import PopularMenu from "../../components/PopularMenu/PopularMenu.jsx";

const HomepagePage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-gradient  flex flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start max-w-[1240px] mb-5 mx-auto w-full">
            <Navbar activeNav="home" />
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col items-center justify-start rounded-[16px]">
                <div className="flex flex-col gap-9 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Fade left>
                      <Text
                        className="md:text-5xl text-[70px] text-gray-902"
                        size="txtOpenSansRomanBold70Gray902"
                      >
                        <span className="text-gray-902 font-opensans text-left font-bold">
                          <>
                            Best Restaurant
                            <br />
                            In{" "}
                          </>
                        </span>
                        <span className="text-red-400 font-opensans text-left font-bold">
                          Noapara.
                        </span>
                      </Text>
                    </Fade>
                    <Fade left>
                      <Text
                        className="leading-[200.00%] text-gray-802 text-xl w-[91%] sm:w-full"
                        size="txtPoppinsRegular20Gray802"
                      >
                        We provide best food in town, we provide home delivery
                        and dine in services.
                      </Text>
                    </Fade>
                  </div>
                  <Fade left>
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-[85%] md:w-full">
                      <Button
                        className="common-pointer border-2 hover:border-red-400 hover:text-red-400 hover:bg-[#fff] duration-200 hover:drop-shadow-xl cursor-pointer font-semibold min-w-[232px] text-center text-xl"
                        onClick={() => navigate("/menu")}
                        shape="round"
                        color="red_400"
                        size="lg"
                        variant="fill"
                      >
                        Order now
                      </Button>
                      <Button
                        className="common-pointer hover:drop-shadow-xl hover:bg-[#fff] border-2 hover:border-red-400 cursor-pointer font-semibold min-w-[232px] text-center text-xl"
                        onClick={() => navigate("/reservation")}
                        shape="round"
                        color="red_400_19"
                        size="lg"
                        variant="fill"
                      >
                        Reservation
                      </Button>
                    </div>
                  </Fade>
                </div>
              </div>
              <Fade right>
                <Img
                  className="h-[502px] md:h-auto hover:scale-105 duration-200 object-contain"
                  src="images/img_illustration.png"
                  alt="illustration"
                />
              </Fade>
            </div>
          </div>
        </div>
        <div className="bg-green-50 flex flex-row items-center justify-start mt-[139px] p-3.5 w-full">
          <div className="flex md:flex-col flex-row gap-[13px] items-start justify-start md:ml-1 ml-[149px] md:px-5  md:w-full w-[79%]">
            <Fade left>
              <div className="md:h-[558px] h-[646px] relative md:w-full w-3/5 md:w-full">
                <Img
                  className="absolute hover:scale-105 duration-200 h-[558px] inset-y-[0] left-[4%] my-auto object-contain md:w-full w-[85%]"
                  src="images/img_kindpng3443995.png"
                  alt="kindpng3443995"
                />
                <Img
                  className="absolute bottom-[7%] h-[175px] left-[0] object-contain w-[28%]"
                  src="images/img_kisspngleafpe.png"
                  alt="kisspngleafpe"
                />
                <Img
                  className="absolute bottom-[0] h-[117px] left-[39%] object-contain w-[17%]"
                  src="images/img_kisspngleafpe_117X110.png"
                  alt="kisspngleafpe One"
                />
                <Img
                  className="absolute h-[158px] object-contain right-[0] top-[0] w-[24%]"
                  src="images/img_kisspngleafpe_158X154.png"
                  alt="kisspngleafpe Two"
                />
              </div>
            </Fade>
            <div className="flex flex-col gap-9 items-start justify-start md:mt-0 mt-[91px] rounded-[16px] w-[39%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Fade right>
                  <Text
                    className="leading-[110.00%] sm:text-[38px] md:text-[44px] text-[52px] text-red-400"
                    size="txtBangla"
                  >
                    <span className="text-gray-902 font-opensans text-left font-bold leading-[normal]">
                      <>
                        Our Most <br />
                        Popular{" "}
                      </>
                    </span>
                    <span className="text-red-400 font-opensans text-left font-bold leading-[normal]">
                      Dish.
                    </span>
                  </Text>
                </Fade>
                <Fade right>
                  {" "}
                  <Text
                    className="leading-[200.00%] text-gray-801 text-xl w-full"
                    size="txtPoppinsRegular20"
                  >
                    This dish is full of flavor and nutrition! Quinoa is a
                    complete protein, providing all the essential amino acids
                    your body needs, and is also a good source of fiber.
                  </Text>
                </Fade>
              </div>
              <Fade right>
                {" "}
                <Button
                  className="common-pointer border-2 hover:border-red-400 hover:bg-[#fff] hover:text-red-400 hover:drop-shadow-lg duration-200 cursor-pointer font-semibold  text-center text-xl"
                  onClick={() => navigate("/menu")}
                  shape="round"
                  color="red_400"
                  size="lg"
                  variant="fill"
                >
                  Order now
                </Button>
              </Fade>
            </div>
          </div>
        </div>

        <PopularMenu />
        <div className="flex flex-col items-center justify-start max-w-[1240px] mt-[156px] mx-auto md:px-5 w-full">
          <Fade left>
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
              size="txtOpenSansRomanBold52"
            >
              Our Popular Chef
            </Text>
          </Fade>
          <List
            className="sm:flex-col flex-row font-poppins gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[60px] pb-3 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-[52px] items-center justify-start w-full">
              <div className="bg-gray-900_6c h-[549px] relative rounded-[50px] w-full">
                <Img
                  className="absolute h-[549px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
              </div>
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                size="txtPoppinsSemiBold25"
              >
                Betran Komar
              </Text>
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-501"
                size="txtPoppinsRegular25Gray501"
              >
                Head chef
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-gradient1  md:h-[541px] h-[549px] pt-2 relative rounded-[50px] w-full">
                <Img
                  className="absolute h-[541px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                  src="images/img_image3.png"
                  alt="imageThree"
                />
              </div>
              <Text
                className="mt-[54px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                size="txtPoppinsSemiBold25"
              >
                Ferry Sauwi
              </Text>
              <Text
                className="mt-[51px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-501"
                size="txtPoppinsRegular25Gray501"
              >
                Chef
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-lime-900_6c h-[549px] relative rounded-[50px] w-full">
                <Img
                  className="absolute h-[549px] inset-[0] justify-center m-auto object-cover rounded-[50px] w-full"
                  src="images/img_image2.png"
                  alt="imageTwo"
                />
              </div>
              <Text
                className="mt-[52px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                size="txtPoppinsSemiBold25"
              >
                Iswan Dracho
              </Text>
              <Text
                className="mt-[54px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-501"
                size="txtPoppinsRegular25Gray501"
              >
                Chef
              </Text>
            </div>
          </List>
          <Button
            className="cursor-pointer font-poppins font-semibold min-w-[235px] mt-[83px] text-center text-xl"
            shape="round"
            color="red_400"
            size="lg"
            variant="fill"
          >
            View all
          </Button>
        </div>
        <div className="flex flex-col font-opensans gap-[50px] items-center justify-start mt-[120px] pt-4 md:px-5 w-[55%] md:w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
              size="txtOpenSansRomanBold52"
            >
              What Our Customers Say
            </Text>
          </div>
          <div className="h-[394px] relative w-full">
            <PagerIndicator
              className="absolute flex h-[394px] inset-[0] justify-center m-auto max-w-[728px] w-full"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-bluegray-100 w-2.5 relative mx-[5.00px]"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray-301 w-2.5 relative mx-[5.00px]"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
            <Button
              className="absolute cursor-pointer flex h-[60px] inset-y-[0] items-center justify-center my-auto right-[0] rounded-[50%] w-[60px]"
              onClick={() => sliderRef.current?.slideNext?.()}
              shape="circle"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_group81.svg"
                alt="groupEightyOne"
              />
            </Button>
            <Button
              className="absolute cursor-pointer flex h-[60px] inset-y-[0] items-center justify-center left-[0] my-auto rotate-[180deg] rounded-[50%] w-[60px]"
              onClick={() => sliderRef.current?.slidePrev?.()}
              shape="circle"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_group82.svg"
                alt="groupEightyTwo"
              />
            </Button>
            <div className="absolute inset-[0] justify-center m-auto w-full"></div>
          </div>
        </div>
        <div className="bg-red-100 flex flex-col font-opensans items-center justify-end max-w-[1240px] mt-[120px] mx-auto p-[93px] md:px-5 rounded-[24px] w-full">
          <div className="flex flex-col gap-12 items-center justify-start mt-[17px] w-[77%] md:w-full">
            <Text
              className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
              size="txtOpenSansRomanBold52"
            >
              Hungry? We are open now..
            </Text>
            <div className="flex sm:flex-col flex-row font-poppins gap-6 items-center justify-center w-[70%] md:w-full">
              <Button
                className="common-pointer cursor-pointer font-semibold min-w-[232px] text-center text-xl"
                onClick={() => navigate("/menu")}
                shape="round"
                color="red_400"
                size="lg"
                variant="fill"
              >
                Order now
              </Button>
              <Button
                className="common-pointer cursor-pointer font-semibold min-w-[232px] text-center text-xl"
                onClick={() => navigate("/reservation")}
                shape="round"
                color="white_A700_7f"
                size="lg"
                variant="fill"
              >
                Reservation
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex font-poppins items-center justify-center mt-[120px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomepagePage;
