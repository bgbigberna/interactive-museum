import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import bulb from '../Assets/images/lightbulb.png';

const ElementDescription = () => {
  return (
    <div className="element-screen">
      <Navbar />
      <h2>Incandescent Light Bulb - Description</h2>
      <img src={bulb} alt="Light Bulb" className="element-img" />
      <p>
        The incandescent light bulb is one of Thomas Edison’s most famous inventions.
        This device produces light by heating a filament wire to a high temperature.
      </p>
    </div>
  );
};

export default ElementDescription;