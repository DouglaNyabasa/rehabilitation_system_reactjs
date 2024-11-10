import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p className="mr-5 ml-5 pb-3 mt-12 font-medium border-b text-zinc-700 text-4xl ">My Appointments</p>
      <div className="">
        {doctors.slice(0, 3).map((item, index) => (
          <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
            <div>
              <img className="w-32 bg-indigo-50" src={item.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-zinc-600 ">
              <p className="text-neutral-800 font-semibold">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="font-medium mt-1 text-zinc-700">Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="text-sm mt-1"><span className="text-sm font-medium text-neutral-700 ">Date & Time</span>07 November 2024 | 02:20 AM</p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primaryColor transition-all duration-300">Pay Online</button>
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 transition-all duration-300">Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;