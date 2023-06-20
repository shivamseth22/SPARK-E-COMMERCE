import React from "react";
import useCatproduct from "../utils/useCatproduct";
import { Link } from "react-router-dom";

import PinkyData from "./PinkyData";

const ItemCards = ({ category }) => {
  return (
    <>
      <div className="flex w-full justify-around items-center ">
        <div className="flex flex-col  w-[16%] justify-center  shadow-md  ">
          <div className="w-full flex flex-col items-center">
          <h1 className="text-3xl pt-5">Best Of</h1>
          <h1 className="text-3xl pb-6 capitalize text-center">{category}</h1>
          <Link to={`/category/${category}`} className="">
            <button className=" w-32 h-10  bg-slate-800  text-white font-bold">
              Veiw All
            </button>
          </Link>

          <img
            className="h-1/2"
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
          />
          </div>
        </div>
       <div className="w-[80%] overflow-auto">
        <PinkyData cat={category}  />
       </div>
        
      </div>
    </>
  );
};

export default ItemCards;
