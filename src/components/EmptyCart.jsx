import { Emptymg } from "../Constant";
const EmptyCart =() =>{
    return(
        <div className="flex  flex-col items-center">
        <div className="w-96"><img src={Emptymg} /></div>
           
           <h1 className="text-5xl">Your Cart is Empty</h1>
          <button></button>
        </div>
    )
}

export default EmptyCart;