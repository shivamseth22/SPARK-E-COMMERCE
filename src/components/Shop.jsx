import useShop from "../utils/useShop";
import React from "react";
import { Rating } from "@mui/material";
import {Link} from "react-router-dom";
const Shop = () => {
  const samanData = useShop();
  console.log(samanData);
  return (
    <div className="flex flex-wrap justify-evenly m-auto gap-6 ">
      {samanData &&
        samanData?.map((item) => (
            <Link to="">
          <div className="h-72 w-72 overflow-hidden  gap-4 shadow-2xl hover:scale-105 ease-in duration-300">
            <div className="h-1/2 flex justify-center ">
              <img className="h-full " src={item.thumbnail} />
            </div>
            <div className="h-1/2 px-5">
              <h2 className="font-bold">{item.title}</h2>
              <h2 className=" line-clamp-1">{item.description}</h2>

              <h1 className="">
                <Rating
                  name="read-only"
                  value={item.rating}
                  precision={0.5}
                  readOnly
                />
              </h1>
              <h1 className="text font-bold ">
                <span>&#8377;{item.price * 40}</span>{" "}
                <span className="line-through  text-gray-500">
                  &#8377;
                  {item.price * 70}
                </span>{" "}
                <span className=" text-green-600">
                  {item.discountPercentage} % Off
                </span>{" "}
              </h1>
            </div>
          </div>
          </Link>
        ))}
    </div>
  );
};
export default Shop;
