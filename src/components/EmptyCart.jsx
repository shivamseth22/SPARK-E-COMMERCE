
import { Emptymg } from "../Constant";
import { Link } from "react-router-dom";
const EmptyCart =() =>{
    return(
        <div className="flex  justify-center gap-5">
        <div className="w-96"><img src={Emptymg} /></div>
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl sm:text-3xl xsm:text-xl text-center">Your Cart is Empty</h1>
        <Link to="/Shop">
        <button className="m-5 bg-slate-300 p-3 w-52 xsm:w-16 xsm:text-xs sm:w-16 sm:text-xs">Shop Now!!</button>
        </Link>
        </div>
        </div>
    )
}

export default EmptyCart;