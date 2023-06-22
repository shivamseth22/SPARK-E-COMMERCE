import React from "react";
import { Link } from "react-router-dom";
import PinkyData from "./PinkyData";
import { useState ,useEffect } from "react";
import useCatproduct from "../utils/useCatproduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Rating } from "@mui/material";

const ItemCards = ({ category }) => {
  const [noOfItems, setNoOfItems] = useState(5);
  const pData = useCatproduct({ category });



  useEffect(() => {
    let deviceWidth = window.innerWidth;
    if (deviceWidth < 1200 && deviceWidth > 1030) {
        setNoOfItems(4);
    }
    else if(deviceWidth < 1030 && deviceWidth > 800) {
      setNoOfItems(3);
  }
    else if (deviceWidth < 800 && deviceWidth > 500) {
        setNoOfItems(2)
    }
    else if (deviceWidth < 500) {
      setNoOfItems(1)
  }
}, [])

  return (


    
    <>
      <div className="flex  justify-around items-center w-full xsm:justify-normal sm:justify-normal md:justify-around ">
        <div className="flex flex-col  w-[16%] shadow-md sm:w-[12%] sm:items-center sm:h-50 sm:text-sm  xsm:w-[12%] xsm:text-sm">
          <div className="w-full flex flex-col items-center xsm:hidden sm:hidden md:hidden">
            <h1 className="text-3xl pt-5 sm:text-2xl xsm:text-2xl">Best Of</h1>
            <h1 className="text-3xl pb-6 capitalize text-center sm:text-2xl xsm:text-2xl">
              {category}
            </h1>
            <Link to={`/category/${category}`} className="">
              <button className=" w-32 h-10  bg-slate-800  text-white font-bold">
                Veiw All
              </button>
            </Link>

            <img
              className="h-1/2"
              src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            />
          </div>
        </div>
        <div className=" flex w-[80%]">
          <Swiper
            className=".swiper-slide w-full"
            slidesPerView={noOfItems}
            spaceBetween={20}
            slidesPerGroup={1}
            loop={true}
            loopfillgroupwithblank="true"
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {pData &&
              pData?.map((slip) => (
                <SwiperSlide className="">
                  <Link
                    to={`/product/${slip.id}`}
                    key={slip.id}
                    className="place-items-center hover:scale-105 duration-300 border-2 h-72  max-w-[20%] w-[20%] m-2 shadow-lg   sm:h-60 sm:w-[15%] sm:text-sm  xsm:h-60 xsm:w-[15%] xsm:text-sm "
                  >
                    <div className="flex h-1/2 justify-center ">
                      <img src={slip?.thumbnail} className="h-[100px]" />
                    </div>
                    <div className="h-1/2">
                      <h2 className="font-bold">{slip?.title}</h2>
                      <h2 className=" line-clamp-1">{slip?.description}</h2>
                      <h1 className="">
                        <Rating
                          name="read-only"
                          value={slip?.rating}
                          precision={0.5}
                          readOnly
                        />
                      </h1>
                      <h1 className="text font-bold  ">
                        <span>&#8377;{slip?.price * 40}</span>{" "}
                        <span className="line-through  text-gray-500">
                          &#8377;
                          {slip?.price * 70}
                        </span>{" "}
                        <span className=" text-green-600">
                          {slip?.discountPercentage} % Off
                        </span>{" "}
                      </h1>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ItemCards;

{
  /* <Link
to={`/product/${slip.id}`}
key={slip.id}
className="place-items-center hover:scale-105 duration-300 border-2 h-72  min-w-[16%] w-[20%] m-2 shadow-lg p-2 sm:h-60 sm:w-[15%] sm:text-sm  xsm:h-60 xsm:w-[15%] xsm:text-sm "
>
<div className="flex h-1/2 justify-center ">
  <img src={slip.thumbnail} className="h-full" />
</div>
<div className="h-1/2">
  <h2 className="font-bold">{slip.title}</h2>
  <h2 className=" line-clamp-1">{slip.description}</h2>
  <h1 className="">
    <Rating
      name="read-only"
      value={slip.rating}
      precision={0.5}
      readOnly
    />
  </h1>
  <h1 className="text font-bold  ">
    <span>&#8377;{slip.price * 40}</span>{" "}
    <span className="line-through  text-gray-500">
      &#8377;
      {slip.price * 70}
    </span>{" "}
    <span className=" text-green-600">
      {slip.discountPercentage} % Off
    </span>{" "}
  </h1>
</div>
</Link> */
}
