import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/description">📄</Link>
      <Link to="/history">📜</Link>
      <Link to="/video">🎥</Link>
      <Link to="/">🏠</Link>
    </nav>
  );
};

export default Navbar;