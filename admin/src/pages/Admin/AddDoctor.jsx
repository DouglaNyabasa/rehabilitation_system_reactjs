import React, { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../../../src/firebase"; // Ensure this path is correct
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General Physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      // Prepare the doctor data
      const doctorData = {
        name,
        email,
        password, // Consider hashing passwords before storing
        experience,
        fees: Number(fees),
        about,
        speciality,
        degree,
        address: {
          line1: address1,
          line2: address2,
        },
      };

      // Add the doctor to Firestore
      const docRef = await addDoc(collection(db, "users"), doctorData); // Ensure the collection name is correct

      if (docRef.id) {
        toast.success("Doctor added successfully!");
        // Reset form fields
        setName('');
        setEmail('');
        setPassword('');
        setExperience('1 Year');
        setFees('');
        setAbout('');
        setDegree('');
        setAddress1('');
        setAddress2('');
        setSpeciality('General Physician');
      }
    } catch (error) {
      toast.error("Error adding doctor: " + error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="font-semibold">Doctor Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label className="font-semibold">Doctor Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label className="font-semibold">Doctor Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label className="font-semibold">Doctor Experience</label>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {[...Array(10).keys()].map((year) => (
                  <option key={year} value={`${year + 1} Year`}>
                    {year + 1} Year
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label className="font-semibold">Fees</label>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                type="number"
                placeholder="Fees"
                required
              />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="font-semibold">Speciality</label>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="General Physician">General Physician</option>
                <option value="Therapist">Therapist</option>
                <option value="Psychologists">Psychologists</option>
                <option value="Addiction Specialist">Addiction Specialist</option>
                <option value="Primary Care">Primary Care</option>
                <option value="Pain Management">Pain Management</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label className="font-semibold">Education</label>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                type="text"
                placeholder="Education"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label className="font-semibold">Address</label>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                type="text"
                placeholder="Address 1"
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                type="text"
                placeholder="Address 2"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label className="font-semibold">About Doctor</label>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full px-4 pt-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Write about doctor"
            required
            rows={5}
          />
        </div>

        <button
          type="submit"
          className="bg-primary px-10 py-3 mt-4 rounded-full text-white hover:bg-opacity-80 transition"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
