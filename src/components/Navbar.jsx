import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBook, FaVideo } from 'react-icons/fa';
import '../Styles/ElementScreen.css';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bottom-nav">
      <Link to="/home" className={`nav-item ${location.pathname === '/home' ? 'active' : ''}`}>
        <FaHome size={24} />
        <span>Home</span>
      </Link>
      <Link to="/description" className={`nav-item ${location.pathname === '/description' ? 'active' : ''}`}>
        <FaInfoCircle size={24} />
        <span>Description</span>
      </Link>
      <Link to="/history" className={`nav-item ${location.pathname === '/history' ? 'active' : ''}`}>
        <FaBook size={24} />
        <span>History</span>
      </Link>
      <Link to="/video" className={`nav-item ${location.pathname === '/video' ? 'active' : ''}`}>
        <FaVideo size={24} />
        <span>Video</span>
      </Link>
    </nav>
  );
};

export default Navbar;