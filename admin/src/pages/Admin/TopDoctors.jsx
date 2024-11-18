import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../src/context/AppContext';

const TopDoctors = () => {

    const navigate = useNavigate();
    const {doctors} = useContext(AppContext)
  return (
    <div className=' flex flex-col items-center gap-4 text-gray-900 md:mx-10'>
     <div className='w-full grid grid-cols-auto gap-4 sm:px-0  pt-5 gap-y-6 px-3'>
     {
        doctors.slice(0,10).map((item,index)=>(
           <div onClick={()=> {navigate(`/appointment/${item._id}`); scrollTo(0,0)}}className="border border-blue-200 rounded-xl cursor-pointer hover:translate-y-[-10px] transition-all duration-500 overflow-hidden" key={index} >
             <img className='bg-blue-50 ' src={item.image} alt="" />
             <div className="p-4 ">
                <div className='flex items-center text-center text-green-500 gap-2 text-sm '>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p> <p>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
             </div>
           </div>
        ))  }
     </div>
     <button onClick={()=>{navigate('/doctors'); scroll(0,0)}} className='bg-blue-50 px-12 py-3 rounded-full mt-10 text-gray-600 '>more</button>
    </div>
  )
}

export default TopDoctors
