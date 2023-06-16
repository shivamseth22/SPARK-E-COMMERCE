import React from "react";
import ItemCards from "./ItemCards";
const Electronics =()=>{
    return (
        <>
           <ItemCards category="laptops" key={301}/>
           <ItemCards category="smartphones" key={302}/>
        </>
    )
}
export default Electronics;