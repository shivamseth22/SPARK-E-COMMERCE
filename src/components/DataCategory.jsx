import React from "react";
import { useParams } from "react-router-dom";
import PinkyData from "./PinkyData";

const DataCategory = () => {
  const { dataId } = useParams();

  return (
    <div className="">
      <PinkyData category={dataId} className="" />
    </div>
  );
};

export default DataCategory;
