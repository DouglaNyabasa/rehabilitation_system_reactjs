import { useContext, useState } from "react";
import { StepperContext } from "../../context/StepperContext";

const CollateralForm = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const [app, setApp] = useState();
  const [ava, setAva] = useState();
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col mx-2">
      <div className="flex justify-between mb-4">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900 mt-6">
            Application Date
          </label>
          <input
             onChange={(e) => setApp(e.target.value)}
             value={app}
            name="date"
            placeholder="Date"
            type="date"
            className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          />
        </div>

        <div className="flex-1 ml-2">
          <label className="block text-sm font-medium leading-6 text-gray-900 mt-6">
            Availability per Week
          </label>
          <input
              onChange={(e) => setAva(e.target.value)}
              value={ava}
            name="collateralCover"
            placeholder="Availability"
            type="number"
            className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          />
        </div>
      </div>

  

    
    </div>
  );
};

export default CollateralForm;
