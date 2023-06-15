
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Beauty from "./components/Beauty";
import Error from "./components/Error";
import Electronic from "./components/Electronic";
import Appliance from "./components/Appliance";
import Faishon from "./components/Faishon";
import Home from "./components/Home";
import Mobile from "./components/Mobile";
import Login from "./components/Login";
import Grocery from "./components/Grocery";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ProductsDetails from "./components/ProductsDetails";
import SearchProduct from "./components/SearchProduct";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
function App() {
  return (
    <div className="app w-full">
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
        path: "/Grocery",
        element: <Grocery />,
      },
      {
        path: "/search/:id",
        element: <SearchProduct />,
      },
      {
        path: "/Electronics",
        element: <Electronic />,
      },
      {
        path: "/Appliance",
        element: <Appliance />,
      },
      {
        path: "/Faishon",
        element: <Faishon />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Mobile",
        element: <Mobile />,
      },
      {
        path: "/Beauty",
        element: <Beauty />,
      },
      {
        path: "/Faishon",
        element: <Faishon />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      // {
      //   path: "/Logout",
      //   element: <Logout/>,
      // },
      {
        path: "/product/:pid",
        element: <ProductsDetails />,
      },
    ],
  },
]);

export default App;
