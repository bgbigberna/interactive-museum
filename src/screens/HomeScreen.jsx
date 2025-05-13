import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/HomeScreen.css';
import lightbulbImg from '../Assets/images/lightbulb.png';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <h1 className="museum-title">Thomas Edison's Interactive Museum</h1>
      <div className="gallery">
        <div className="gallery-item">
          <img src={lightbulbImg} alt="Light Bulb" className="gallery-img" />
          <p>Incandescent Light Bulb</p>
          <div className="buttons">
            <Link to="/description" className="btn">Description</Link>
            <Link to="/history" className="btn">History</Link>
            <Link to="/video" className="btn">Video</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;