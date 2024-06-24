import React, { useState } from "react";

function References(props) {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <>
      {props.selectedTemplate === "Template3" && (
        <div>
          <h3 className="flex justify-between font-bold text-lg mt-4">
          References
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
                  References name :
                </label>
                <input
                  type="text"
                  name="Referencesname"
                  value={props.formData.Referencesname}
                  onChange={props.handleInputChange}
                  placeholder="References name "
                  className="w-full p-3 mb-4 border border-black rounded-lg"
                />
              </div>

              <div className="w-3/4">
                <label
                  htmlFor="skilldetails"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                 References position:
                </label>
                <input
                  type="text"
                  name="Referencesposition"
                  value={props.formData.Referencesposition}
                  onChange={props.handleInputChange}
                  placeholder="References position"
                  className="w-full p-3 mb-4 border border-black rounded-lg"
                />
              </div>

              

              
            </div>
            <div className="flex gap-6">
              <div className="w-3/4">
                <label
                  htmlFor="skilldetails"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                 References Phone No:
                </label>
                <input
                  type="text"
                  name="Referencesphone"
                  value={props.formData.Referencesphone}
                  onChange={props.handleInputChange}
                  placeholder="References phone "
                  className="w-full p-3 mb-4 border border-black rounded-lg"
                />
              </div>
              <div className="w-3/4">
                <label
                  htmlFor="skilldetails"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                 References Email:
                </label>
                <input
                  type="email"
                  name="ReferencesEmail"
                  value={props.formData.ReferencesEmail}
                  onChange={props.handleInputChange}
                  placeholder="References Email "
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

export default References;
