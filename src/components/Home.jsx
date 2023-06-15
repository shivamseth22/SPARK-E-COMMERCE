import ItemCards from "./ItemCards";
import React from "react";
const Home = () =>{
    return (
        <div className="flex flex-wrap">
      <ItemCards category="groceries" />
    </div>
    )
}
export default Home;