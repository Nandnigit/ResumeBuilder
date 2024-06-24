import React, { useState } from "react";

function Adwards(props) {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <>
      {props.selectedTemplate === "Template3" && (
        <div>
          <h3 className="flex justify-between font-bold text-lg mt-4">
            Adwards
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
                  htmlFor="skillname"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Adwards name 1:
                </label>
                <input
                  type="text"
                  name="Adwards1"
                  value={props.formData.Adwards1}
                  onChange={props.handleInputChange}
                  placeholder="Adwards name "
                  className="w-full p-3 mb-4 border border-black rounded-lg"
                />
              </div>

              <div className="w-3/4">
                <label
                  htmlFor="skilldetails"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                 Adwards name 2:
                </label>
                <input
                  type="text"
                  name="Adwards2"
                  value={props.formData.Adwards2}
                  onChange={props.handleInputChange}
                  placeholder="Adwards name "
                  className="w-full p-3 mb-4 border border-black rounded-lg"
                />
              </div>

              
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Adwards;
