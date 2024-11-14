import React from 'react'

const appointments = [
  {
    id: 1,
    doctorName: "Dr. John Doe",
    speciality: "General Physician",
    date: "2024-11-15",
    time: "10:00 AM",
    patientName: "Jane Smith",
    status: "Confirmed"
  },
  {
    id: 2,
    doctorName: "Dr. Jane Doe",
    speciality: "Therapist",
    date: "2024-11-16",
    time: "11:00 AM",
    patientName: "Tom Brown",
    status: "Pending"
  },
  // Add more appointments as needed
];

const AllAppointment = () => {
  return (
    <div className="m-5">
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
              <th className="py-3 px-4 border-b">Doctor Name</th>
              <th className="py-3 px-4 border-b">Speciality</th>
              <th className="py-3 px-4 border-b">Date</th>
              <th className="py-3 px-4 border-b">Time</th>
              <th className="py-3 px-4 border-b">Patient Name</th>
              <th className="py-3 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">{appointment.doctorName}</td>
                <td className="py-3 px-4 border-b">{appointment.speciality}</td>
                <td className="py-3 px-4 border-b">{appointment.date}</td>
                <td className="py-3 px-4 border-b">{appointment.time}</td>
                <td className="py-3 px-4 border-b">{appointment.patientName}</td>
                <td className="py-3 px-4 border-b">{appointment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAppointment
