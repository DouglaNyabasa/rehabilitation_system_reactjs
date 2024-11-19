import { useContext, useEffect, useState } from "react";
import { StepperContext } from "../../context/StepperContext";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const Account = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const [substance, setSubstance] = useState("Alcohol");
  const [previoustreatment, setPreviousTreatment] = useState();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [frequency, setFrequency] = useState();
  const [health, setHealth] = useState("Health Status");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const db = getFirestore();
      const user = auth.currentUser;
  
      console.log("Current User:", user); // Check if user is authenticated
  
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Fetched User Data:", data); // Log fetched data
          setFullName(data.fullName || "");
          setEmail(data.email || "");
        } else {
          console.log("No such document!"); // Handle case where doc doesn't exist
        }
      } else {
        console.log("User is not logged in!"); // Handle not logged in case
      }
    };
  
    fetchUserData();
  }, []);
  

  return (
    <div className="flex flex-col mx-2">
      <div className="flex justify-between mb-4">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900 mt-6">
            Full Name
          </label>
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullname}
            name="fullname"
            placeholder="Full Name"
            className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="flex-1 ml-2">
          <label className="block text-sm font-medium leading-6 text-gray-900 mt-6">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            placeholder="Email"
            className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900 mt-6">
            Substance Type
          </label>
          <select
            onChange={(e) => setSubstance(e.target.value)}
            value={substance}
            name="substance"
            className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="Alcohol">Alcohol</option>
            <option value="Prescription Medications">Prescription Medications</option>
            <option value="Illicit Drugs">Illicit Drugs</option>
            <option value="Cannabis">Cannabis</option>
            <option value="Inhalants">Inhalants</option>
            <option value="Synthetic Drugs">Synthetic Drugs</option>
            <option value="Hallucinogens">Hallucinogens</option>
          </select>
        </div>

        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900 mt-6">
            Previous Treatment
          </label>
          <select
            onChange={(e) => setPreviousTreatment(e.target.value)}
            value={previoustreatment}
            name="previoustreatment"
            className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900 mt-6">
            Frequency and Quantity Per Day
          </label>
          <select
            onChange={(e) => setFrequency(e.target.value)}
            value={frequency}
            name="frequency"
            className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="Once">Once</option>
            <option value="Twice">Twice</option>
            <option value="Thrice">Thrice</option>
            <option value="More">More</option>
          </select>
        </div>

        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900 mt-6">
            Any medical conditions?
          </label>
          <select
            onChange={(e) => setHealth(e.target.value)}
            value={health}
            name="health"
            className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Account;
