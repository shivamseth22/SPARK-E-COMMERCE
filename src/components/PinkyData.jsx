import React from 'react';
import useCatproduct from '../utils/useCatproduct';
import { Link } from 'react-router-dom';
import { Rating } from "@mui/material";
const PinkyData = ({cat}) => {
    const pinkyData = useCatproduct({cat});
  return (
    <div className='flex justify-between  '>
        {pinkyData &&
          pinkyData?.map((slip) => (
            <Link
              to={`/product/${slip.id}`}
              key={slip.id}
              className="place-items-center hover:scale-105 duration-300 border-2 h-72 w-[20%] m-2 shadow-lg p-2 "
            >
              <div className="flex h-1/2 justify-center ">
                <img src={slip.thumbnail} className="h-full" />
              </div>
              <div className="h-1/2">
                <h2 className="font-bold">{slip.title}</h2>
                <h2 className=" line-clamp-1">{slip.description}</h2>
                <h1 className="">
                  <Rating
                    name="read-only"
                    value={slip.rating}
                    precision={0.5}
                    readOnly
                  />
                </h1>
                <h1 className="text font-bold  ">
                  <span>&#8377;{slip.price * 40}</span>{" "}
                  <span className="line-through  text-gray-500">
                    &#8377;
                    {slip.price * 70}
                  </span>{" "}
                  <span className=" text-green-600">
                    {slip.discountPercentage} % Off
                  </span>{" "}
                </h1>
              </div>
            </Link>
          ))}
    </div>
  )
}

export default PinkyData