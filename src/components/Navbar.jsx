import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBook, FaVideo } from 'react-icons/fa';
import '../Styles/ElementScreen.css';

const Navbar = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/home" className="nav-item">
        <FaHome size={24} />
        <span>Home</span>
      </Link>
      <Link to="/description" className="nav-item">
        <FaInfoCircle size={24} />
        <span>Description</span>
      </Link>
      <Link to="/history" className="nav-item">
        <FaBook size={24} />
        <span>History</span>
      </Link>
      <Link to="/video" className="nav-item">
        <FaVideo size={24} />
        <span>Video</span>
      </Link>
    </nav>
  );
};

export default Navbar;