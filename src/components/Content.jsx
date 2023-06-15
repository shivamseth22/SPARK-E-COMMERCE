import ItemCards from "./ItemCards";
import React from "react";
import { Link } from "react-router-dom";



const Content = () => {

  // const {pid}= useParams();


return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between place-items-center shadow-2xl  ">
        <div className=" ">
          <h1 className="text-4xl flex-wrap text-center pt-10 ">Best Of</h1>
          <h1 className="text-4xl flex-wrap text-center pb-9">Decoration</h1>
          <Link to="/home-decoration"><button className="h-10 w-40  bg-blue-500 ml-4 text-white font-bold">
            Veiw All
          </button></Link>
          <img
            className="p-5"
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
          />
        </div>
        <ItemCards category="home-decoration" key={1} />
      </div>
      
      <div className="flex justify-between place-items-center shadow-2xl ">
        <div>
          <h1 className="text-4xl flex-wrap text-center pt-10 ">Best Of</h1>
          <h1 className="text-4xl flex-wrap text-center pb-9">Mobiles</h1>
          <Link to="/smartphones"><button className="h-10 w-40  bg-blue-500 ml-4 text-white font-bold">
            Veiw All
          </button></Link>
          <img
           
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
          />
        </div>

        <ItemCards category="smartphones" key={2} />
      </div>
      <div className="flex justify-between place-items-center shadow-2xl ">
        <div className="">
          <h1 className="text-4xl flex-wrap text-center pt-10 ">Best Of</h1>
          <h1 className="text-4xl flex-wrap text-center pb-9">Sunglasses</h1>
          <Link to="/sunglasses"><button className="h-10 w-40  bg-blue-500 ml-4 text-white font-bold">
            Veiw All
          </button></Link>
          <img
           
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
          />
        </div>

        <ItemCards category="sunglasses" key={3}/>
      </div>
      <div className="flex justify-between place-items-center shadow-2xl">
        <div>
          <h1 className="text-4xl flex-wrap text-center pt-10 ">Best Of</h1>
          <h1 className="text-4xl flex-wrap text-center pb-9">Furniture</h1>
          <Link to="/furniture"><button className="h-10 w-40  bg-blue-500 ml-4 text-white font-bold">
            Veiw All
          </button></Link>
          <img
           
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
          />
        </div>

        <ItemCards category="furniture" key={4}/>
      </div>
      <div className="flex justify-between place-items-center  shadow-2xl">
        <div>
          <h1 className="text-4xl flex-wrap text-center pt-10 ">Best Of</h1>
          <h1 className="text-4xl flex-wrap text-center pb-9">Shoes</h1>
          <Link to="/mens-shoes"><button className="h-10 w-40  bg-blue-500 ml-4 text-white font-bold">
            Veiw All
          </button></Link>
          <img
           
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
          />
        </div>

        <ItemCards category="mens-shoes" key={5}/>
      </div>
    </div>
  );
};
export default Content;

