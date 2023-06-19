import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center m-20 ">
    <form className="flex flex-col bg-slate-500 h-96 w-96 justify-center items-center shadow-2xl rounded-lg"  >
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
      <button className="bg-white w-20 h-8 mx-auto rounded-lg">Login</button>
    </form>
    </div>
    
  );
};
export default Login;