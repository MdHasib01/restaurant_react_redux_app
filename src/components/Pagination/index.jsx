import { Button, Img } from "components";
import {
  useGetAllDishesQuery,
  useGetDishesQuery,
} from "features/menus/menuApi";
import { selectPage } from "features/menus/paginationSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Pagination = ({ postsPerPage, paginate }) => {
  const { data: dishes, isLoading, isError } = useGetAllDishesQuery();
  const pageNumber = useSelector((state) => state.pagination);
  const dispatch = useDispatch();
  const pageNumbers = [];
  const totalPosts = dishes?.length;
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-row font-inter gap-2.5 items-center justify-center  md:w-full">
      {pageNumber > 3 && (
        <Img
          className="h-[25px] w-[25px] bg-gray-200 p-[5px] hover:bg-gray-400 rounded-full"
          src="images/img_arrowleft_black_900.svg"
          alt="arrowleft"
        />
      )}
      <div className="flex flex-row gap-2.5 items-center justify-start w-[78%]">
        {pageNumbers.map((number, index) => {
          if (index < 3) {
            return index === pageNumber ? (
              <Button
                className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded text-center text-sm tracking-[-0.50px] w-[35px]"
                color="gray_900"
                size="xs"
                variant="fill"
              >
                {number}
              </Button>
            ) : (
              <Button
                className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded text-center text-sm tracking-[-0.50px] w-[35px] bg-gray-200 hover:bg-gray-400"
                size="xs"
                variant="fill"
                onClick={() => dispatch(selectPage(3))}
              >
                {number}
              </Button>
            );
          }
        })}

        {pageNumbers.length > 3 && (
          <Button
            className="flex h-[35px] items-center hover:bg-gray-400 justify-center rounded w-[35px]"
            color="gray_200"
            size="xs"
            variant="fill"
          >
            <Img className="h-5" src="images/img_user.svg" alt="user" />
          </Button>
        )}
      </div>
      {pageNumber < 3 && (
        <Img
          className="h-[25px] w-[25px] bg-gray-200 p-[5px] hover:bg-gray-400 rounded-full"
          src="images/img_arrowright.svg"
          alt="arrowright"
        />
      )}
    </div>
  );
};

export default Pagination;
