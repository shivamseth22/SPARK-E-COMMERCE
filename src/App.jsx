import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import Error from "./components/Error";



import Login from "./components/Login";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ProductsDetails from "./components/ProductsDetails";
import SearchProduct from "./components/SearchProduct";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import DataCategory from "./components/DataCategory";
function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
  
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/search/:id",
        element: <SearchProduct />,
      },
      {
        path: "/products/:shopid",
        element: <ProductsDetails/>,
      },
      
      {
        path: "/category/:dataId",
        element: <DataCategory />,
      },
     
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      
      {
        path: "/product/:pid",
        element: <ProductsDetails />,
      },
    ],
  },
]);

export default App;
