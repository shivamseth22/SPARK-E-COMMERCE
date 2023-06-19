import { useState} from "react";
import { FaShoppingCart } from "react-icons/fa";
import {BiSearch} from "react-icons/Bi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdShop } from "react-icons/md";
import Badge from "@mui/material/Badge";


import React from "react";

const Header = () => {
  const [searchText, setSearchText] = useState(" ");
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  

  const navigate = useNavigate();

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex text-center justify-around h-20 items-center  bg-blue-500 text-white sticky top-0 shadow-xl z-10 lg:bg-slate-800  md:bg-slate-600 sm:bg-red-400 none ">
      <h2 className="items-center font-bold flex gap-7 text-2xl">
        <Link to="/">SPARK</Link>
        <Link to="/Shop">
          <MdShop className="" />
        </Link>
      </h2>

      <div className="flex items-center md:bg-slate-600">
        <input
          className="h-10 p-3  text-black border-none  lg:w-80 "
          type="text"
          placeholder="Search for product,brands and more"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <span className="inline-flex  justify-center">
        <BiSearch onClick={() => navigate(`/search/${searchText}`)} className=" bg-white text-slate-800 h-10 w-10 p-2 cursor-pointer"/>
        </span>
      </div>
      <ul className="flex text-center justify-between font-bold gap-5 text-lg">
        <li
          className="flex items-center justify-center bg-white text-slate-800 h-10 w-24 cursor-pointer font-bold"
          onClick={() => {
            if (isLoggedIn === "Login") {
              setIsLoggedIn("Logout");
              navigate("/login");
            } else {
              setIsLoggedIn("Login");
              navigate("/");
            }
          }}
        >
          {isLoggedIn}
        </li>

        <li className="flex items-center ">Become a Seller</li>
        <li className="flex items-center ">More</li>
        <Link to="/Cart" className=" flex items-center">
          <Badge badgeContent={cartItems.length} color="secondary">
            <FaShoppingCart className="" />
          </Badge>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
