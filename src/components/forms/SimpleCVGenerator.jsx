import React, { forwardRef,useState, useEffect } from 'react';
import TemplateComponent from './templateComponent';



const predefinedColors = {
  Template1: '#F5F5F5',
  Template2: 'lightgray',
  Template3: '#F0FFF0',
  Template4: '#FFDAB9',
  Template5: 'lightgray',
  Template6: '#FFEBEF',
  Template7: '#FFEDCC',
};

const SimpleCVGenerator = forwardRef(({ data, selectedTemplate,showRedCircle,selectedFont ,setSelectedFont }, ref) => {
  const [boxBgColor, setBoxBgColor] = useState(predefinedColors[selectedTemplate]);
  useEffect(() => {
    setBoxBgColor(predefinedColors[selectedTemplate]);
  }, [selectedTemplate]);
  return (
    <div className="w-full lg:w-full p-1 " >
      <TemplateComponent
        ref={ref}
        data={data}
        selectedTemplate={selectedTemplate}
        showRedCircle={showRedCircle}
        selectedFont={selectedFont} setSelectedFont={setSelectedFont}
        boxBgColor={boxBgColor}
      />
    </div>
  );
});

export default SimpleCVGenerator;
