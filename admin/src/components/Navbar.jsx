import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { assets } from "../assets/assets_admin/assets";
import {useNavigate} from 'react-router-dom'


const Navbar = () => {
  const { aToken , setAToken} = useContext(AdminContext);
  const navigate =  useNavigate()

  const logout =()=>{
    navigate('/')
     aToken && setAToken('')
     aToken && localStorage.removeItem('aToken')
  }
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border bg-white border-b ">
      <div className="flex items-center gap-2 text-xs ">
        <img
          src={assets.logo1}
          alt=""
          className="w-36 sm:w-40 cursor-pointer "
        />
        <p className="border px-2.5 py-0.5 rounded-full text-gray-600 border-gray-500  ">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button onClick={logout} className="bg-primary text-white text-sm px-10 py-2 rounded-full">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
