import React from "react";
import { useParams } from "react-router-dom";
import PinkyData from "./PinkyData";

const DataCategory = () => {
  const { dataId } = useParams();

  return (
    <div className="flex flex-wrap">
      <PinkyData cat={dataId} />
    </div>
  );
};

export default DataCategory;
