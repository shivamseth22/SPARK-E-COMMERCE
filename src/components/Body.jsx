
import Cateogry from "./Cateogry";
import Carous from "./Carous";
import Content from "./Content";
import React from "react";



const Body =()=>{
    return (
        <div >
            <Cateogry/>

            <Carous/>
            <div className="overflow-auto"><Content/></div>
            
        </div>
    )
}
export default Body;