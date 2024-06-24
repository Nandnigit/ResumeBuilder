import React, { forwardRef, useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import TemplateComponent from './templateComponent'; // Adjust path if necessary
import TemplateSelector from '../cvFunctionality/TemplateSelector';
import FontSelector from '../cvFunctionality/FontSelector';
import Slider2 from '../cvFunctionality/Slider2';
import ColorButtons from '../cvFunctionality/ColorButtons';

const predefinedColors = {
  Template1: '#F5F5F5',
  Template2: 'lightgray',
  Template3: '#F0FFF0',
  Template4: '#FFDAB9',
  Template5: 'lightgray',
  Template6: '#FFEBEF',
  Template7: '#FFEDCC',
};

const CVGenerator2 = forwardRef(({ data, isSaving, selectedTemplate, setSelectedTemplate }, ref) => {
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
    const element = ref.current;
    html2pdf().from(element).set(options).save();
  };

  return (
    <div className="bg-gray-400 p-10 rounded-t-lg rounded-b-lg">
      <div className="flex gap-5 bg-gray-500 p-2 text-white rounded-t-lg justify-evenly">
        <div>{isSaving ? 'Saving...' : 'Saved'}</div>
        <TemplateSelector selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
        <FontSelector selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
        <Slider2 label="Text Size" min={1} max={3} step={1} value={textSize} setValue={setTextSize} />
        <Slider2 label="Section Spacing" min={1} max={3} step={1} value={sectionSpacing} setValue={setSectionSpacing} />
        <Slider2 label="Paragraph Spacing" min={1} max={3} step={1} value={paragraphSpacing} setValue={setParagraphSpacing} />
        <Slider2 label="Line Spacing" min={1} max={2} step={0.5} value={lineSpacing} setValue={setLineSpacing} />
        <ColorButtons setBoxBgColor={setBoxBgColor} />
      </div>
      
    </div>
  );
});

export default CVGenerator2;
