import { useSelector } from "react-redux";
import BuyItem from "./BuyItem";
import React from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className=" flex flex-row gap-2">
      <div className="">
        {cartItems.map((item) => (
          <BuyItem {...item} key={item.id} />
        ))}
      </div>

      <div>
        <h2>Subtotal Cart</h2>
        <div>
          <h2>price</h2>
          <h2>xxx</h2>
        </div>

        <div>
          <h2>Discount</h2>
          <h2>xxxx</h2>
        </div>

        <div>
          <h2>Total</h2>
          <h2>xxxx</h2>
        </div>
      </div>
    </div>
  );
};
export default Cart;
