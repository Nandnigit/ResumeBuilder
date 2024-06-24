import React from 'react';

const Education = ({ educations = [], handleInputChange, addEducation, deleteEducation }) => {
  return (
    <div className="mt-10 px-4 md:px-10">
      <h3 className="font-bold text-lg mt-4">Awards and Training, Education, Certifications, and Accolades:</h3>
      <div className="font-normal mb-4">
        Include all Education and Training including trainings and Awards, Degrees, Certifications, Trainings, Recognitions, Awards, and Accolades.
      </div>
      <h6 className='font-bold text-xs my-4'>* indicates a required field</h6>

      {educations.map((edu, index) => (
        <div key={index} className=" mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`schoolname_${index}`} className="block text-sm text-gray-700 mb-1 font-bold">
                School Name *
              </label>
              <input 
                type="text" 
                id={`schoolname_${index}`}
                name="schoolname" 
                required
                value={edu.schoolname}
                onChange={(e) => handleInputChange(e, index, 'educations')} 
                placeholder="e.g. Delhi University" 
                className="w-full p-2 border border-black rounded-lg"
              />
            </div>
            <div>
              <label htmlFor={`schoolplace_${index}`} className="block text-sm text-gray-700 mb-1 font-bold">
                School Location
              </label>
              <input 
                type="text" 
                id={`schoolplace_${index}`}
                name="schoolplace" 
                value={edu.schoolplace}
                onChange={(e) => handleInputChange(e, index, 'educations')}
                placeholder="e.g. Delhi, India" 
                className="w-full p-2 border border-black rounded-lg"
              />
            </div>
          </div>

          <div>
            <label htmlFor={`coursename_${index}`} className="block text-sm text-gray-700 mb-1 font-bold">
              Field Of Study
            </label>
            <input 
              type="text" 
              id={`coursename_${index}`}
              name="coursename" 
              value={edu.coursename}
              onChange={(e) => handleInputChange(e, index, 'educations')}
              placeholder="e.g. Financial Accounting" 
              className="w-full p-2 border border-black rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor={`edmonth1_${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Start:
              </label>
              <input 
                type="month" 
                id={`edmonth1_${index}`}
                name="edmonth1" 
                value={edu.edmonth1}
                onChange={(e) => handleInputChange(e, index, 'educations')}           
                className="w-full p-2 border border-black rounded-lg"
              /> 
            </div>
            <div>
              <label htmlFor={`edmonth2_${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                End:
              </label>
              <input 
                type="month" 
                id={`edmonth2_${index}`}
                name="edmonth2" 
                value={edu.edmonth2}
                onChange={(e) => handleInputChange(e, index, 'educations')}
                className="w-full p-2 border border-black rounded-lg"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => deleteEducation(index)}
            className="mt-2 text-red-500"
          >
            Delete Education
          </button>
        </div>
      ))}

      <button className="mt-4 text-lg font-bold flex items-center" onClick={addEducation}>
        <h3>Add Item</h3>
        <svg className="h-5 w-5 text-white bg-black rounded-full m-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <line x1="9" y1="12" x2="15" y2="12" stroke="white" />
          <line x1="12" y1="9" x2="12" y2="15" stroke="white" />
        </svg>
      </button>
    </div>
  );
};

export default Education;
