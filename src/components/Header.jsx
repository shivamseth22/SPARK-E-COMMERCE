import { useState} from "react";
import { FaShoppingCart } from "react-icons/fa";
import {BiSearch} from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdShop } from "react-icons/md";
import Badge from "@mui/material/Badge";

import {GiHamburgerMenu} from "react-icons/gi";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

const Header = () => {
  const [searchText, setSearchText] = useState(" ");
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  

  const navigate = useNavigate();

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex text-center justify-around h-20 items-center  bg-slate-800 text-white sticky top-0 shadow-xl z-10  sm:flex sm:px-10 overflow-hidden">
      <h2 className="items-center font-bold flex gap-7 text-2xl">
       <div>
       <GiHamburgerMenu/>
       </div>
        <Link to="/" className="xsm:hidden">SPARK</Link>
        <Link to="/Shop" className="sm:hidden xsm:hidden">
          <MdShop className="" />
        </Link>
      </h2>

      <div className="flex items-center ">
        <input
          className="h-10 text-black border-none w-96 md:w-60 sm:w-52 xsm:w-40  "
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
      <ul className="flex text-center justify-between font-bold gap-5 text-lg ">
        <li
          className="flex items-center justify-center bg-white text-slate-800 h-10 w-24 cursor-pointer font-bold sm:hidden xsm:hidden"
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

        <li className="flex items-center md:hidden sm:hidden xsm:hidden">Become a Seller</li>
        <li className="flex items-center md:hidden sm:hidden xsm:hidden">More</li>
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
