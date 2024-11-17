import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets_admin/assets";

const appointments = [
  {
    id: 1,
    doctorName: "Dr. John Doe",
    speciality: "General Physician",
    date: "2024-11-15",
    dob: "2001-11-16",
    time: "10:00 AM",
    patientName: "Jane Smith",
    status: "Confirmed",
    fees: 600,
  },
  {
    id: 2,
    doctorName: "Dr. Jane Doe",
    speciality: "Therapist",
    date: "2024-11-16",
    dob: "1998-11-16",
    time: "11:00 AM",
    patientName: "Tom Brown",
    status: "Cancelled",
    fees: 344,
  },
  // Add more appointments as needed
];

const AllAppointment = () => {
  const { calculateAge, currency } = useContext(AppContext);

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>
      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b">
          <p>#</p>
          <p>Patient Name</p>
          <p>Age </p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>
        {appointments.map((item, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50"
            key={index}
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center gap-2">
              <p>{item.patientName}</p>
            </div>
            <p className="max-sm:hidden">{calculateAge(item.dob)}</p>
            <p>
              {item.date}.{item.time}
            </p>
            <div className="flex items-center gap-2">
              <p>{item.doctorName}</p>
            </div>
            <p>
              {currency}
              {item.fees}
            </p>
            {item.status === "Cancelled" ? (
              <p className="text-red-600 text-xs font-medium'">Cancelled</p>
            ) : (
              <img
                src={assets.cancel_icon}
                className="w-10 cursor-pointer"
                alt=""
              />
            )}
          </div>
        ))}
      </div>
    </div>

    // <div className="m-5">
    //   <h2 className="text-2xl font-bold mb-4">All Appointments</h2>
    //   <div className="overflow-x-auto">
    //     <table className="min-w-full bg-white border border-gray-200">
    //       <thead>
    //         <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
    //           <th className="py-3 px-4 border-b">Doctor Name</th>
    //           <th className="py-3 px-4 border-b">Speciality</th>
    //           <th className="py-3 px-4 border-b">Date</th>
    //           <th className="py-3 px-4 border-b">Time</th>
    //           <th className="py-3 px-4 border-b">Patient Name</th>
    //           <th className="py-3 px-4 border-b">Status</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {appointments.map((appointment) => (
    //           <tr key={appointment.id} className="hover:bg-gray-50">
    //             <td className="py-3 px-4 border-b">{appointment.doctorName}</td>
    //             <td className="py-3 px-4 border-b">{appointment.speciality}</td>
    //             <td className="py-3 px-4 border-b">{appointment.date}</td>
    //             <td className="py-3 px-4 border-b">{appointment.time}</td>
    //             <td className="py-3 px-4 border-b">{appointment.patientName}</td>
    //             <td className="py-3 px-4 border-b">{appointment.status}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default AllAppointment;
