import ItemCards from "./ItemCards";
import React from "react";

const Faishon =()=>{
    return(
        <div className="flex flex-wrap">
      <ItemCards category="tops" key={101} />
      <ItemCards category="womens-dresses" key={102}/>
      <ItemCards category="womens-shoes"key={103} />
    </div>
    )
}
export default Faishon;