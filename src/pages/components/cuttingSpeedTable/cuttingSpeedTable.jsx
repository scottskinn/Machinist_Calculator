import React, { useState } from 'react';
import './CuttingSpeedTable.css';

const CuttingSpeedTable = () => {
    const [selectedOperation, setSelectedOperation] = useState('turning');

    const operations = {
        turning: 'Turning',
        milling: 'Milling',
        drilling: 'Drilling/Reaming',
    };

    const cuttingSpeedData = {
        turning: [
            { material: 'Free machining plain carbon steels (resulfurized)', designation: '1212, 1213, 1215', hss: '270 - 290', carbide: '820 - 1045' },
            { material: 'Free machining plain carbon steels', designation: '1108, 1109, 1115, 1117, 1118, 1120, 1126, 1211', hss: '215 - 235', carbide: '950' },
            { material: 'Free machining plain carbon steels', designation: '1132, 1137, 1139, 1140, 1144, 1146, 1151', hss: '70 - 215', carbide: '670 - 800' },
            { material: 'Free machining plain carbon steels (Leaded)', designation: '11L17, 11L18, 12L13, 12L14', hss: '200 - 260', carbide: '800 - 820' },
            { material: 'Plain carbon steels', designation: '1006, 1008, 1009, 1010, 1012, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1513, 1514', hss: '125 - 215', carbide: '800 - 885', },
            { material: 'Plain carbon steels', designation: '1027, 1030, 1033, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1045, 1046, 1048, 1049, 1050, 1052, 1524, 1526, 1527, 1541', hss: '55 - 180', carbide: '670 - 970' },
            { material: 'Free machining alloy steels (resulfurized):', designation: '4140, 4150', hss: '70 - 200', carbide: '430 - 685' },
            { material: 'Water hardening tool steel', designation: 'W1, W2, W5', hss: '180', carbide: '590' },
            { material: 'Cold work, oil hardening tool steel', designation: 'O1, O2, O6, O7', hss: '125', carbide: '590' },
            { material: 'Cold work, air hardening tool steel', designation: 'A2, A3, A4, A6, A7, A8, A9, A10', hss: '80 - 125', carbide: '355 - 365' },
            { material: 'Stainless steels (Austenitic)', designation: '201, 202, 301, 302, 304, 304L, 305, 308, 321, 347, 348', hss: '115 - 135', carbide: '570' },
            { material: 'Cast Iron', designation: 'ASTM Class20, 25, 30, 35, 40', hss: '145 - 215', carbide: '410' },
            { material: 'Brass', designation: 'C35600, C37700, C36000, C33200, C34200, C35300, C48500, C34000', hss: '300 - 350', carbide: '1170' },
            { material: 'Bronze', designation: 'C65500, C22600, C65100, C67500', hss: '200 - 250', carbide: '715' },
            { material: 'Wrought aluminum', designation: '6061-T6, 5000, 6000, and 7000 series.', hss: '500 - 600', carbide: '2820' },
            { material: 'Cast aluminum', designation: 'Sand and permanent mold casting alloys', hss: '600 - 750', carbide: '2820' },
        ],
        milling: [
            { material: 'Free machining plain carbon steels (resulfurized)', designation: '1212, 1213, 1215', FPM: '130 - 140 ' },
            { material: 'Free machining plain carbon steels', designation: '	1108, 1109, 1115, 1117, 1118, 1120, 1126, 1211', FPM: '115 - 130' },
            { material: 'Free machining plain carbon steels', designation: '1132, 1137, 1139, 1140, 1144, 1146, 1151', FPM: '35 - 70' },
            { material: 'Free machining plain carbon steels (Leaded)', designation: '11L17, 11L18, 12L13, 12L14', FPM: '110 - 140' },
            { material: 'Plain carbon steels', designation: '1006, 1008, 1009, 1010, 1012, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1513, 1514', FPM: '65 - 110' },
            { material: 'Plain carbon steels', designation: '1027, 1030, 1033, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1045, 1046, 1048, 1049, 1050, 1052, 1524, 1526, 1527, 1541', FPM: '25 - 100' },
            { material: 'Free machining alloy steels (resulfurized)', designation: '4140, 4150', FPM: '35 - 100' },
            { material: 'Water hardening tool steel', designation: 'W1, W2, W5', FPM: '85' },
            { material: 'Cold work, oil hardening tool steel', designation: 'O1, O2, O6, O7', FPM: '50' },
            { material: 'Cold work, air hardening tool steel', designation: 'A2, A3, A4, A6, A7, A8, A9, A10', FPM: '40 - 50' },
            { material: 'Stainless steels (Austenitic)', designation: '201, 202, 301, 302, 304, 304L, 305, 308, 321, 347, 348', FPM: '70 - 75' },
            { material: 'Cast Iron	ASTM Class', designation: '20, 25, 30, 35, 40', FPM: '70 - 100' },
            { material: 'Brass', designation: 'C33200, C34000, C34200, C35300, C35600, C36000, C37700, C48500', FPM: '100 - 200' },
            { material: 'Bronze', designation: 'C22600, C65100, C65500, C67500', FPM: '30 - 80' },
            { material: 'Wrought aluminum', designation: '6061-T6, 5000, 6000, and 7000 series.', FPM: '165' },
            { material: 'Cast aluminum', designation: 'Sand and permanent mold casting alloys', FPM: '165' },
        ],
        drilling: [
            { material: 'Free machining plain carbon steels(resulfurized)', designation: '1212, 1213, 1215', Drilling: '120 - 125', Reaming: '80' },
            { material: 'Free machining plain carbon steels', designation: '1108, 1109, 1115, 1117, 1118, 1120, 1126, 1211', Drilling: '100 - 120', Reaming: '75 - 80' },
            { material: 'Free machining plain carbon steels', designation: '1132, 1137, 1139, 1140, 1144, 1146, 1151', Drilling: '35 - 70', Reaming: '20 - 45' },
            { material: 'Free machining plain carbon steels(Leaded)', designation: '11L17, 11L18, 12L13, 12L14', Drilling: '90 - 130', Reaming: '60 - 85' },
            { material: 'Plain carbon steels', designation: '1006, 1008, 1009, 1010, 1012, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1513, 1514', Drilling: '60 - 100', Reaming: '40 - 65' },
            { material: 'Plain carbon steels', designation: '1027, 1030, 1033, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1045, 1046, 1048, 1049, 1050, 1052, 1524, 1526, 1527, 1541', Drilling: '25 - 90', Reaming: '15 - 60' },
            { material: 'Free machining alloy steels(resulfurized)', designation: '4140, 4150', Drilling: '30 - 90', Reaming: '15 - 60' },
            { material: 'Water hardening tool steel', designation: 'W1, W2, W5', Drilling: '85', Reaming: ' 55' },
            { material: 'Cold work, oil hardening tool steel', designation: 'O1, O2, O6, O7', Drilling: '45', Reaming: '30' },
            { material: 'Cold work, air hardening tool steel', designation: '	A2, A3, A4, A6, A7, A8, A9, A10', Drilling: '30 - 50', Reaming: '20 - 35' },
            { material: 'Stainless steels(Austenitic)', designation: '201, 202, 301, 302, 304, 304L, 305, 308, 321, 347, 348', Drilling: '50 - 55', Reaming: '30 - 35' },
            { material: 'Cast Iron	ASTM Class', designation: '20, 25, 30, 35, 40', Drilling: '80 - 100', Reaming: '50 - 65' },
            { material: ' Brass', designation: 'C35600, C37700, C36000, C33200, C34200, C35300, C48500, C34000', Drilling: '160 - 175', Reaming: '160 - 175' },
            { material: 'Bronze', designation: 'C65500, C22600, C65100, C67500', Drilling: '120 - 140', Reaming: '110 - 120' },
            { material: 'Wrought aluminum', designation: '6061-T6, 5000, 6000, and 7000 series.', Drilling: '350 - 400', Reaming: ' 350 - 400' },
            { material: 'Cast aluminum', designation: 'Sand and permanent mold casting alloys', Drilling: '350 - 400', Reaming: '350 - 400' },
        ],
    };

    const handleOperationChange = (operation) => {
        setSelectedOperation(operation);
    };

    return (
        <div className="cutting-speed-table">
            <h2 className='title'>Cutting Speed Tables</h2>
            <div className="operation-buttons">
                {Object.keys(operations).map((operation) => (
                    <button
                        key={operation}
                        onClick={() => handleOperationChange(operation)}
                        className={selectedOperation === operation ? 'active' : ''}
                    >
                        {operations[operation]}
                    </button>
                ))}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Material</th>
                        <th>AISI/SAE/ASTM Designation</th>
                        {selectedOperation === "turning" && <th>HSS Feet/Minute</th>}
                        {selectedOperation === "turning" && <th>Carbide Feet/Minute</th>}
                        {selectedOperation === "milling" && <th>FPM</th>}
                        {selectedOperation === "drilling" && <th>Drilling</th>}
                        {selectedOperation === "drilling" && <th>Reaming</th>}
                    </tr>
                </thead>
                <tbody>
                    {cuttingSpeedData[selectedOperation].map((data, index) => (
                        <tr key={index}>
                            <td>{data.material}</td>
                            <td>{data.designation}</td>
                            {selectedOperation === "turning" && <td>{data.hss}</td>}
                            {selectedOperation === "turning" && <td>{data.carbide}</td>}
                            {selectedOperation === "milling" && <td>{data.FPM}</td>}
                            {selectedOperation === "drilling" && <td>{data.Drilling}</td>}
                            {selectedOperation === "drilling" && <td>{data.Reaming}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CuttingSpeedTable;
