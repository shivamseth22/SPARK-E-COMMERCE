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
      <div className="">
        <div className="flex m-5  p-10 w-3/4 ">
          <div className="">
            <img
              src={thumbnail}
              className="h-56 p-3 shadow-2xl flex justify-items-center hover:scale-105 ease duration-[0.2s]"
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
            
            <h1 className="text-5xl font-bold ">
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

        
      </div>
    </>
  );
};

export default BuyItem;
