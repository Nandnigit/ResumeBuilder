import React, { useState, useEffect } from 'react';
import TemplateSelector from '../cvFunctionality/TemplateSelector';
import FontSelector from '../cvFunctionality/FontSelector';
import Slider2 from '../cvFunctionality/Slider2';
import ColorButtons from '../cvFunctionality/ColorButtons';



const FunctionalityOfCV = ({
  selectedTemplate,
  setSelectedTemplate,
  selectedFont,
  setSelectedFont,
  textSize,
  setTextSize,
  sectionSpacing,
  setSectionSpacing,
  paragraphSpacing,
  setParagraphSpacing,
  lineSpacing,
  setLineSpacing,
  boxBgColor, setBoxBgColor
  
}) => {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

  return (
    <div className="functinalityofcv w-full lg:w-full p-5 justify-center bg-white rounded-lg  ">
      <div className='  justify-around mb-2'>
       <div className='my-2 '>
       <TemplateSelector selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
       </div>
        <FontSelector selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
      </div>

      <div className="">
      <button
        onClick={toggleDropdown}
        className="text-black border-blue-950 border-2 rounded font-bold p-2 w-full"
      >
        Formatting tools
      </button>
      {dropdownOpen && (
        <div>
         <div className='flex justify-around  border-x-2  border- border-black  px-4 gap- py-3'>
         <Slider2 label="Text Size" min={1} max={3} step={1} value={textSize} setValue={setTextSize} />
         <Slider2 label="Section Spacing" min={1} max={3} step={1} value={sectionSpacing} setValue={setSectionSpacing} />
         <Slider2 label="Paragraph Spacing" min={1} max={3} step={1} value={paragraphSpacing} setValue={setParagraphSpacing} />
         <Slider2 label="Line Spacing" min={1} max={2} step={0.5} value={lineSpacing} setValue={setLineSpacing} />
       </div>
       <ColorButtons setBoxBgColor={setBoxBgColor}  />
     </div>
      )}
    </div>
    </div>
      
  );
};

export default FunctionalityOfCV;
