import React, { useState, useEffect } from 'react';

function Tooltip() {
  const linesOfText = [
    "Our AI Enabled Resume Builder",
    "Is Result Oriented",
    "Globally Accepted Formats",
    "AI Powered At Every Step",
    "Increases 50% Chances Of Getting Hired",
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLineIndex(prevIndex => (prevIndex + 1) % linesOfText.length); // Loop through the lines of text
    }, 2000); // Change the delay time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [linesOfText.length]);

  return (
    <div className="sliding-box bg-blue-200 font-semibold  rounded-full  text-xs p-3  shadow w-64 text-center   ">
      {linesOfText[currentLineIndex]}
    </div>
  );
}

export default Tooltip;
