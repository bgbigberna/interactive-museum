import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBook, FaVideo } from 'react-icons/fa';
import '../Styles/ElementScreen.css';

const Navbar = () => {
  const location = useLocation();

  // Try to extract the invention from the current path
  const match = location.pathname.match(/_(bulb|kinetoschope|eletricpen|phonograph)$/);
  const invention = match ? match[1] : null;

  // Build dynamic paths
  const descriptionPath = invention ? `/description_${invention}` : '/description';
  const historyPath     = invention ? `/history_${invention}`     : '/history';
  const videoPath       = invention ? `/video_${invention}`       : '/video';

  return (
    <nav className="bottom-nav">
      <Link to="/" className={`nav-item${location.pathname === '/' ? ' active' : ''}`}>
        <FaHome size={24} />
        <span>Home</span>
      </Link>
      <Link to={descriptionPath} className={`nav-item${location.pathname === descriptionPath ? ' active' : ''}`}>
        <FaInfoCircle size={24} />
        <span>Description</span>
      </Link>
      <Link to={historyPath} className={`nav-item${location.pathname === historyPath ? ' active' : ''}`}>
        <FaBook size={24} />
        <span>History</span>
      </Link>
      <Link to={videoPath} className={`nav-item${location.pathname === videoPath ? ' active' : ''}`}>
        <FaVideo size={24} />
        <span>Video</span>
      </Link>
    </nav>
  );
};

export default Navbar;