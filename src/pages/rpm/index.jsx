import React, { useState } from 'react';

function RPMPage() {
  const [cuttingSpeed, setCuttingSpeed] = useState('');
  const [diameter, setDiameter] = useState('');
  const [spindleSpeed, setSpindleSpeed] = useState('');

  const calculateSpindleSpeed = () => {
    // Perform spindle speed calculation based on the provided inputs
    const calculatedSpindleSpeed = (parseFloat(cuttingSpeed) / (3.14 * parseFloat(diameter))).toFixed(2);

    setSpindleSpeed(calculatedSpindleSpeed);
  };

  return (
    <div>
      <h2>RPM Page</h2>
      <div>
        <label htmlFor="cuttingSpeed">Cutting Speed:</label>
        <input
          type="text"
          id="cuttingSpeed"
          value={cuttingSpeed}
          onChange={(e) => setCuttingSpeed(e.target.value)}
        />
      </div>
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
        <button onClick={calculateSpindleSpeed}>Calculate Spindle Speed</button>
      </div>
      {spindleSpeed && (
        <div>
          <h3>Spindle Speed: {spindleSpeed} RPM</h3>
        </div>
      )}
    </div>
  );
}

export default RPMPage;
