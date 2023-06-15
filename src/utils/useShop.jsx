import { useEffect, useState } from "react";

const useShop = ()=>{

    const [saman , setSaman] =useState(null);
    // console.log(saman);
    // console.log(setSaman);
    const url = 'https://dummyjson.com/products?limit=100';

    async function shopNow(){
        const data= await fetch(url);
        const json = await data.json();
        setSaman(json.products);
    }
    
    
    // console.log(json)
        useEffect(()=>{
            shopNow();
        },[]);
    // console.log("dvsd");



    return saman;
}
export default useShop;