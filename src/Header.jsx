import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/about");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <button onClick={handleclick}>clickme</button>
    </nav>
  );
};

export default Header;
