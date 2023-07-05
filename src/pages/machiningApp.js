import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import './machiningApp.css';

const MachiningApp = () => {
  const location = useLocation();

  return (
    <div className="home">
      <h1>
        <Link className="title" to="/">Machinist App</Link>
      </h1>

      <nav className="nav">
        <ul>
          <li>
            <Link className={`links ${location.pathname === '/cutting-speed' ? 'active' : ''}`} to="./cutting-speed">Cutting Speed</Link>
          </li>
          <li>
            <Link className={`links ${location.pathname === '/feed-rates' ? 'active' : ''}`} to="./feed-rates">Feed Rates</Link>
          </li>
          <li>
            <Link className={`links ${location.pathname === '/rpm' ? 'active' : ''}`} to="./rpm">RPM</Link>
          </li>
          <li>
            <Link className={`links ${location.pathname === '/ipt' ? 'active' : ''}`} to="./inchPerTooth">IPT</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default MachiningApp;
