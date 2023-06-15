import { Link } from "react-router-dom";
import React from "react";

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
    <div className=" h-30 flex  items-center  ">
      <Link to="/Grocery" className="p-3 w-44  m-7 flex flex-col items-center">
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" />

        <h3>Grocery</h3>
      </Link>
      <Link to="/Mobile" className="p-3 w-44  m-7 flex flex-col items-center">
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" />

        <h3>Mobile</h3>
      </Link>

      <Link to="/Faishon" className="p-3 w-44  m-7 flex flex-col items-center">
        <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" />

        <h3>Faishon</h3>
      </Link>

      <Link to="/Electronics" className="p-3 w-44  m-7 flex flex-col items-center">
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" />

        <h3>Electronics</h3>
      </Link>

      <Link to="Home" className="p-3 w-44  m-7 flex flex-col items-center">
        {" "}
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" />
        <h3>Home</h3>
      </Link>

      <Link to="Appliance" className="p-3 w-44  m-7 flex flex-col items-center">
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" />

        <h3>Appliance</h3>
      </Link>

      <Link to="Beauty" className="p-3 w-44  m-7 flex flex-col items-center">
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" />

        <h3>Beauty,Toy&More</h3>
      </Link>
    </div>
  );
};
export default Cateogry;
