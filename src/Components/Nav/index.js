import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <nav>
      <div className="nav-wrapper #000000">
        <Link to="/" className="brand-logo left">
          Kamal Majhi
        </Link>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/api1">Api1</Link>
          </li>
          <li>
            <Link to="/api2">Api2</Link>
          </li>
          <li>
            <Link to="/api3">Api3</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Index;
