import { ErrorMessage } from "components/ErrorMessage";
import LoadingItem from "components/LoadingItem/index";
import { useGetDishesQuery } from "features/menus/menuApi";
import React from "react";
import Item from "./Item";
import { Fade } from "react-reveal";

const Items = ({ selected }) => {
  const { data: dishes, isLoading, isError } = useGetDishesQuery();
  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <>
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <ErrorMessage errors={["There was an error"]} />;
  }

  if (!isLoading && !isError && dishes?.length === 0) {
    content = <ErrorMessage errors={["No Deshes found!"]} />;
  }

  if (!isLoading && !isError && dishes?.length > 0) {
    content = dishes
      .filter((dsh) =>
        selected.toLowerCase() === "All Categories".toLowerCase()
          ? dsh
          : dsh.category.toLowerCase() === selected.toLowerCase()
      )
      .map((dish) => (
        <Fade bottom>
          <Item key={dish.id} dish={dish} />
        </Fade>
      ));
  }

  return content;
};

export default Items;
