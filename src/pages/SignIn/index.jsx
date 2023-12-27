import React, { useEffect, useState } from "react";

import { Button, Img, Input, Text } from "components";
import { useNavigate } from "react-router";
import { useLoginMutation } from "features/auth/authApi";
import toast from "react-hot-toast";

const SigninPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const [error, setError] = useState("");

  const [login, { data, isLoading, error: responseError }] = useLoginMutation();

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
      toast.error(responseError.data);
    }
    if (data?.accessToken && data?.user) {
      toast.success("Logged In Successfully!");
      navigate("/");
    }
  }, [data, responseError, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    login({
      email: user.email,
      password: user.password,
    });
  };
  return (
    <>
      <div className="bg-red-50 flex flex-col font-inter items-start justify-start mx-auto md:px-10 sm:px-5 px-[90px] py-[106px] w-auto sm:w-full md:w-full">
        <div className="flex md:flex-col flex-row gap-[59px] items-center justify-start max-w-[600px] mx-auto w-full">
          {/* <div className="flex flex-1 flex-col md:gap-10 gap-[84px] items-center justify-start w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-bluegray-900 text-center w-full"
              size="txtInterBold28"
            >
              Manage your work more effectively
            </Text>
            <Img
              className="h-[483px] w-full"
              src="images/img_workingtime.svg"
              alt="workingtime"
            />
          </div> */}
          <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start md:px-10 sm:px-5 px-[74px] py-[66px] rounded-[20px] shadow-bs1 w-full">
            <div className="flex flex-col gap-12 items-center justify-start w-full">
              <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-bluegray-800 text-center sm:text-xl w-full"
                  size="txtInterBold24Bluegray800"
                >
                  Login to <span className="text-orange-500">F</span>oodio
                  <span className="text-orange-500">.</span>
                </Text>
                <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-[42px] items-center justify-start w-full"></div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-7 items-start justify-start w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-bluegray-800 text-sm w-full"
                          size="txtInterMedium14Bluegray800"
                        >
                          Email
                        </Text>
                        <Input
                          name="email"
                          value={user.email}
                          onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                          }
                          placeholder="xyz@gmail.com"
                          className="p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pl-5 pr-[35px] py-[17px] rounded w-full"
                          type="email"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-5 mr-4"
                              src="images/img_mail_bluegray_800.svg"
                              alt="mail"
                            />
                          }
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-bluegray-800 text-sm w-full"
                          size="txtInterMedium14Bluegray800"
                        >
                          Password
                        </Text>
                        <Input
                          name="email"
                          value={user.password}
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
                          placeholder="************"
                          className="p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pb-[18px] pl-5 pr-[35px] pt-[15px] rounded w-full"
                          prefix={
                            <Img
                              className="mt-0.5 mb-auto h-5 mr-4"
                              src="images/img_lock.svg"
                              alt="lock"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start w-full">
                      {/* <CheckBox
                        className="font-medium sm:pr-5 text-bluegray-800 text-left text-sm"
                        inputClassName="flex-1 mr-[5px]"
                        name="remember"
                        id="remember"
                        label="Remember"
                      ></CheckBox> */}
                      <Text
                        className="flex-1 text-bluegray-800 text-right text-sm underline w-auto"
                        size="txtInterMedium14Bluegray800"
                      >
                        Forgot password?
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <Button
                  className="bg-orange-300 hover:drop-shadow-xl duration-200 hover:border-orange-300 hover:text-orange-300 hover:bg-[#fff] border-2 cursor-pointer font-bold py-[19px] rounded-[28px] text-center text-sm text-white-A700 w-full"
                  onClick={handleLogin}
                >
                  LOGIN
                </Button>
                <div className="flex flex-row gap-1 items-start justify-center w-full">
                  <Text
                    className="text-bluegray-800 text-sm w-auto"
                    size="txtInterMedium14Bluegray800"
                  >
                    You don’t have an account yet?
                  </Text>
                  <Text
                    className="text-orange-300 text-sm cursor-pointer underline w-[51px]"
                    size="txtInterMedium14Deeporange300"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
