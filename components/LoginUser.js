import React, { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import axios from 'axios'
import bcrypt from 'bcryptjs'
import UserContext from "./context/UserContext";
import { RiLoginCircleLine } from 'react-icons/ri'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'


const LoginUser = () => {
  const [adminUser, setAdminUser] = useState()
  const [inputUser, setInputUser] = useState({
    email: '',
    password: ''
  })
  const [warning, setWarning] = useState(false)
  const [showPass, setShowPass] = useState("password")


  const router = useRouter()
  const [user, setUser] = useContext(UserContext)


  useEffect(()=>{
    axios.get('https://blood-donator-management.herokuapp.com/user')
    .then(res => setAdminUser(res.data))
  },[])


  const onChangeHandler = (e) => {
    setWarning(false)
      setInputUser({
        ...inputUser,
        [e.target.name]: e.target.value 
      })
  }


const verifyUser = async(e) => {
  e.preventDefault()
  try {
    if(inputUser){
      const isMatched = await bcrypt.compare(inputUser.password, adminUser[0].password)
      if(adminUser[0].email == inputUser.email && isMatched ){
        setUser(true)
        router.push('/')
      } else{
        setWarning(true)
      }
    }
    
  } catch (error) {
    console.log(error);
  }
 
}

  return (
    <div className="login-user bg-zinc-50 w-full h-screen">
      <div
        className="absolute bg-white top-1/2 left-1/2 transform
         -translate-x-1/2 -translate-y-1/2 login-card border-2 
         shadow-xl px-3 py-10 md:w-[500px] w-[90%] rounded-lg"
      >
        <h2 className="font-bold text-md text-red-500 text-center py-3">
          Red <span className="text-green-500">Rose</span> Mission
        </h2>
        <div className="logo flex justify-center">
          <RiLoginCircleLine className="text-center text-red-500" size={110} />
        </div>

        <form className="md:px-[50px] px-2 py-5" autocomplete="on">
          <div className="flex flex-col gap-2 my-2 relative py-3 ">
            <input
              required
              onChange={onChangeHandler}
              className={`focus:outline-none peer border-b-2 border-zinc-300 focus:border-red-300 pb-2`}
              type="email"
              name="email"
              id="email"
            />
            <label
              htmlFor="email"
              className={`text-zinc-500 capitalize 
              absolute left-0 peer-focus:text-xs cursor-text
              peer-focus:-top-3 transition-all duration-300 ${inputUser.email != "" && '-top-3 text-xs'}`}
            >
              User
            </label>
          </div>
          <div className="flex flex-col gap-2 my-2 relative py-3 ">
            <input
              required
              onChange={onChangeHandler}
              className="focus:outline-none peer border-b-2 border-zinc-300 focus:border-red-300 pb-2"
              type={showPass}
              name="password"
              id="password"
            />
            <label
              htmlFor="password"
              className={`text-zinc-500 capitalize 
              absolute left-0 peer-focus:text-xs cursor-text
              peer-focus:-top-3 transition-all duration-300 
              ${inputUser.password != "" && '-top-3 text-xs'}
            `}
            >
              Password
            </label>
            <div className="absolute right-0">
              <AiFillEye onClick={() => setShowPass("text")} size={20} className={`${showPass == "password" ? "block" : "hidden"} text-gray-500`} />
              <AiFillEyeInvisible onClick={() => setShowPass("password")} size={20} className={`${showPass == "text" ? "block" : 'hidden'} text-gray-500`} />
            </div>
          </div>
          <div className={`alert ${warning ? 'block': 'hidden'}`}>
              <p className="text-red-500 text-center animate-pulse">Email or password is invalid</p>
          </div>
          <div className="sumit-btn float-right mt-10">
            <button
              onClick={verifyUser}
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
