import React, { useState } from 'react';

// Import images using relative paths and Webpack's require context
const templates = [
  { id: 'Template1', name: 'Template 1', image: require('../cvFunctionality/templateimages/template1.png') },
  { id: 'Template2', name: 'Template 2', image: require('../cvFunctionality/templateimages/template2.png') },
  { id: 'Template3', name: 'Template 3', image: require('../cvFunctionality/templateimages/template6.png') },
  { id: 'Template4', name: 'Template 4', image: require('../cvFunctionality/templateimages/template4.png') },
  { id: 'Template5', name: 'Template 5', image: require('../cvFunctionality/templateimages/template5.png') },
  { id: 'Template6', name: 'Template 6', image: require('../cvFunctionality/templateimages/template3.png') },
  { id: 'Template7', name: 'Template 7', image: require('../cvFunctionality/templateimages/template7.png') },
  { id: 'Template8', name: 'Template 8', image: require('../cvFunctionality/templateimages/template8.png') },
  { id: 'Template9', name: 'Template 9', image: require('../cvFunctionality/templateimages/template9.png') },
  { id: 'Template10', name: 'Template 10', image: require('../cvFunctionality/templateimages/template10.png') }
];

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate,onImageUpload  }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setUploadedImage(file);
    onImageUpload(file); // Call the onImageUpload prop with the uploaded image
  };

  return (
    <div className="">
      <button
        onClick={toggleDropdown}
        className="text-black border-blue-950 border-2 rounded font-bold p-2 w-full"
      >
       Select Templates 
      </button>

      {dropdownOpen && (
        <div className="h-60 z-10 bg-white border rounded-lg shadow-lg mt-2 p-4 overflow-auto">
          <div className="grid grid-cols-2 gap-4 overflow-auto">
            {templates.map(template => (
              <div
                key={template.id}
                className={`border-2 cursor-pointer ${
                  selectedTemplate === template.id ? 'border-blue-950 bg-blue-200' : 'border-gray-300 bg-white'
                }`}
                onClick={() => {
                  setSelectedTemplate(template.id);
                  setDropdownOpen(false); // Close dropdown after selection
                }}
              >
                <img src={template.image} alt={template.name} className="w-full h-36 object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
