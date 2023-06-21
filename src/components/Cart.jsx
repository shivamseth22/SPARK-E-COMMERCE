import { useDispatch, useSelector } from "react-redux";
import BuyItem from "./BuyItem";
import React from "react";
import EmptyCart from "./EmptyCart";
import { useEffect } from "react";
import { rzp_Id } from "../Constant";
import { clearCart } from "../utils/cartSlice";

const handlePaymentSuccess = (payment) => {
  // console.log("Payment Successful:", payment);
  // Perform necessary actions after successful payment
};

const handlePaymentError = (error) => {
  console.log("Payment Error:", error);
  // Handle payment errors
};

const makePayment = async (price) => {
  // if (!selectedAddress) {
  //     notifyWarn('Choose an Address')
  //     return;
  // }
  const options = {
    key: rzp_Id,
    amount: price * 100,
    currency: "INR",
    name: "AnixCart",
    description: "Thank you for your test purchase",
    image: "",
    handler: handlePaymentSuccess,
    prefill: {
      name: "",
      email: "",
      contact: "",
    },
    notes: {
      address: "",
    },
    theme: {
      color: "#0e5db3",
    },
  };
  // window.RazorpayCheckout.open(options);
  const razorpayInstance = new window.Razorpay(options);
  razorpayInstance.on("payment.failed", handlePaymentError);
  razorpayInstance.open();
};

const Cart = () => {
  const price = 1000;
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return !cartItems.length ? (
    <EmptyCart />
  ) : (
<>
    <div className="flex m-3 gap-10 pl-12 items-center">
    <h1>Your Cart</h1>
    <button className="bg-yellow-300 p-2"  onClick={() => handleClearCart()}>Clear cart</button>
    </div>
    <div className=" flex justify-between flex-wrap xsm:flex xsm:justify-center sm:flex sm:justify-center md:flex md:justify-center lg:flex lg:justify-center ">
      <div className="max-w-4xl">
        {cartItems.map((item) => (
          <BuyItem {...item} key={item.id} />
        ))}
      </div>

      <div className="flex flex-col gap-10 w-1/3 h-1/3 items-center my-10 mx-5 p-10  right-0 shadow-2xl  bg-slate-200 float-right min-w-[350px] max-w-[350px] sm: ">
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
          <button
            className="bg-yellow-400 p-4"
            onClick={() => makePayment(price)}
          >
            Proceed To Pay
          </button>
        </div>
      </div>
    </div>
    </>);
};

export default Cart;
