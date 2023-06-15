import React from 'react';
import { useState,useEffect } from 'react';

const useCatproduct = ({category}) => {

    const [catProduct, setCatProduct] = useState(null);

    const url = `https://dummyjson.com/products/category/${category}?limit=8`;
  
    async function getCategoryData() {
      const data = await fetch(url);
      const fData = await data.json();
      setCatProduct(fData.products);
      
    }
  
    useEffect(() => {
      getCategoryData();
    }, []);
  
    

  return catProduct;
}

export default useCatproduct;