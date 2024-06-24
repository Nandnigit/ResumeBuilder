// components/Header.js
import React, { useState } from 'react';
import CVGenerator from '../forms/CVGenerator';
import TemplateSelector from '../cvFunctionality/TemplateSelector';
import FontSelector from '../cvFunctionality/FontSelector';
import Slider2 from '../cvFunctionality/Slider2';
import ColorButtons from '../cvFunctionality/ColorButtons';

const Header = ({ isSaving, selectedTemplate, setSelectedTemplate, cvRef, formData }) => {
  const [boxBgColor, setBoxBgColor] = useState('#F5F5F5');
  const [selectedFont, setSelectedFont] = useState('Arial');
  const [textSize, setTextSize] = useState(2);
  const [sectionSpacing, setSectionSpacing] = useState(2);
  const [paragraphSpacing, setParagraphSpacing] = useState(2);
  const [lineSpacing, setLineSpacing] = useState(1.5);

  const getSizeClass = (value) => {
    if (value <= 1) return 'small';
    if (value === 2) return 'medium';
    return 'large';
  };

  return (
    <div className="bg-white rounded-t-lg rounded-b-lg">
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
      <div ref={cvRef}>
        <CVGenerator
          data={formData}
          isSaving={isSaving}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          boxBgColor={boxBgColor}
          font={selectedFont}
          textSize={getSizeClass(textSize)}
          sectionSpacing={getSizeClass(sectionSpacing)}
          paragraphSpacing={getSizeClass(paragraphSpacing)}
          lineSpacing={lineSpacing}
        />
      </div>
    </div>
  );
};

export default Header;
