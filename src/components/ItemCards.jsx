import React, { useEffect, useState } from "react";
import useCatproduct from "../utils/useCatproduct";
import { Link } from "react-router-dom";

const ItemCards = ({ category }) => {

  const pinkyData = useCatproduct({category});


  // console.log(pinkyData);
  return (
    <>
      {pinkyData &&
        pinkyData?.map((slip) => (
         <Link to={`/product/${slip.id}`}  key={slip.id}className="h-max  p-5 flex-wrap w-1/4"> 
         <div >
            <img src={slip.thumbnail} className="h-40 " />
            <h2>{slip.title}</h2>
            {/* <h3>{slip.description}</h3>
            <h3>{slip.rating}</h3> */}
            <h3>Price {slip.price}$</h3>
          </div>
          </Link>
        ))}
    </>
  );
};

export default ItemCards;
