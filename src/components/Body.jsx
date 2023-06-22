import Cateogry from "./Cateogry";
import Carous from "./Carous";
import Content from "./Content";
import React from "react";

const Body = () => {
  return (
    <div className="w-full">
      <Cateogry />

      <Carous />

      <Content />
    </div>
  );
};
export default Body;
