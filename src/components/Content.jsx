import ItemCards from "./ItemCards";
import React from "react";
import { Link } from "react-router-dom";

const list = ["home-decoration" , "smartphones" , "sunglasses" , "furniture" , "mens-shoes" ]
const Content = () => {
  // const {pid}= useParams();

  return (
    <div className="flex flex-col m-5 items-center ">
      <div className="flex items-center shadow-2xl gap-5  ">
        <div className=" flex flex-col items-center">
          <h1 className="text-4xl flex-wrap text-center pt-10 ">Best Of</h1>
          <h1 className="text-4xl flex-wrap text-center pb-9">Decoration</h1>
          <Link to="/home-decoration" className="">
            <button className="h-10 w-40  bg-slate-800  text-white font-bold">
              Veiw All
            </button>
          </Link>
          <img
            className=""
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
          />
        </div>
        <div className="w-4/5">
          {list.map((item , index)=> <ItemCards category={item} key={index}/>)}
        </div>
      </div>

      {/* <div className="flex  place-items-center shadow-2xl gap-5 ">
        <div>
          <h1 className="text-4xl flex-wrap text-center pt-10 ">Best Of</h1>
          <h1 className="text-4xl flex-wrap text-center pb-9">Mobiles</h1>
          <Link to="/smartphones">
            <button className="h-10 w-40  bg-slate-800 ml-14 text-white font-bold">
              Veiw All
            </button>
          </Link>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" />
        </div>

        <div className="w-4/5">
          <ItemCards category="smartphones" key={2} />
        </div>
      </div>
      <div className="flex  place-items-center shadow-2xl gap-5 ">
        <div className="">
          <h1 className="text-4xl flex-wrap text-center pt-10 ">Best Of</h1>
          <h1 className="text-4xl flex-wrap text-center pb-9">Sunglasses</h1>
          <Link to="/sunglasses">
            <button className="h-10 w-40  bg-slate-800 ml-14 text-white font-bold">
              Veiw All
            </button>
          </Link>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" />
        </div>

        <div className="w-4/5">
          <ItemCards category="sunglasses" key={3} />
        </div>
      </div>
      <div className="flex  place-items-center shadow-2xl gap-5">
        <div>
          <h1 className="text-4xl flex-wrap text-center pt-10 ">Best Of</h1>
          <h1 className="text-4xl flex-wrap text-center pb-9">Furniture</h1>
          <Link to="/furniture">
            <button className="h-10 w-40  bg-slate-800 ml-14 text-white font-bold">
              Veiw All
            </button>
          </Link>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" />
        </div>

        <div className="w-4/5">
          {" "}
          <ItemCards category="furniture" key={4} />
        </div>
      </div>
      <div className="flex  place-items-center  shadow-2xl gap-5">
        <div>
          <h1 className="text-4xl flex-wrap text-center pt-10 ">Best Of</h1>
          <h1 className="text-4xl flex-wrap text-center pb-9">Shoes</h1>
          <Link to="/mens-shoes">
            <button className="h-10 w-40  bg-slate-800 ml-14 text-white font-bold">
              Veiw All
            </button>
          </Link>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" />
        </div>

        <div className="w-4/5">
          {" "}
          <ItemCards category="mens-shoes" key={5} />
        </div>
      </div> */}
    </div>
  );
};
export default Content;
