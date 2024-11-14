import React, { useState } from 'react'
import Account from '../../components/steps/Account'
import Stepper from '../../components/Stepper';
import Final from '../../components/steps/Final';
import Details from '../../components/steps/Details'
import { StepperContext } from '../../context/StepperContext';
import StepperControl from '../../components/StepperControl';

const AddAppointment = () => {

    const [currentStep, setCurrentStep] = useState(1);

    const [userData, setUserData] = useState('');
  
    const [finalData, setFinalData] = useState([])
    const steps = [
        "First Step",
        "Second Step",
        "Complete"
    
    
      ]
    
    
    
      const displayStep = (step) => {
    
    
        switch (step) {
          case 1:
            return <Account/>
    
    
          case 2:
            return <Details/>
    
          case 3:
            return <Final />
    
          default:
            break;
        }
    
      }
    
    
      const handleClick = (direction) => {
    
        let newStep = currentStep;
        direction === 'next' ? newStep++ : newStep--;
        //check if steps are within bounds..
    
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
    
    
    
      }
      
  
    return (
      <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-gray-100 ">
      {/* stepper */}
      <div className="container horizontal mt-5">
        <Stepper
          steps={steps}
          currentStep={currentStep}
  
        />
  
  
        {/* Display components */}
  
        <div className="my-10 p-10">
  
          <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData
          }}>
  
            {displayStep(currentStep)}
  
          </StepperContext.Provider>
  
        </div>
  
      </div>
  
  
  
  
  
  
  
      {/* navigation controls */}
  
      <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
  
    </div>
    )
  }

export default AddAppointment
