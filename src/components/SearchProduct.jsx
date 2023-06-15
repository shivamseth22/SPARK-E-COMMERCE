import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
const SearchProduct = () => {
  const [filterData, setFilterData] = useState(null);

  const { id } = useParams();

  const getSearchdata = async () => {
    const data = await fetch(`https://dummyjson.com/products/search?q=${id}`);
    const json = await data.json();
    setFilterData(json.products);
    console.log(json.products);
  };

  useEffect(() => {
    getSearchdata();
  }, [id]);

  return (
    <div className="">
      {filterData &&
        filterData.map((all) => (
          <div className="flex gap-10 box-border m-10 p-5 ">
            <div className="h-72">
              <img src={all.thumbnail} className="max-h-full shadow-2xl" />
            </div>
            <div className="flex  flex-col gap-5">
              <h1 className="font-bold text-gray-600">{all.title}</h1>
              <h1 className="">{all.description}</h1>
              <h1 className="">
                <Rating
                  name="read-only"
                  value={all.rating}
                  precision={0.5}
                  readOnly
                />
                <h1 className="text-5xl font-bold ">
                  <span className="i-discount">&#8377;{all.price * 40}</span>{" "}
                  <span className="line-through text-2xl text-gray-500">
                    {all.price * 70}
                  </span>{" "}
                  <span className="text-3xl text-green-600">
                    {all.discountPercentage}% Off
                  </span>{" "}
                </h1>
              </h1>
              <h1>Save extra with <span className="font-bold">No Cost EMI</span></h1>
              <h1 className="font-bold">Free delhivery!!!</h1>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchProduct;
