import React, { useState, useEffect } from 'react';

function UploadScreen() {
  const [checked, setChecked] = useState([false, false, false, false, false]);
  const [progress, setProgress] = useState(0);

  const messages = [
    "25+ Resume Designs",
    "Robust AI Suggestion",
    "One Click Improvement Options",
    "8+ Template Color Options",
    "Free Resume Score"
  ];

  useEffect(() => {
    const checkboxes = [...checked];
    checkboxes.fill(false);
    let index = 0;

    const interval = setInterval(() => {
      if (index < 4) {
        checkboxes[index] = true;
        setChecked([...checkboxes]);
        setProgress((index + 1) * 99); // Progress bar fills 20% each second
        index += 1;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="border-4 border-black">
        <div className="w-max-w-xs w-10 border-5 border-black">
          <div className="h-12 bg-gray-200 overflow-hidden">
            <div
              className="h-full bg-gray-600 transition-all duration-1000 ease-linear rounded-e-full rounded-b-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      <h6 className="font-semibold">Abroadium's AI Loading...</h6>
      <div className="space-y-2 mt-4">
        {messages.map((message, idx) => (
          <div key={idx} className="relative flex items-center font-semibold text-lg p-2 rounded-full">
            <div className="rounded-full h-5 w-5 border-2 border-black bg-[#333456]  flex items-center p-4 justify-center" >
              {checked[idx] && <span className="text-[#F2931C] text-5xl ps-3 pb-3">✓</span>}
            </div>
            <span className="ml-2 text-gray-700">{message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadScreen;
