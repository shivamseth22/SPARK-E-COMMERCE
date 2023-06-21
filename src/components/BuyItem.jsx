import React from "react";
import { Rating } from "@mui/material";
const BuyItem = ({
  thumbnail,
  title,
  description,
  price,
  rating,
  discountPercentage,
}) => {
  return (
    <>
        <div className="flex p-8  sm:flex-col sm:items-center  xsm:flex-col md:flex-col items-center sm:300px overflow-hidden">
          <div className="flex w-60 bg-red-200 items-center">
            <img
              src={thumbnail}
              className="shadow-2xl flex justify-items-center w-fit"
            />
          </div>
          <div className="mx-3 flex  flex-col ">
            <h2 className="font-bold ">{title}</h2>
            <h2 className="flex flex-wrap">{description}</h2>

            <h1 className="">
              <Rating
                name="read-only"
                value={rating}
                precision={0.5}
                readOnly
              />
            </h1>

            <h1 className=" font-bold ">
              <span className="i-discount text-xl">&#8377;{price * 40}</span>{" "}
              <span className="line-through  text-gray-500">
                {price * 70}
              </span>{" "}
              <span className=" text-green-600">
                {discountPercentage} % Off
              </span>{" "}
            </h1>
          </div>
      </div>
    </>
  );
};

export default BuyItem;
