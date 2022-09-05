import React from "react";

const LoginUser = () => {
  return (
    <div className="login-user bg-zinc-800 w-full h-screen absolute z-100 top-0">
      <div
        className="absolute bg-white top-1/2 left-1/2 transform
         -translate-x-1/2 -translate-y-1/2 login-card border-2 
         shadow-xl px-3 py-10 md:w-[500px] w-[90%] rounded-md"
      >
        <h3 className="text-center text-zinc-600 font-semibold text-2xl pb-5">
          Login
        </h3>

        <form className="md:px-[50px] px-2 py-5">
          <div className="flex flex-col gap-2 my-2 relative py-3 ">
            <input
              required
              className="focus:outline-none peer border-b-2 border-zinc-300 focus:border-red-300 pb-2"
              type="email"
              name="email"
              id="email"
            />
            <label
              htmlFor="email"
              className={`text-zinc-500 capitalize 
              absolute left-0 peer-focus:text-xs cursor-text
              peer-focus:-top-3 transition-all duration-300 
              -top-3 text-xs
              }`}
            >
              User
            </label>
          </div>
          <div className="flex flex-col gap-2 my-2 relative py-3 ">
            <input
              required
              className="focus:outline-none peer border-b-2 border-zinc-300 focus:border-red-300 pb-2"
              type="password"
              name="password"
              id="password"
            />
            <label
              htmlFor="password"
              className={`text-zinc-500 capitalize 
              absolute left-0 peer-focus:text-xs cursor-text
              peer-focus:-top-3 transition-all duration-300 
              -top-3 text-xs
              }`}
            >
              Password
            </label>
          </div>
          <div className="sumit-btn float-right">
            <button
              className="bg-red-500 text-white py-2 px-5 hover:bg-red-600  rounded-md "
              type="submit"
              name="submit"
              id="submit"
            >Login</button>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
