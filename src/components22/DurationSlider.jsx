import React, { useState } from 'react';
import Slider from 'react-slider';

import '../DurationSlider.css';

const DurreSlider = () => {
  const [values, setValues] = useState([10, 90]);
  const handleChange = (newValues) => setValues(newValues);

  return (
    <div  className='slider-container' style={{ padding: '20px' }} >
     
      <p>Utilisez le curseur pour sélectionner une duration :</p>
      <Slider
        className="slider"
        value={values}
        onChange={handleChange}
        min={10}
        max={90}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='duration-value'>
          
          <input
            type="number"
            id="minDurre"
            value={values[0]}
            onChange={(e) => handleChange([+e.target.value, values[1]])}
          /> <br />
          <label htmlFor="maxDurre">Min</label>
        </div>
        <div className='duration-value'>
          
          <input
            type="number"
            id="maxDurre"
            value={values[1]}
            onChange={(e) => handleChange([values[0], +e.target.value])}
          /> <br />
          <label htmlFor="maxDurre">Min</label>
        </div>
      </div>
    </div>
  );
};

export default DurreSlider;
