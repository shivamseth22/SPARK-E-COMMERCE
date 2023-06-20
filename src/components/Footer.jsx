import React from "react";
const Footer = () => {
  return (
    <div className="flex justify-evenly  gap-5 p-4 shadow-2xl bg-slate-800 text-white  flex-wrap mt-10 sm:text-xs">
      <div className="min-w-[250px]" >
        <h3 className="pb-1 text-xl font-bold items-center ">About</h3>
        <ul>
          <li>Contact us</li>
          <li>About us</li>
          <li>Career</li>
          <li>Spark stories</li>
          <li>Press</li>
          <li>Spark Wholesale</li>
          <li>Corporate Information</li>
        </ul>
      </div>
      <div className="min-w-[250px]" >
        <h3 className="pb-1 text-xl font-bold">Help</h3>
        <ul>
          <li>Payments</li>
          <li>Shipping</li>
          <li>Cancellation & Return</li>
          <li>FAQ</li>
          <li>Report infrigement</li>
    
        </ul>
      </div>
      <div className="min-w-[250px]" >
        <h3 className="pb-1 text-xl font-bold">Policy</h3>
        <ul>
          <li>Return Policy</li>
          <li>Terms of use</li>
          <li>Securty</li>
          <li>Privacy</li>
  
        </ul>
      </div>
      <div className="min-w-[250px]" >
        <h3 className="pb-1 text-xl font-bold">Social</h3>
        <ul>
          <li>Linked In </li>
          <li>Twitter</li>
          <li>Github</li>
          
        </ul>
      </div>
      {/* <div className="flex flex-col flex-wrap w-36">
        <h1  className="pb-1 text-xl font-bold">
            Mail us
        </h1>
        <h1>Spark International Private Limited,
        Ayodhya 221104 (shivamseth221104@gmail.com)
        </h1>
      </div> */}
    </div>
  );
};
export default Footer;
