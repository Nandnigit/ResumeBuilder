import React from 'react';

const FontSelector = ({ selectedFont, setSelectedFont }) => (
  <div className="text-black">
  
    <select id="font" className='p-2 rounded-lg font-bold w-full text-center' value={selectedFont} onChange={(e) => setSelectedFont(e.target.value)}>
      <option value="Arial">Arial</option>
      <option value="Calibri">Calibri</option>
      <option value="Georgia">Georgia</option>
      <option value="Lucida">Lucida</option>
      <option value="Roboto">Roboto</option>
    </select>
  </div>
);

export default FontSelector;
