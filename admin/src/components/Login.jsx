import React, { useContext, useState } from "react";
import { assets } from "../../../src/assets/assets_frontend/assets";
import { AdminContext } from "../context/AdminContext";
import axios from 'axios'
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Admin");

  const {setAToken,backendUrl} = useContext(AdminContext)
  const [email , setEmail] = useState(' ')
  const [password , setPassword] = useState(' ')

  const onSubmitHandler = async (event) =>{
   event.preventDefault()
//    try {
//      if(state === 'Admin'){
//         const {data} = await axios.post(backendUrl + '/api/admin/login', {email,password})
//         if(data.success){
//             localStorage.setItem('aToken', data.token)
//             setAToken(data.token);
            
//         } else{
//             toast.error(data.message)
//         }
//      }else{

//      }
//    } catch (error) {
    
//    }
  }
 

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm shadow-lg text-[#5E5E5E] ">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary">{state}</span> Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            type="email"
            required
            onClick={(e)=> setEmail(e.target.value)}
            value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-2"
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            type="password"
            required
            onClick={(e)=> setPassword(e.target.value)}
            value={password}
            className="border border-[#DADADA] rounded w-full p-2 mt-2"
          />
        </div>
        <button className="bg-primary mt-5 text-base w-full py-2 rounded-md  text-white">Login</button>
        {
            state === 'Admin'
            ? <p>Doctor Login ?<span onClick={()=> setState('Doctor')} className="text-primary underline cursor-pointer">{" "}Click Here</span></p>
            : <p>Admin Login ?<span  onClick={()=> setState('Admin')} className="text-primary underline cursor-pointer" >{" "}Click Here</span></p>
        }
      </div>
    </form>
  );
};

export default Login;
