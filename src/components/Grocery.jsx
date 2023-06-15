import React from "react";
import ItemCards from "./ItemCards";

const Grocery = () => {
  return (
    <div className="flex flex-wrap">
      <ItemCards category="groceries" />
    </div>
  );
};

export default Grocery;
