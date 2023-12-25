import { Button, Img, RatingBar, Text } from "components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../../features/cart/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const Item = ({ dish }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(cart);
  return (
    <div className="bg-white-A700 hover:-translate-y-1 duration-200 hover:drop-shadow-xl flex flex-1 flex-col gap-6 items-center justify-center p-[30px] sm:px-5 rounded-[40px] w-full">
      <Img
        className="h-[270px] hover:scale-110 duration-200 md:h-auto mt-1.5 object-cover w-[270px]"
        src="images/img_pngitem41084.png"
        alt="PngItem41084"
      />
      <div className="flex flex-col items-center justify-end mb-1.5 pt-[17px] w-full">
        <div className="flex flex-col gap-[18px] items-center justify-start w-full">
          <Text
            className=" text-center text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
            size="txtPoppinsSemiBold30"
          >
            {dish.food_name}
          </Text>
          <Text
            className="leading-[200.00%] text-center text-gray-800 text-sm w-full"
            size="txtPoppinsRegular14"
          >
            {dish.description}
          </Text>
        </div>
        <div className="flex flex-row items-center justify-center mt-3.5 rounded-[1.76px] w-[49%] md:w-full">
          <RatingBar
            className="flex justify-between w-[140px]"
            value={dish.rating}
            starCount={dish.rating}
            activeColor="#f54748"
            size={24}
          ></RatingBar>
        </div>
        <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] rounded-lg w-[95%] md:w-full">
          <Text
            className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
            size="txtPoppinsSemiBold25"
          >
            ${dish.price}
          </Text>
          <Button
            className="common-pointer cursor-pointer duration-100 hover:bg-[#fff] hover:text-red-400 hover:border-red-400 hover:border-2 border-2 font-semibold min-w-[158px] rounded-lg text-base text-center"
            onClick={() => {
              toast.success(`${dish.food_name} added to Cart!`);
              dispatch(addToCart(dish));
            }}
            color="red_400"
            size="md"
            variant="fill"
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Item;
