import { Button, Img, Text } from "components";
import React, { useState } from "react";
import { foodCategories } from "../../utils/data";
import Items from "./Items";
import Fade from "react-reveal/Fade";
import Pagination from "components/Pagination";

const PopularMenu = () => {
  const [selected, setSelected] = useState("All Categories");
  // const {data:dishes, isLoading, isError} = useGetDishesQuery();

  return (
    <div className="flex flex-col font-opensans md:gap-10 gap-[79px] items-center justify-start max-w-[1240px] mt-[133px] mx-auto md:px-5 w-full">
      <Fade bottom>
        <Text
          className="sm:text-[38px] md:text-[44px] text-[52px] text-gray-900"
          size="txtOpenSansRomanBold52"
        >
          Our Popular Menu
        </Text>
      </Fade>
      <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-full">
        <div className="flex sm:flex-col flex-row gap-7 items-center justify-between rounded-[16px] w-full">
          {foodCategories.map((category) => (
            <Fade bottom>
              <Button
                onClick={() => setSelected(category)}
                className={
                  category.toLowerCase() === selected.toLowerCase()
                    ? "cursor-pointer font-semibold min-w-[232px] border-2 hover:bg-red-600 duration-200 hover:drop-shadow-xl text-center text-xl"
                    : "cursor-pointer min-w-[192px] text-center hover:drop-shadow-xl hover:font-bold hover:border-gray-300 border-2 text-xl"
                }
                shape="round"
                color={
                  category.toLowerCase() === selected.toLowerCase()
                    ? "red_400"
                    : "gray_400_63"
                }
                size="lg"
                variant="fill"
              >
                {category}
              </Button>
            </Fade>
          ))}
        </div>
        <div className="flex flex-col gap-12 items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start rounded-[40px] w-full">
            <div className="md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <Items selected={selected} />
            </div>
          </div>

          {/* <--------------- Pagination ---------------> */}

          <Pagination postsPerPage={10} />
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;
