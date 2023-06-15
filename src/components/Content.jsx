import ItemCards from "./ItemCards";
import React from "react";
// import { useParams } from "react-router-dom";



const Content = () => {

  // const {pid}= useParams();


return (
    <>
      <div className="flex justify-between place-items-center h-80  border-solid border-2 border-indigo-600 ">
        <div className="border-solid border-2 border-black h-full m-1 ">
          <h1 className="text-4xl flex-wrap text-center pt-10 ">Best Of</h1>
          <h1 className="text-4xl flex-wrap text-center pb-9">Decoration</h1>
          <button className="h-10 w-40  bg-blue-500 ml-16 text-white font-bold">
            Veiw All
          </button>
          <img
            className=""
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
          />
        </div>
        <ItemCards category="home-decoration" key={1} />
      </div>
      
      <div className="flex justify-between place-items-center h-80  border-solid border-2 border-indigo-600">
        <div className="border-solid border-2 border-black h-full m-1 ">
          <h1 className="text-4xl flex-wrap text-center pt-10 ">Best Of</h1>
          <h1 className="text-4xl flex-wrap text-center pb-9">Mobiles</h1>
          <button className="h-10 w-40  bg-blue-500 ml-16 text-white font-bold">
            Veiw All
          </button>
          <img
            className=""
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
          />
        </div>

        <ItemCards category="smartphones" key={2} />
      </div>
      <div className="flex justify-between place-items-center h-80  border-solid border-2 border-indigo-600">
        <div className="border-solid border-2 border-black h-full m-1 ">
          <h1 className="text-4xl flex-wrap text-center pt-10 ">Best Of</h1>
          <h1 className="text-4xl flex-wrap text-center pb-9">Sunglasses</h1>
          <button className="h-10 w-40  bg-blue-500 ml-16 text-white font-bold">
            Veiw All
          </button>
          <img
            className=""
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
          />
        </div>

        <ItemCards category="sunglasses" key={3}/>
      </div>
      <div className="flex justify-between place-items-center h-80  border-solid border-2 border-indigo-600">
        <div className="border-solid border-2 border-black h-full m-1 ">
          <h1 className="text-4xl flex-wrap text-center pt-10 ">Best Of</h1>
          <h1 className="text-4xl flex-wrap text-center pb-9">Furniture</h1>
          <button className="h-10 w-40  bg-blue-500 ml-16 text-white font-bold">
            Veiw All
          </button>
          <img
            className=""
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
          />
        </div>

        <ItemCards category="furniture" key={4}/>
      </div>
      <div className="flex justify-between place-items-center h-80  border-solid border-2 border-indigo-600">
        <div className="border-solid border-2 border-black h-full m-1 ">
          <h1 className="text-4xl flex-wrap text-center pt-10 ">Best Of</h1>
          <h1 className="text-4xl flex-wrap text-center pb-9">Shoes</h1>
          <button className="h-10 w-40  bg-blue-500 ml-16 text-white font-bold">
            Veiw All
          </button>
          <img
            className=""
            src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
          />
        </div>

        <ItemCards category="mens-shoes" key={5}/>
      </div>
    </>
  );
};
export default Content;

