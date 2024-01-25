import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navigation = () => {
  return (
    <div className="header-container">
      <nav>
        <ul className="nav-pages">
          <li>
            <Link to="/" className="link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/charts" className="link">
              Charts
            </Link>
          </li>
          <li>
            <Link to="/calender" className="link">
              Calender
            </Link>
          </li>
          <li>
            <Link to="/maps" className="link">
              Maps
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
