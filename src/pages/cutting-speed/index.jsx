import React, { useState } from 'react';
import './styles.css';

const CuttingSpeedPage = () => {
  const [unit, setUnit] = useState('imperial');
  const [diameter, setDiameter] = useState('');
  const [material, setMaterial] = useState('steel');
  const [cuttingTool, setCuttingTool] = useState('hss');
  const [cuttingSpeed, setCuttingSpeed] = useState('');

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleMaterialChange = (e) => {
    setMaterial(e.target.value);
  };

  const handleCuttingToolChange = (e) => {
    setCuttingTool(e.target.value);
  };

  const handleCalculation = () => {
    let calculatedCuttingSpeed;

    if (unit === 'imperial') {
      calculatedCuttingSpeed = calculateCuttingSpeed(parseFloat(diameter), material);
    } else {
      calculatedCuttingSpeed = calculateCuttingSpeed(convertToMetric(parseFloat(diameter)), material);
    }

    setCuttingSpeed(calculatedCuttingSpeed);
  };

  const calculateCuttingSpeed = (diameter, material) => {
    let cuttingSpeed;

    if (unit === 'imperial') {
      cuttingSpeed = (getMaterialFactor(material) * Math.pow(diameter, 0.5)).toFixed(2);
    } else {
      cuttingSpeed = (getMaterialFactor(material) * Math.pow(convertToImperial(diameter), 0.5)).toFixed(2);
    }

    return cuttingSpeed;
  };

  const calculateSpindleSpeed = () => {
    let spindleSpeed;

    if (unit === 'imperial') {
      spindleSpeed = (cuttingSpeed / (3.14 * diameter)).toFixed(2);
    } else {
      spindleSpeed = (cuttingSpeed / (3.14 * convertToMetric(diameter))).toFixed(2);
    }

    return spindleSpeed;
  };

  const convertToMetric = (value) => {
    const convertedValue = value / 25.4;

    return convertedValue.toFixed(2);
  };

  const convertToImperial = (value) => {
    const convertedValue = value * 25.4;

    return convertedValue.toFixed(2);
  };

  const getMaterialFactor = (material) => {
    let materialFactor;

    switch (material) {
      case 'steel':
        materialFactor = 200;
        break;
      case 'aluminum':
        materialFactor = 1000;
        break;
      default:
        materialFactor = 500;
        break;
    }

    if (cuttingTool === 'hss') {
      // High-Speed Steel (HSS) material factor adjustment
      materialFactor *= 1.2;
    } else if (cuttingTool === 'carbide') {
      // Carbide material factor adjustment
      materialFactor *= 2.5;
    }

    return materialFactor;
  };

  return (
    <div className="CuttingSpeedPage">
      <h2>Cutting Speed</h2>

      <div className="form-group">
        <label htmlFor="unit">Select Unit:</label>
        <select id="unit" value={unit} onChange={handleUnitChange}>
          <option value="imperial">Imperial</option>
          <option value="metric">Metric</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="material">Select Material:</label>
        <select id="material" value={material} onChange={handleMaterialChange}>
          <option value="steel">Steel</option>
          <option value="aluminum">Aluminum</option>
          {/* Add more material options as needed */}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="cuttingTool">Select Cutting Tool:</label>
        <select id="cuttingTool" value={cuttingTool} onChange={handleCuttingToolChange}>
          <option value="hss">High-Speed Steel (HSS)</option>
          <option value="carbide">Carbide</option>
          {/* Add more cutting tool options as needed */}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="diameter">Diameter ({unit === 'imperial' ? 'in inches' : 'in millimeters'}):</label>
        <input
          type="text"
          id="diameter"
          value={diameter}
          onChange={(e) => setDiameter(e.target.value)}
        />
      </div>

      <div>
        <button onClick={handleCalculation}>Calculate Cutting Speed</button>
      </div>

      {/* Display the calculated spindle speed if cutting speed and diameter are provided */}
      {cuttingSpeed && diameter && (
        <div>
          {unit === 'imperial' ? (
            <label htmlFor="calculatedSpindleSpeed">Calculated Spindle Speed (RPM):</label>
          ) : (
            <label htmlFor="calculatedSpindleSpeed">Calculated Spindle Speed (mm/min):</label>
          )}
          <input
            type="text"
            id="calculatedSpindleSpeed"
            value={calculateSpindleSpeed()}
            readOnly
          />
        </div>
      )}
    </div>
  );
};

export default CuttingSpeedPage;
