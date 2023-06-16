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
        <div className="flex p-5">
          <div className="w-80 ">
            <img
              src={thumbnail}
              className="shadow-2xl flex justify-items-center "
            />
          </div>
          <div className="mx-10 flex  flex-col gap-3">
            <h2 className="font-bold text-xl">{title}</h2>
            <h2>{description}</h2>

            <h1 className="">
              <Rating
                name="read-only"
                value={rating}
                precision={0.5}
                readOnly
              />
            </h1>

            <h1 className="text-3xl font-bold ">
              <span className="i-discount">&#8377;{price * 40}</span>{" "}
              <span className="line-through text-2xl text-gray-500">
                {price * 70}
              </span>{" "}
              <span className="text-3xl text-green-600">
                {discountPercentage} % Off
              </span>{" "}
            </h1>
          </div>
      </div>
    </>
  );
};

export default BuyItem;
