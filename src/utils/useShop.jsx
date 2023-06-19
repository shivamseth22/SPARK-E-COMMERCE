import { useEffect, useState } from "react";

const useShop = () => {
  const [saman, setSaman] = useState(null);

  const url = "https://dummyjson.com/products?limit=100";

  async function shopNow() {
    const data = await fetch(url);
    const json = await data.json();
    setSaman(json.products);
  }

  useEffect(() => {
    shopNow();
  }, []);

  return saman;
};
export default useShop;
