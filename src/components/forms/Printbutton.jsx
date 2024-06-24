import React from 'react';
import CVGenerator from './CVGenerator';

function CVPrintView({ formData }) {
  return (
    <div id="cv-print-view" className="p-20 bg-white">
      <CVGenerator data={formData} />
    </div>
  );
}

export default CVPrintView;
