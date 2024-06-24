import React from 'react';

const Slider2 = ({ label, min, max, step, value, setValue }) => (
  <div className="flex flex-col items-center  justify-between  " >
    <label>{label}</label>
    <input style={{width:"50px"}}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => setValue(parseFloat(e.target.value))}
    />
  </div>
);

export default Slider2;
