import React from "react";

export const ErrorMessage = ({ errors = [], className = "" }) => {
  return (
    errors?.length > 0 && (
      <div
        className={`enter h-10 max-w-7xl mx-auto p-2 text-red-700 bg-red-100 col-span-12 my-2 ${className}`}
      >
        {errors.join(", ")}
      </div>
    )
  );
};
