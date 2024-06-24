import React, { useState } from "react";

function Language({language=[],selectedTemplate,handleInputChange}) {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <>
      {language.map((lang, index) => (
        <div key={index}>
      {selectedTemplate === "Template3" && (
        <div>
          <h3 className="flex justify-between font-bold text-lg mt-4">
            Language
          </h3>

          {/* <div className="font-normal mb-4 ">
            Highlight specific Adwards that show you fit the position. Make Sure
            they match the key Adwards mentioned in the job listing (especially
            when applying via an online system)
            </div>*/}

          <div>
            <div className="flex gap-6">
              <div className="w-3/4">
                <label
                  htmlFor="Languagename1"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Language name 1:
                </label>
                <input
                  type="text"
                  name="Languagename1"
                  value={lang.Languagename1}
                  onChange={handleInputChange}
                  placeholder="Language name "
                  className="w-full p-3 mb-4 border border-black rounded-lg"
                />
              </div>

              <div className="w-3/4">
                <label
                  htmlFor="Languagename2"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                 Language name 2:
                </label>
                <input
                  type="text"
                  name="Languagename2"
                  value={lang.Languagename2}
                  onChange={handleInputChange}
                  placeholder="Language name "
                  className="w-full p-3 mb-4 border border-black rounded-lg"
                />
              </div>

              
            </div>
          </div>
        </div>
      )}
      </div>
      ))}
    </>
  );
}

export default Language;
