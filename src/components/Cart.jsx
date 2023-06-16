import { useSelector } from "react-redux";
import BuyItem from "./BuyItem";
import React from "react";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return !cartItems.length ? (
    <EmptyCart/>
  ) : (
    <div className=" flex">
      <div className="flex  flex-col ">
        {cartItems.map((item) => (
          <BuyItem {...item} key={item.id} />
        ))} 
      </div>

      <div className="flex flex-col gap-10 w-1/3 h-1/3 items-center m-5 p-10 sticky top-32 shadow-2xl float-right">
          <h2 className="font-bold text-2xl">SUBTOTAL</h2>
        <div className="flex flex-col gap-8">
        <div className="flex gap-40">
          <h2>price</h2>
          <h2>xxx</h2>
        </div>

        <div className="flex gap-40">
          <h2>Discount</h2>
          <h2>xxxx</h2>
        </div>

        <div className="flex gap-40 font-bold ">
          <h2>Total</h2>
          <h2>xxxx</h2>
        </div>
        <button className="bg-yellow-400 p-4">Proceed To Pay</button>
        </div>
      </div>
      
    </div>
  );
};
export default Cart;
