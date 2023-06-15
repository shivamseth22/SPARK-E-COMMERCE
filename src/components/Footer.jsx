import React from "react";
const Footer = () => {
  return (
    <div className="flex justify-evenly m-4 p-4 ">
      <div >
        <h3 className="pb-1 text-xl font-bold">About</h3>
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
      <div>
        <h3 className="pb-1 text-xl font-bold">Help</h3>
        <ul>
          <li>Payments</li>
          <li>Shipping</li>
          <li>Cancellation & Return</li>
          <li>FAQ</li>
          <li>Report infrigement</li>
    
        </ul>
      </div>
      <div>
        <h3 className="pb-1 text-xl font-bold">Consumer Policy</h3>
        <ul>
          <li>Return Policy</li>
          <li>Terms of use</li>
          <li>Securty</li>
          <li>Privacy</li>
  
        </ul>
      </div>
      <div>
        <h3 className="pb-1 text-xl font-bold">Social</h3>
        <ul>
          <li>Linked In </li>
          <li>Twitter</li>
          <li>Github</li>
          
        </ul>
      </div>
      <div className="flex flex-wrap w-36 justify-start">
        <h1  className="pb-1 text-xl font-bold">
            Mail us
        </h1>
        <h1>Spark International Private Limited,
        Ayodhya 221104 (shivamseth221104@gmail.com)
        </h1>
      </div>
    </div>
  );
};
export default Footer;
