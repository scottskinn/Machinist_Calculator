import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import './machiningApp.css';
import { DarkModeToggle } from '../themes/toggleDark';

const MachiningApp = () => {
    const location = useLocation();
    const [showConversionTable, setShowConversionTable] = useState(true);

    // Function to convert value from imperial to metric
    const convertToMetric = (value) => {
        const convertedValue = value * 25.4;
        return convertedValue.toFixed(3);
    };

    // Function to calculate the greatest common divisor (GCD) using Euclidean algorithm
    const calculateGCD = (a, b) => {
        if (b === 0) {
            return a;
        }
        return calculateGCD(b, a % b);
    };

    // Generate the conversion table rows
    const conversionTable = [];
    let numerator = 1;
    let denominator = 64;
    while (numerator <= 64) {
        const gcd = calculateGCD(numerator, denominator);
        const reducedNumerator = numerator / gcd;
        const reducedDenominator = denominator / gcd;
        const value = `${reducedNumerator}/${reducedDenominator}`;
        conversionTable.push(
            <tr key={value}>
                <td>{value}</td>
                <td>{(numerator / denominator).toFixed(4)}</td>
                <td>{convertToMetric(reducedNumerator / reducedDenominator)}</td>
            </tr>
        );
        numerator++;
    }

    const handleLinkClick = () => {
        setShowConversionTable(false);
    };

    return (
        <div className="home">
            <h1>
                <Link className="title" to="/" onClick={() => setShowConversionTable(true)}>
                    Machinist App
                </Link>
            </h1>

            <DarkModeToggle />

            <nav className="nav">
                <ul>
                    <li>
                        <Link
                            className={`links ${location.pathname === '/cutting-speed' ? 'active' : ''}`}
                            to="/cutting-speed"
                            onClick={handleLinkClick}
                        >
                            Cutting Speed
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`links ${location.pathname === '/feed-rates' ? 'active' : ''}`}
                            to="/feed-rates"
                            onClick={handleLinkClick}
                        >
                            Feed Rates
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`links ${location.pathname === '/rpm' ? 'active' : ''}`}
                            to="/rpm"
                            onClick={handleLinkClick}
                        >
                            RPM
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`links ${location.pathname === '/inchPerTooth' ? 'active' : ''}`}
                            to="/inchPerTooth"
                            onClick={handleLinkClick}
                        >
                            IPT
                        </Link>
                    </li>
                </ul>
            </nav>

            {showConversionTable && (
                <div className="conversion-table">
                    <h2>Conversion Table</h2>
                    <table>
                        <colgroup>
                            <col className="column" />
                            <col className="column" />
                            <col className="column" />
                            <col className="column" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>Fraction</th>
                                <th>Imperial</th>
                                <th>Metric</th>
                            </tr>
                        </thead>
                        <tbody>{conversionTable}</tbody>
                    </table>
                </div>
            )}

            <Outlet />
        </div>
    );
};

export default MachiningApp;
