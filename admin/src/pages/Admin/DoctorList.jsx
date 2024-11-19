import React, { useEffect, useState } from "react";
import { db } from "../../../../src/firebase"; // Adjust the import based on your file structure
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const doctorsCollection = collection(db, "users"); // Adjust the collection name if necessary
      const doctorSnapshot = await getDocs(doctorsCollection);
      const doctorList = doctorSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDoctors(doctorList);
    };

    fetchDoctors();
  }, []);

  const handleDelete = async (doctorId) => {
    try {
      const doctorDoc = doc(db, "users", doctorId); // Adjust the collection name if necessary
      await deleteDoc(doctorDoc);
      setDoctors(doctors.filter(doctor => doctor.id !== doctorId)); // Update state to remove the deleted doctor
      alert("Doctor deleted successfully!");
    } catch (error) {
      console.error("Error deleting doctor: ", error);
      alert("Failed to delete doctor.");
    }
  };

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Doctors</p>
      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_2fr_1fr_2fr_1fr] grid-flow-col py-3 px-6 border-b">
          <p>#</p>
          <p>Doctor Name</p>
          <p>Speciality</p>
          <p>Experience</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>
        {doctors.map((doctor, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_2fr_1fr_2fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50"
            key={doctor.id}
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center gap-2">
              <p>{doctor.name}</p>
            </div>
            <p>{doctor.speciality}</p>
            <p>{doctor.experience}</p>
            <p>{doctor.fees}</p>
            <div className="flex items-center gap-2">
              <button className="text-blue-500 hover:underline">Edit</button>
              <button 
                className="text-red-500 hover:underline" 
                onClick={() => handleDelete(doctor.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
