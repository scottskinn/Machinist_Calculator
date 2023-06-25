import React, { useState } from 'react';
import "./styles.css"


function CuttingSpeed() {
  const [diameter, setDiameter] = useState('');
  const [spindleSpeed, setSpindleSpeed] = useState('');
  const [cuttingSpeed, setCuttingSpeed] = useState('');

  const calculateCuttingSpeed = () => {
    // Perform cutting speed calculation based on the provided inputs
    const calculatedCuttingSpeed = (3.14 * parseFloat(diameter) * parseFloat(spindleSpeed)).toFixed(2);

    setCuttingSpeed(calculatedCuttingSpeed);
  };

  return (
    <div className='cuttingSpeedPage'>
      <h2>Cutting Speed Page</h2>
      <div>
        <label htmlFor="diameter">Diameter:</label>
        <input
          type="text"
          id="diameter"
          value={diameter}
          onChange={(e) => setDiameter(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="spindleSpeed">Spindle Speed:</label>
        <input
          type="text"
          id="spindleSpeed"
          value={spindleSpeed}
          onChange={(e) => setSpindleSpeed(e.target.value)}
        />
      </div>
      <div>
        <button onClick={calculateCuttingSpeed}>Calculate Cutting Speed</button>
      </div>
      {cuttingSpeed && (
        <div>
          <h3>Cutting Speed: {cuttingSpeed} inches/minute</h3>
        </div>
      )}
    </div>
  );
}

export default CuttingSpeed;
