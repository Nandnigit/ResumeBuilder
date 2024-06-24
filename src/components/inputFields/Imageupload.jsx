import React from 'react';

const ImageUpload = ({ handleImageUpload }) => {
  const handleChange = (event) => {
    const file = event.target.files[0];
    handleImageUpload(file);
  };

  return (
    <div>
      <label htmlFor="imageUpload" className="block font-semibold mb-2">
        Upload Image:
      </label>
      <input
        type="file"
        id="imageUpload"
        name="image"
        accept="image/*"
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2"
      />
    </div>
  );
};

export default ImageUpload;
