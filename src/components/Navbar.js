import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>React Course Portfolio</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Team</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/hooks">Hooks Demo</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;