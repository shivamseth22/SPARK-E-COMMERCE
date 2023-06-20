import { Link } from "react-router-dom";
import React from "react";
import { GroceryIcon } from "../Constant";


// const Section =()=>{
//   return(
//     <>
//       <img src={""}/>
//       <h3>{Description}</h3>
//     </>
//   );
// };



const Cateogry = () => {
  return (
    <div className=" w-full flex  items-center font-bold text-slate-800  justify-evenly sm:text-sm xsm:text-xs">
  
      <Link to="/category/Groceries" className="p-3 w-[13%] flex flex-col items-center ">
        <img src="https://img.freepik.com/free-vector/shopping-basket-with-food-vector-illustration-cart-with-product-buy-supermarket-vector-illustration_1284-47048.jpg?w=740&t=st=1687256098~exp=1687256698~hmac=c0451d6b0d13c1445399a98197147ff41176477d1f0738e66dc640c417f7bfee" />

        <h3>Grocery</h3>
      </Link>
      <Link to="/category/smartphones" className="p-3 w-[13%]   flex flex-col items-center">
        <img src="https://img.freepik.com/free-vector/speech-text-concept-illustration_114360-4162.jpg?w=740&t=st=1687256172~exp=1687256772~hmac=9f107a6e3d9635ca171f0d5fb36240abeb18468a2d85f2ecaf609f0ed85c5bb4" />

        <h3>Mobile</h3>
      </Link>

      <Link to="/category/mens-shirts" className="p-3 w-[13%]  flex flex-col items-center">
        <img src="https://img.freepik.com/free-vector/customer-woman-shopping-with-barrow-concept_40876-2550.jpg?size=626&ext=jpg&ga=GA1.1.590480319.1674674855&semt=sph"  />

        <h3>Faishon</h3>
      </Link>

      <Link to="/category/laptops" className="p-3 w-[13%]  flex flex-col items-center">
        <img src="https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148127714.jpg?size=626&ext=jpg&ga=GA1.1.590480319.1674674855&semt=ais" />

        <h3>Electronics</h3>
      </Link>

      <Link to="/category/lighting" className="p-3 w-[13%]   flex flex-col items-center">
        {" "}
        <img src="https://img.freepik.com/free-vector/vector-dining-room-interior-with-round-brown-wooden-table-two-chairs-red-book-cups-coffee-tea-lamp-plant-pot-photo-frames-wall-isolated-white-background_1284-48474.jpg?size=626&ext=jpg&ga=GA1.1.590480319.1674674855&semt=sph" />
        <h3>Home</h3>
      </Link>

      {/* <Link to="/category/Appliance" className="p-3 w-[13%]   flex flex-col items-center">
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" />

        <h3>Appliance</h3>
      </Link> */}

      <Link to="/category/automotive" className="p-3 w-[13%]   flex flex-col items-center">
        <img src="https://img.freepik.com/free-vector/worker-with-sign_1012-206.jpg?w=740&t=st=1687256805~exp=1687257405~hmac=bceaabed6c698fdf99315b22523993113ce7afd7c0b765ed6f4e25c1f478a3bb" />

        <h3>More</h3>
      </Link>
    </div>
  );
};
export default Cateogry;
