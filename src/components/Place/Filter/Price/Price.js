import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import './Price.scss'
function PriceSlider() {
  const [value, setValue] = useState([0, 500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={0}
        max={1000}
        className="my-slider-class"
      />
    </div>
  );
}

export default PriceSlider;
