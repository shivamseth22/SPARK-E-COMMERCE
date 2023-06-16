import React from "react";

const Login = () => {
  return (
    <div className="">
    <form className="flex flex-col bg-slate-500 h-96 w-96 justify-center my-16 m-auto  shadow-2xl"  >
      <input
        className="m-3 p-3"
        id="email"
        name="email"
        type="email"
        placeholder="Enter your Email"
       
      />
       <input
        className="m-3 p-3"
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      <div className="flex justify-evenly m-3">
      <div className="m-3">
      <input
      type="checkbox"
      /><label > Remember Me</label>
      </div>
      <div className="m-3">
      <input
      type="checkbox"
      /><label >Show password</label>
      </div>
      </div>
      <button className="bg-white w-20 h-8 mx-auto">Login</button>
    </form>
    </div>
    
  );
};
export default Login;