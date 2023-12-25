import React, { useEffect, useState } from "react";

import { Button, Img, Input, Text } from "components";
import { useNavigate } from "react-router";
import { useRegisterMutation } from "features/auth/authApi";

const SignUpPage = () => {
  const [register, { data, isLoading, error: responseError }] =
    useRegisterMutation();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  console.log("user:", user);
  useEffect(() => {
    if (responseError?.data) {
      setError(responseError.data);
    }
    if (data?.accessToken && data?.user) {
      navigate("/");
    }
  }, [data, responseError, navigate]);

  const handleRegister = () => {
    setError("");

    if (user.confirmPassword !== user.password) {
      setError("Passwords do not match");
    } else {
      register({
        name: user.name,
        email: user.email,
        password: user.password,
      });
    }
  };

  return (
    <>
      <div className="bg-red-50 flex flex-col font-inter items-start justify-start mx-auto md:px-10 sm:px-5 px-[90px] py-[72px] w-auto sm:w-full md:w-full">
        <div className="flex md:flex-col flex-row gap-[59px] items-center justify-start max-w-[600px] mx-auto w-full">
          {/* <div className="flex flex-1 flex-col md:gap-10 gap-[84px] items-center justify-start w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-bluegray-900 text-center w-full"
              size="txtInterBold28"
            >
              <>Don&#39;t worry about overwhelming tasks</>
            </Text>
            <Img
              className="h-[597px] w-[493px]"
              src="images/img_group7.svg"
              alt="groupSeven"
            />
          </div> */}
          <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start md:px-10 sm:px-5 px-[74px] py-[66px] rounded-[20px] shadow-bs1 w-full">
            <div className="flex flex-col gap-12 items-center justify-start w-full">
              <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-bluegray-800 text-center sm:text-xl w-full"
                  size="txtInterBold24Bluegray800"
                >
                  Sign up to <span className="text-orange-500">F</span>oodio
                  <span className="text-orange-500">.</span>
                </Text>
                <div className="flex flex-col gap-[49px] items-center justify-start w-[452px] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[42px] items-center justify-start w-full"></div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-7 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Input
                          name="name"
                          value={user.name}
                          onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                          }
                          placeholder="Full name"
                          className="p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pl-5 pr-[35px] py-[17px] rounded w-full"
                          type="text"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-5 mr-4"
                              src="images/img_mail_bluegray_800.svg"
                              alt="mail"
                            />
                          }
                        ></Input>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Input
                          name="email"
                          placeholder="Email"
                          value={user.email}
                          onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                          }
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
                      <div className="flex flex-col items-start justify-start w-full">
                        <Input
                          name="password"
                          value={user.password}
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
                          placeholder="password"
                          className="p-0 placeholder:text-bluegray-400 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pb-[18px] pt-[15px] px-5 rounded w-full"
                          prefix={
                            <Img
                              className="mt-0.5 mb-auto h-5 mr-4"
                              src="images/img_lock.svg"
                              alt="lock"
                            />
                          }
                          suffix={
                            <Img
                              className="mt-0.5 mb-auto h-5 ml-[35px]"
                              src="images/img_eye.svg"
                              alt="eye"
                            />
                          }
                        ></Input>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Input
                          name="confirmPassword"
                          value={user.confirmPassword}
                          onChange={(e) =>
                            setUser({
                              ...user,
                              confirmPassword: e.target.value,
                            })
                          }
                          placeholder="confirm password"
                          className="p-0 placeholder:text-bluegray-400 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pb-[18px] pt-[15px] px-5 rounded w-full"
                          prefix={
                            <Img
                              className="mt-0.5 mb-auto h-5 mr-4"
                              src="images/img_lock.svg"
                              alt="lock"
                            />
                          }
                          suffix={
                            <Img
                              className="mt-0.5 mb-auto h-5 ml-[35px]"
                              src="images/img_eye.svg"
                              alt="eye"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <Button
                  className="bg-orange-300 cursor-pointer font-bold py-[19px] rounded-[28px] text-center text-sm text-white-A700 w-full"
                  onClick={handleRegister}
                >
                  SIGN UP
                </Button>
                <div className="text-center">
                  <div>
                    <Text
                      className="text-bluegray-800 text-center text-sm w-auto"
                      size="txtInterRegular14Bluegray800"
                    >
                      You have an account already?
                    </Text>
                    <Text
                      className="text-orange-300 text-center cursor-pointer text-sm underline w-full"
                      size="txtInterMedium14Deeporange300"
                      onClick={() => navigate("/login")}
                    >
                      Sign in
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
