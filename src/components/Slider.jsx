import React from 'react';
import logo from '../components/images/logo3.png';

const Slider = ({
  currentStep,
  setCurrentStep,
  isDetailsComplete,
  isDetailsComplete2,
  isDetailsComplete3,
  isDetailsComplete4,
  isDetailsComplete5,
  isDetailsComplete6,
}) => {
  const sections = ['Heading', 'Work History', 'Education', 'Skills', 'Summary', 'Finalize'];
  const progress = Math.floor(((currentStep + 1) / sections.length) * 100);

  const completeness = [
    isDetailsComplete(),
    isDetailsComplete2(),
    isDetailsComplete3(),
    isDetailsComplete4(),
    isDetailsComplete5(),
    isDetailsComplete6(),
  ];

  const getClassNameForStep = (index) => {
    let className =
      'cursor-pointer text-lg rounded-full -  flex items-center justify-center ';
    if (currentStep === index) {
      className += 'text-blue-900 bg-white font-bold ';
    } else {
      className += 'hover:text-blue-950 ';
    }
    if (completeness[index]) {
      className += 'bg-white-500 text-blue'; // Mark as complete with green color
    } else {
      className += 'bg-blue-950 text-white'; // Default incomplete state
    }
    return className;
  };

  return (
    <div className="h-max pb-80 justify-center bg-blue-300" >
      <div className='pt-14 ps-16'>
        <img src={logo}  className='w mb-10'style={{ width:'130px'}} alt="" />
      </div>
      <div className="px- py-3 flex ps-10">
        <ul className="space-y-4 ">
          {sections.map((section, index) => (
            <li
              key={index}
              className={getClassNameForStep(index)}
              onClick={() => setCurrentStep(index)}
            >
              <div className="relative">
                <div className={`rounded-full px-2 border-2 ${currentStep === index ? 'text-black' : ''}`}>{index + 1}</div>
                {index !== sections.length - 1 && (
                  <div className="h-4 w-px bg-white absolute top-8 left-1/2 transform -translate-x-1/2"></div>
                )}
              </div>
            </li>
          ))}
        </ul>
        <ul className="space-y-6  ">
          {sections.map((section, index) => (
            <li
              key={index}
              className={`cursor-pointer align-middle px-1 ${
                currentStep === index ? 'font-semibold text-white' : 'hover:text-blue-800 text-white'
              }`}
              onClick={() => setCurrentStep(index)}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-7 mt-10 mb-40">
        <p className="text-white mb-1 text-xs">RESUME PROGRESS {progress}%</p>
        <div className="bg-white h-2 w-full rounded-full">
          <div className="bg-blue-500  h-2 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      
    </div>
  );
};

export default Slider;
