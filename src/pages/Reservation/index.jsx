import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const timeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const partysizeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ReservationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[120px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start max-w-[1240px] mx-auto md:px-5 w-full">
          <Navbar activeNav={"reservation"}/>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Img
              className="h-[657px] md:h-auto object-cover rounded-[20px]"
              src="images/img_rectangle150.png"
              alt="Rectangle150"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="md:text-5xl text-[70px] text-gray-900"
                size="txtOpenSansRomanBold70"
              >
                Book a table
              </Text>
              <div className="flex flex-col font-poppins gap-10 items-center justify-start mt-[60px] w-full">
                <SelectBox
                  className="border border-gray-400 border-solid text-left text-xl w-full"
                  placeholderClassName="text-gray-500"
                  indicator={
                    <Img
                      className="h-[21px] mr-[35px] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="date"
                  options={dateOptionsList}
                  isSearchable={false}
                  placeholder="Date"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                />
                <SelectBox
                  className="border border-gray-400 border-solid text-left text-xl w-full"
                  placeholderClassName="text-gray-500"
                  indicator={
                    <Img
                      className="h-[21px] mr-[35px] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="time"
                  options={timeOptionsList}
                  isSearchable={false}
                  placeholder="Time"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                />
                <SelectBox
                  className="border border-gray-400 border-solid text-left text-xl w-full"
                  placeholderClassName="text-gray-500"
                  indicator={
                    <Img
                      className="h-[21px] mr-[35px] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="partysize"
                  options={partysizeOptionsList}
                  isSearchable={false}
                  placeholder="Party size"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                />
              </div>
              <Button
                className="common-pointer cursor-pointer font-poppins font-semibold min-w-[475px] sm:min-w-full mt-10 rounded-[20px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                onClick={() => navigate("/enterdetailsreservation")}
                color="red_400"
                size="xl"
                variant="fill"
              >
                Book now
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ReservationPage;
