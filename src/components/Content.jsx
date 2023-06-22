import ItemCards from "./ItemCards";
import React from "react";

const list = [
  "smartphones",
  "sunglasses",
  "furniture",
  "mens-shoes",
  "home-decoration",
  "mens-shirts",
  "laptops",
  "lighting",
];

const Content = () => {


 
  return (
    <div className="flex flex-col justify-between gap-10 w-full">
      {list.map((item, index) => (
       <>
       
        <ItemCards category={item} key={index} />
       </>
      ))}
    </div>
  );
};
export default Content;
