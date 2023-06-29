import React, { useState } from 'react';
import "./styles.css"

const CuttingSpeedPage = () => {
  const [unit, setUnit] = useState('imperial');
  const [diameter, setDiameter] = useState('');
  const [spindleSpeed, setSpindleSpeed] = useState('');
  const [cuttingSpeed, setCuttingSpeed] = useState('');

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleCalculation = () => {
    // Perform cutting speed calculation based on the selected unit
    let calculatedCuttingSpeed;

    if (unit === 'imperial') {
      calculatedCuttingSpeed = calculateCuttingSpeed(parseFloat(diameter), parseFloat(spindleSpeed));
    } else {
      calculatedCuttingSpeed = calculateCuttingSpeed(convertToMetric(parseFloat(diameter)), convertToMetric(parseFloat(spindleSpeed)));
    }

    setCuttingSpeed(calculatedCuttingSpeed);
  };

  const calculateCuttingSpeed = (diameter, spindleSpeed) => {
    // Calculate cutting speed based on the selected unit
    let cuttingSpeed;

    if (unit === 'imperial') {
      cuttingSpeed = (3.14 * diameter * spindleSpeed).toFixed(2);
    } else {
      cuttingSpeed = (3.98 * diameter * spindleSpeed).toFixed(2);
    }

    return cuttingSpeed;
  };

  const convertToMetric = (value) => {
    // Convert value from imperial to metric
    // Implement your conversion logic here
    return value; // Placeholder, replace with actual conversion logic
  };

  return (
    <div className="cutting-speed-page">
      <h2>Cutting Speed</h2>

      <div className="form-group">
        <label htmlFor="unit">Select Unit:</label>
        <select id="unit" value={unit} onChange={handleUnitChange}>
          <option value="imperial">Imperial</option>
          <option value="metric">Metric</option>
        </select>
      </div>

      {/* Rest of the form inputs and calculation logic */}
    </div>
  );
};

export default CuttingSpeedPage;
