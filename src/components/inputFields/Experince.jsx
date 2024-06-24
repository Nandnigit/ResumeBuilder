import React, { useState, useEffect } from 'react';

const Experience = ({ experiences = [], handleInputChange, addExperience, deleteExperience, handleKeyPress }) => {
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const [isExperienceComplete, setIsExperienceComplete] = useState(false);

  useEffect(() => {
    checkExperienceCompletion();
  }, [experiences]);

  const checkExperienceCompletion = () => {
    const complete = experiences.every(exp =>
      exp.Company &&
      exp.role &&
      exp.month1 &&
      (exp.month2 || isCurrentlyWorking) &&
      exp.companydescription
    );
    setIsExperienceComplete(complete);
  };

  // Function to handle changes in the company description field
  const handleDescriptionChange = (e, index) => {
    const { value } = e.target;

    // Replace carriage return (\r) characters with newline (\n) characters
    const formattedValue = value.replace(/\r/g, '\n');

    // Call the parent component's handleInputChange function with the updated value
    handleInputChange({ target: { name: 'companydescription', value: formattedValue } }, index, 'experiences');
  };

  return (
    <div className='mt-4'>
      <div className=" md:px-10">
        {experiences.map((exp, index) => (
          <div key={index} className="mt-4  p-4">
            <h6 className='font-bold text-xs my-2'>* indicates a required field</h6>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor={`Company_${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Who Did You Do This For?
                </label>
                <input 
                  type="text" 
                  id={`Company_${index}`}
                  name="Company" 
                  value={exp.Company}
                  onChange={(e) => handleInputChange(e, index, 'experiences')}
                  placeholder="Company Name" 
                  className="w-full p-2 border border-black rounded-lg"
                />
              </div>
              <div>
                <label htmlFor={`role_${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  What Was Your Title? *
                </label>
                <input 
                  type="text" 
                  id={`role_${index}`}
                  name="role" 
                  value={exp.role}
                  onChange={(e) => handleInputChange(e, index, 'experiences')}
                  placeholder="Role" 
                  className="w-full p-2 border border-black rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor={`month1_${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date:
                </label>
                <input 
                  type="month" 
                  id={`month1_${index}`}
                  name="month1" 
                  value={exp.month1}
                  onChange={(e) => handleInputChange(e, index, 'experiences')}
                  className="w-full p-2 border border-black rounded-lg"
                /> 
              </div>
              <div>
                <label htmlFor={`month2_${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  End Date:
                </label>
                <input 
                  type="month" 
                  id={`month2_${index}`}
                  name="month2" 
                  value={exp.month2}
                  onChange={(e) => handleInputChange(e, index, 'experiences')}
                  disabled={isCurrentlyWorking}
                  className="w-full p-2 border border-black rounded-lg"
                />
              </div>
            </div>

            <div className="flex items-center mt-4">
              <input
                type="checkbox" 
                id={`currentlyWorking_${index}`}
                checked={isCurrentlyWorking}
                onChange={() => {
                  setIsCurrentlyWorking(!isCurrentlyWorking);
                  // If the user is currently working, set month2 to "Present", else keep it empty
                  handleInputChange(
                    { target: { name: "month2", value: isCurrentlyWorking ? "" : "Present" } },
                    index,
                    "experiences"
                  );
                }}
                className="mr-2"
              />
              <label htmlFor={`currentlyWorking_${index}`} className="text-sm font-medium text-gray-700">
                Currently Working
              </label>
            </div>

            <div>
              <label htmlFor={`companyplace_${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Company Location 
              </label>
              <input 
                type="text" 
                id={`companyplace_${index}`}
                name="companyplace" 
                value={exp.companyplace}
                onChange={(e) => handleInputChange(e, index, 'experiences')}
                placeholder="e.g. Delhi, India" 
                className="w-full p-2 border border-black rounded-lg"
              />
            </div>

            <div className="flex justify-between mt-4">
              <h3 className="text-lg font-medium">Description</h3>
              <h3 className="text-lg font-medium">AI - Assist</h3>
            </div>
            <textarea 
              name="companydescription"
              id={`companydescription_${index}`}
              value={exp.companydescription}
              onChange={(e) => handleDescriptionChange(e, index)}
              className="w-full h-32 p-2 mt-2 border border-black rounded-lg"
            />

            <button
              type="button"
              onClick={() => deleteExperience(index)}
              className="mt-2 text-red-500"
            >
              Delete Experience
            </button>
          </div>
        ))}
        <button className="mt-4 text-lg font-bold flex items-center" onClick={addExperience}>
          <h3>Add Item</h3>
          <svg className="h-5 w-5 text-white bg-black rounded-full m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <line x1="9" y1="12" x2="15" y2="12" stroke="white" />
            <line x1="12" y1="9" x2="12" y2="15" stroke="white" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Experience;
