import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/HomeScreen.css';
import lightbulbImg from '../Assets/images/lightbulb.png';
import eletricPenImg from '../Assets/images/eletric-pen.png';
import phonographImg from '../Assets/images/phonograph.png';
import kinetoschopeImg from '../Assets/images/Kinetoscopio.png';
import kinetophoneImg from '../Assets/images/kinetophone.jpg';
import kinetographImg from '../Assets/images/kinetograph.jpg';
import tableImg from '../Assets/images/table.png';
import edisonImg from '../Assets/images/Thomas_Edison2.jpg';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <h1 className="museum-title">Thomas Edison's Interactive Museum</h1>

      {/* Frames */}
      <div className="museum-frame">
        {/* Thomas Edison */}
        <img src={edisonImg} alt="Thomas Edison" className="edison-img" style={{ cursor: 'pointer' }} />
      </div>

      {/* Kinetophone */}
      <img src={kinetophoneImg} alt="Kinetophone" className="kinetophone-img" style={{ cursor: 'pointer' }} />

      {/* Kinetoschope */}
      <img src={kinetographImg} alt="Kinetograph" className="kinetograph-img" style={{ cursor: 'pointer' }} />

      {/* Mesa */}
      <div className="tables-row">
      <img src={tableImg} alt="Table 1" className="table-img" />
      <img src={tableImg} alt="Table 2" className="table-img" />
      </div>

      {/* Light bulb por cima */}
      <Link to="/video">
      <img src={lightbulbImg} alt="Light Bulb" className="lightbulb-overlay" style={{ cursor: 'pointer' }} />
      </Link>
      
      {/* Eletric pen */}
      <img src={eletricPenImg} alt="Eletric Pen" className="eletricpen-overlay" style={{ cursor: 'pointer' }} />

      {/* Phonograph */}
      <img src={phonographImg} alt="Phonograph" className="phonograph-overlay" style={{ cursor: 'pointer' }} />

      {/* Kinetoschope */}
      <img src={kinetoschopeImg} alt="Kinetoschope" className="kinetoschope-overlay" style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default HomeScreen;