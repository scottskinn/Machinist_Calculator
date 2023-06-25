// import React, { useState } from 'react';
import './machiningApp.css';
import { Link, Outlet } from "react-router-dom";

const MachiningApp = () => {
    return (
        <div className="home">
            <h1>
                <Link className="title" to="/">Machinist App</Link>
            </h1>

            <nav className="nav">
                <ul>
                    <li>
                        <Link className="links" to="/cutting-speed">Cutting Speed</Link>
                    </li>
                    <li>
                        <Link className="links" to="/feed-rates">Feed Rates</Link>
                    </li>
                    <li>
                        <Link className="links" to="/rpm">RPM</Link>
                    </li>
                    <li>
                        <Link className="links" to="IPT">IPT</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default MachiningApp;


// function MachiningApp() {
//   const [operation, setOperation] = useState('milling');
//   const [unit, setUnit] = useState('imperial');
//   const [diameter, setDiameter] = useState('');
//   const [spindleSpeed, setSpindleSpeed] = useState('');
//   const [cuttingSpeed, setCuttingSpeed] = useState('');

//   const handleOperationChange = (e) => {
//     setOperation(e.target.value);
//   };

//   const handleUnitChange = (e) => {
//     setUnit(e.target.value);
//   };

//   const handleCalculation = () => {
//     let calculatedCuttingSpeed;

//     // Perform cutting speed calculation based on the selected operation and unit
//     if (operation === 'milling') {
//       calculatedCuttingSpeed = calculateMillingCuttingSpeed(parseFloat(diameter), parseFloat(spindleSpeed), unit);
//     } else if (operation === 'drilling') {
//       calculatedCuttingSpeed = calculateDrillingCuttingSpeed(parseFloat(diameter), parseFloat(spindleSpeed), unit);
//     } else if (operation === 'lathe') {
//       calculatedCuttingSpeed = calculateLatheCuttingSpeed(parseFloat(diameter), parseFloat(spindleSpeed), unit);
//     }

//     setCuttingSpeed(calculatedCuttingSpeed);
//   };

//   const calculateMillingCuttingSpeed = (diameter, spindleSpeed, unit) => {
//     let cuttingSpeed;

//     if (unit === 'imperial') {
//       cuttingSpeed = (3.14 * diameter * spindleSpeed).toFixed(2);
//     } else {
//       cuttingSpeed = (3.98 * diameter * spindleSpeed).toFixed(2);
//     }

//     return cuttingSpeed;
//   };

//   const calculateDrillingCuttingSpeed = (diameter, spindleSpeed, unit) => {
//     let cuttingSpeed;

//     if (unit === 'imperial') {
//       cuttingSpeed = (spindleSpeed * 3.82 * diameter).toFixed(2);
//     } else {
//       cuttingSpeed = (spindleSpeed * 97.18 / diameter).toFixed(2);
//     }

//     return cuttingSpeed;
//   };

//   const calculateLatheCuttingSpeed = (diameter, spindleSpeed, unit) => {
//     let cuttingSpeed;

//     if (unit === 'imperial') {
//       cuttingSpeed = (spindleSpeed * 3.82 * diameter).toFixed(2);
//     } else {
//       cuttingSpeed = (spindleSpeed * 97.18 / diameter).toFixed(2);
//     }

//     return cuttingSpeed;
//   };

//   return (
//     <div className="machining-app">
//       <h1>Machining App</h1>
//       <div className="form-group">
//         <label htmlFor="operation">Select Operation:</label>
//         <select id="operation" value={operation} onChange={handleOperationChange}>
//           <option value="milling">Milling</option>
//           <option value="drilling">Drilling</option>
//           <option value="lathe">Lathe</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label htmlFor="unit">Select Unit:</label>
//         <select id="unit" value={unit} onChange={handleUnitChange}>
//           <option value="imperial">Imperial</option>
//           <option value="metric">Metric</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label htmlFor="diameter">Diameter ({unit === 'imperial' ? 'in inches' : 'in millimeters'}):</label>
//         <input
//           type="text"
//           id="diameter"
//           value={diameter}
//           onChange={(e) => setDiameter(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="spindleSpeed">Spindle Speed (in RPM):</label>
//         <input
//           type="text"
//           id="spindleSpeed"
//           value={spindleSpeed}
//           onChange={(e) => setSpindleSpeed(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <button onClick={handleCalculation}>Calculate Cutting Speed</button>
//       </div>
//       {cuttingSpeed && (
//         <div className="result">
//           <h2>Cutting Speed: {cuttingSpeed} {unit === 'imperial' ? 'inches/minute' : 'mm/minute'}</h2>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MachiningApp;
