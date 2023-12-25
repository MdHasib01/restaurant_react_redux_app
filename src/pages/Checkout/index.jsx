import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Radio,
  RadioGroup,
  SelectBox,
  Text,
  TextArea,
} from "components";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

const selectOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CheckoutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start w-full">
          <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1240px] mx-auto md:px-5 w-full">
          <Navbar activeNav={"orderonline"}/>
            <div className="flex md:flex-col flex-row font-opensans md:gap-10 gap-[99px] items-start justify-start w-[87%] md:w-full">
              <Button
                className="flex h-[50px] items-center justify-center mb-[843px] w-[50px]"
                shape="circle"
                color="gray_900"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-4"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </Button>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[46px] md:px-10 sm:px-5 rounded-[16px] shadow-bs3 w-[85%] md:w-full">
                <div className="flex flex-col gap-8 items-center justify-start w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                    size="txtOpenSansRomanBold36"
                  >
                    Checkout
                  </Text>
                  <div className="flex flex-col font-poppins gap-8 items-center justify-start w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-start rounded-lg w-full">
                      <Text
                        className="text-gray-900 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Shipping address
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-center justify-between rounded-lg w-full">
                        <Input
                          name="Subject"
                          placeholder="1131 Ogden Ave, Bronx, NY 10452, Amerika Serikat"
                          className="!placeholder:text-gray-900 !text-gray-900 p-0 text-base text-left w-full"
                          wrapClassName="border border-gray-400 border-solid sm:flex-1 sm:w-full"
                          shape="round"
                        ></Input>
                        <Button
                          className="common-pointer cursor-pointer min-w-[166px] rounded-lg text-center text-lg"
                          onClick={() => navigate("/shippingaddress")}
                          color="indigo_300"
                          size="sm"
                          variant="fill"
                        >
                          Change
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Order data
                      </Text>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-6 items-center justify-start w-full">
                          <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                            <Input
                              name="Emailaddress"
                              placeholder="First name"
                              className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                              wrapClassName="border border-gray-400 border-solid sm:flex-1 sm:w-full"
                              type="text"
                              shape="round"
                            ></Input>
                            <Input
                              name="Emailaddress One"
                              placeholder="Last name"
                              className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                              wrapClassName="border border-gray-400 border-solid sm:flex-1 sm:w-full"
                              type="text"
                              shape="round"
                            ></Input>
                          </div>
                          <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                            <div className="bg-white-A700 border border-gray-400 border-solid flex flex-row gap-4 items-center justify-start p-3 rounded-lg">
                              <SelectBox
                                className="mb-0.5 ml-1 w-[15%] sm:w-full"
                                indicator={
                                  <Img
                                    className="h-[11px] mr-[0] w-[11px]"
                                    src="images/img_arrowdown.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="groupNinetyFour"
                                isSearchable={false}
                                options={selectOptionsList}
                              />
                              <Text
                                className="text-base text-gray-500"
                                size="txtPoppinsRegular16"
                              >
                                Phone number
                              </Text>
                            </div>
                            <Input
                              name="Emailaddress Two"
                              placeholder="Email address"
                              className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                              wrapClassName="border border-gray-400 border-solid md:flex-1 md:w-full"
                              type="email"
                              shape="round"
                            ></Input>
                          </div>
                          <TextArea
                            className="bg-white-A700 border border-gray-400 border-solid leading-[normal] pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-[22px] rounded-lg text-base placeholder:text-gray-500 text-gray-500 text-left w-full"
                            name="Massage"
                            placeholder="Message"
                          ></TextArea>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-gray-900 text-lg"
                          size="txtPoppinsMedium18"
                        >
                          Payment method
                        </Text>
                      </div>
                      <RadioGroup
                        className="flex flex-col w-full"
                        name="paymentmethod"
                      >
                        <RadioGroup
                          className="flex flex-1 w-full"
                          name="radiogroupcashondeliver"
                        >
                          <Radio
                            value="CashOnDelivery"
                            className="leading-[normal] sm:pr-5 text-gray-900 text-left text-lg"
                            inputClassName="border border-gray-900 border-solid h-6 mr-[5px] w-6"
                            checked={false}
                            name="radiogroupcashondeliver"
                            label="Cash On Delivery"
                            id="CashOnDelivery"
                          ></Radio>
                          <Radio
                            value="BCAVirtualAccount"
                            className="leading-[normal] ml-4 sm:pr-5 text-gray-900 text-left text-lg"
                            inputClassName="border border-gray-900 border-solid h-6 mr-[5px] w-6"
                            checked={false}
                            name="radiogroupcashondeliver"
                            label="BCA Virtual Account"
                            id="BCAVirtualAccount"
                          ></Radio>
                        </RadioGroup>
                        <RadioGroup
                          className="flex flex-1 mt-6 w-full"
                          name="radiogroupcreditcard"
                        >
                          <Radio
                            value="CreditCard"
                            className="leading-[normal] sm:pr-5 text-gray-900 text-left text-lg"
                            inputClassName="border border-gray-900 border-solid h-6 mr-[5px] w-6"
                            checked={false}
                            name="radiogroupcreditcard"
                            label="Credit Card"
                            id="CreditCard"
                          ></Radio>
                          <Radio
                            value="TransferBank"
                            className="leading-[normal] ml-4 sm:pr-5 text-gray-900 text-left text-lg"
                            inputClassName="border border-gray-900 border-solid h-6 mr-[5px] w-6"
                            checked={false}
                            name="radiogroupcreditcard"
                            label="Transfer Bank"
                            id="TransferBank"
                          ></Radio>
                        </RadioGroup>
                      </RadioGroup>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[722px] md:min-w-full rounded-[12px] text-center text-xl"
                      color="red_400"
                      size="md"
                      variant="fill"
                    >
                      Order now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
