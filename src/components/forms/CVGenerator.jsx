import React, { forwardRef, useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import TemplateComponent from './templateComponent';
import FunctionalityOfCV from './FunctionalityOfCV'; 

const predefinedColors = {
  Template1: '#F5F5F5',
  Template2: 'lightgray',
  Template3: '#F0FFF0',
  Template4: '#FFDAB9',
  Template5: 'lightgray',
  Template6: '#FFEBEF',
  Template7: '#FFEDCC',
};

const CVGenerator = forwardRef(({ data, isSaving, selectedTemplate, setSelectedTemplate, addSection }, ref) => {
  const [boxBgColor, setBoxBgColor] = useState(predefinedColors[selectedTemplate]);
  const [selectedFont, setSelectedFont] = useState('Arial');
  const [textSize, setTextSize] = useState(2);
  const [sectionSpacing, setSectionSpacing] = useState(2);
  const [paragraphSpacing, setParagraphSpacing] = useState(2);
  const [lineSpacing, setLineSpacing] = useState(1.5);

  useEffect(() => {
    setBoxBgColor(predefinedColors[selectedTemplate]);
  }, [selectedTemplate]);

  const options = {
    filename: 'cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'px', format: 'a4' }
  };

  const generatePdf = () => {
    if (ref.current) {
      html2pdf().from(ref.current).set(options).save();
    } else {
      console.error("Ref element is not available.");
    }
  };

  const updateSection = (index, updatedSection) => {
    // Your implementation
  };

  return (
    <div className="gap-2 justify-center">
      <FunctionalityOfCV
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        selectedFont={selectedFont}
        setSelectedFont={setSelectedFont}
        textSize={textSize}
        setTextSize={setTextSize}
        sectionSpacing={sectionSpacing}
        setSectionSpacing={setSectionSpacing}
        paragraphSpacing={paragraphSpacing}
        setParagraphSpacing={setParagraphSpacing}
        lineSpacing={lineSpacing}
        setLineSpacing={setLineSpacing}
        setBoxBgColor={setBoxBgColor}
      />
      <div className="w-full lg:w-full p-2 lg:h-3/4">
        <TemplateComponent
          ref={ref}
          data={data}
          selectedTemplate={selectedTemplate}
          selectedFont={selectedFont}
          textSize={textSize}
          sectionSpacing={sectionSpacing}
          paragraphSpacing={paragraphSpacing}
          lineSpacing={lineSpacing}
          boxBgColor={boxBgColor}
          updateSection={updateSection}
          addSection={addSection}
        />
      </div>
    </div>
  );
});

export default CVGenerator;
