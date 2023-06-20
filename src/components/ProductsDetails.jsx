import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import SellIcon from "@mui/icons-material/Sell";
import TextField from "@mui/material/TextField";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import { FaRupeeSign } from "react-icons/fa";
const ProductsDetails = () => {
  const { pid } = useParams();

  const [thing, setThing] = useState({});

  // console.log(thing);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  async function getProductInfo() {
    const data = await fetch(`https://dummyjson.com/products/${pid}`);
    const json = await data.json();
    setThing(json);
  }

  return !thing ? (
    <Shimmer />
  ) : (
    <div className="flex box-border m-10 p-5 sm:flex sm:flex-col sm:items-center sm:text-sm xsm:flex xsm:flex-col xsm:items-center xsm:text-xs ">
      <div className=" ">
        <div className="h-90 w-90 m-10 ">
          <img src={thing.thumbnail} className="shadow-2xl" />
        </div>
        <div className=" flex justify-evenly">
          {
            <button
              className="bg-orange-400 p-3 w-1/3 "
              onClick={() => handleAddItem(thing)}
            >
              ADD TO CART
            </button>
          }

          {
            <button
              className="bg-orange-400 p-3 w-1/3"
              onClick={() => handleAddItem(thing)}
            >
              BUY NOW
            </button>
          }
        </div>
      </div>
      <div className="flex flex-col justify-between p-5 gap-2 mt-5 ">
        <h1 className="uppercase text-gray-500">{thing.category}</h1>
        <h1 className="font-bold text-2xl sm:text-lg xsm:text-sm">
          {thing.title}
        </h1>

        <h1 className="text-5xl font-bold sm:text-2xl xsm:text-2xl">
          <span className="i-discount">&#8377;{thing.price * 40}</span>{" "}
          <span className="line-through text-2xl text-gray-500">
            &#8377;{thing.price * 70}
          </span>{" "}
          <span className="text-3xl text-green-600 sm:text-xl xsm:text-sm ">
            {thing.discountPercentage} % Off
          </span>{" "}
        </h1>
        <h1 className="">
          <Rating
            name="read-only"
            value={thing.rating}
            precision={0.5}
            // readOnly
          />
        </h1>
        <div className="flex flex-col justify-between gap-2">
          <h3 className="">Available Offers</h3>
          <div className="bank-offer flex flex-col justify-between gap-2 ">
            <div className="offer-sell">
              <SellIcon className="text-green-600" />
              <b>Partner Offer : </b>Purchase now & get a surprise cashback
              coupon for January / February 2023
            </div>
            <div className="offer-sell">
              <SellIcon className="text-green-600" />
              <b>Partner Offer : </b>Sign up for BLOOM and get BLOOM Gift Card
              worth up to ₹500*
            </div>
            <div className="offer-sell">
              <SellIcon className="text-green-600" />
              <b>Bank Offer : </b>Flat ₹100 Instant Cashback on Paytm Wallet.
              Min Order ₹1000. Valid once per User
            </div>
            <div className="offer-sell">
              <SellIcon className="text-green-600" />
              <b>Bank Offer : </b>5% Cashback on Axis Bank Card
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <h3>
            <b>Product Description</b>
          </h3>
        </div>
        <div className="flex flex-col gap-3">
          {thing.description}

          <div className="flex flex-col gap-5">
            <h3>
              <LocationOnIcon className="text-green-600" />
              Location
            </h3>
          </div>
          <Box>
            <TextField
              id="standard-basic"
              label="Check your location"
              variant="standard"
              type="number"
            />
            <button className="bg-orange-500 px-8 py-2">Check</button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
