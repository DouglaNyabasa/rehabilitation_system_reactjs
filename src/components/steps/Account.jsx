import { useContext, useState } from "react";
import { StepperContext } from "../../context/StepperContext";

const Account = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const [substance, setSubstance] = useState("Alcohol");
  const [previoustreatment, setPreviousTreatment] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [frequency, setFrequency] = useState();
  const [health, setHealth] = useState("Health Status");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col mx-2">
      <div className="flex justify-between mb-4">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900 mt-6">
          First Name
          </label>
          <input
               onChange={(e) => setFirstname(e.target.value)}
               value={firstname}
            name=""
            placeholder="First Name"
            className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          />
        </div>

        <div className="flex-1 ml-2">
          <label className=" block text-sm font-medium leading-6 text-gray-900  mt-6">
          Last Name
          </label>
          <input
                 onChange={(e) => setLastname(e.target.value)}
                 value={lastname}
            name=""
            placeholder="Last Name"
            className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900  mt-6">
          Substance Type
          </label>
          <select
            onChange={(e) => setSubstance(e.target.value)}
            value={substance}
            name=""
            className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          >
            <option value="Alcohol">Alcohol</option>
            <option value="Prescription Medications">Prescription Medications</option>
            <option value="Illicit Drugs">Illicit Drugs</option>
            <option value="Cannabis">Cannabis</option>
            <option value="Inhalants">Inhalants</option>
            <option value="Synthetic Drugs">Synthetic Drugs</option>
            <option value="Hallucinogens">Hallucinogens</option>
            {/* Add options here */}
          </select>
        </div>

        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900  mt-6">
          Previous Treatment
          </label>
          <select
            onChange={(e) => setPreviousTreatment(e.target.value)}
            value={previoustreatment}
            name=""
            className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          >
            <option value="Yes">Yes</option>
            <option value="Non">Non</option>
    
            {/* Add options here */}
          </select>
        </div>
      </div>

      <div className="flex justify-between">

        
      <div className="flex-1 mr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900  mt-6">
          Frequency and Quantity Per Day
          </label>
          <select
            onChange={(e) => setFrequency(e.target.value)}
            value={frequency}
            name=""
            className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          >
            <option value="Once">Once</option>
            <option value="Twice">Twice</option>
            <option value="Thrice">Thrice</option>
            <option value="More">More</option>
    
            {/* Add options here */}
          </select>
        </div>
        


        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900  mt-6">
          Any medical conditions?
          </label>
          <select
            onChange={(e) => setHealth(e.target.value)}
            value={health}
            name=""
            className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          >
            <option value="Yes">Yes</option>
            <option value="No">Non</option>
            
    
            {/* Add options here */}
          </select>
        </div>
      </div>

    
    </div>
  );
};

export default Account;









