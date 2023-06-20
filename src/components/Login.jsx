import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <div className="flex justify-center m-20 ">
      <form className="flex flex-col bg-slate-500 h-96 w-96 justify-center items-center shadow-2xl rounded-lg">
        <input
          className="m-3 p-3 rounded-lg"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your Email"
        />
        <input
          className="m-3 p-3 rounded-lg"
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <div className="flex justify-evenly m-3">
          <div className="m-3 ">
            <input type="checkbox" />
            <label> Remember Me</label>
          </div>
          <div className="m-3">
            <input type="checkbox" />
            <label>Show password</label>
          </div>
        </div>
        <div>
          <button
            className="bg-white w-20 h-8 mx-auto rounded-lg"
            onClick={notify}
          >
            Login
          </button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};
export default Login;
