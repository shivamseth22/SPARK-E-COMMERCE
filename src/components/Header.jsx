import { useState, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import ShopIcon from '@mui/icons-material/Shop';
import { useSelector } from "react-redux";
import { MdShop } from "react-icons/md";
import Badge from "@mui/material/Badge";

import React from "react";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  const navigate = useNavigate();

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex text-center justify-around  bg-blue-500 text-white sticky top-0 md:sm:bg-green-500 z-10">
      <h2 className="m-3 p-3 text-xl font-bold flex gap-7">
        <Link to="/">SPARK</Link>
        <Link to="/Shop">
          <MdShop className="text-4xl" />
        </Link>
      </h2>

      <div className="mt-2">
        <input
          className="h-10 p-3 m-3 w-80 text-black border-none ml-0"
          type="text"
          placeholder="Search for product,brands and more"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          type="submit"
          className="searchButton"
          onClick={() => navigate(`/search/${searchText}`)}
        >
          Search
        </button>
      </div>
      <ul className="flex m-6 text-center font-bold">
        <li
          className="px-6 py-2 bg-white text-blue-800 h-10 w-24 cursor-pointer font-bold"
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

        <li className="px-6 py-2">Become a Seller</li>
        <li className="px-6 py-2">More</li>

        {/* <span className="bg-white text-blue-600 h-4 w-4 rounded-full -mx-2 p-0"></span> */}
        <Link to="/Cart" className=" pl-2 py-2 ">
          <Badge badgeContent={cartItems.length} color="primary">
            <FaShoppingCart className="text-2xl " />
          </Badge>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
