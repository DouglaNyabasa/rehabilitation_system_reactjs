import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets_frontend/assets";
import RelatedDoctors from "../Doctors/RelatedDoctors";

const Appointment = () => {


  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const daysOfWeek =['SUN', 'MON', 'TUE' , 'WED', 'THU', 'FRI', 'SAT']
  const [docInfo, setDocInfo] = useState(null);

  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([])


    //getting current date
    let today = new Date();

    //get date wind index
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // set end time with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // set hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate().getHours() + 1 : 10
        )
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []
      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})

        timeSlots.push({
          datetime:new Date(currentDate),
          time : formattedTime
        })

        currentDate.setMinutes(currentDate.getMinutes() +30)
      }

      setDocSlots(prev=>([...prev, timeSlots]))
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(()=>{
    console.log(docSlots);
    
  },[docSlots])
  return  docInfo && (
      <div>
        {/* doctors details  */}

        <div className="mt-10 mr-5 ml-5 flex flex-col sm:flex-row gap-4 ">
          <div className="">
            <img
              className="bg-primaryColor sm:max-w-72 rounded-lg  w-full "
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900 ">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>

            <div className="flex items-center text-sm mt-1 gap-2 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="pu-0.5 border  border-gray-400 px-2 text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-400 font-medium mt-4">
              Appointment Fee:{" "}
              <span className="text-gray-700">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 ">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full mt-4">
            {
              docSlots.length && docSlots.map((item,index)=>(
                 <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 cursor-pointer rounded-full min-w-16 ${slotIndex === index ? 'bg-primaryColor text-white': 'border border-gray-300'}`} key={index}>
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                 </div>
              ))
            }
          </div>
          <div className=" flex items-center gap-3 w-full mt-4 overflow-x-scroll ">
            {
              docSlots.length && docSlots[slotIndex].map((item,index)=>(
                  <p onClick={()=>setSlotTime(item.time)} className={`mb-5 text-sm rounded-full flex-shrink-0 cursor-pointer font-light px-5 py-2 ${item.time === slotTime ? 'bg-primaryColor text-white': 'text-gray-400 border border-gray-300'}` } key={index}>
                    {
                      item.time.toLowerCase()
                    }
                  </p>
              ))
            }
          </div>
          <button className="bg-primaryColor mt-5 text-white text-sm font-light px-14 py-3 my-6 rounded-full " >Book an Appointment</button>
        </div>

        <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
      </div>
    
  );
};

export default Appointment;
