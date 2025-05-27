import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import bulb from '../Assets/images/lightbulb.png';

const ElementHistoryBulb = () => {
  return (
    <div className="element-screen">
      <div>
        <h2 className="museum-title">Incandescent Light Bulb - History</h2>
      </div>
      <div className="image-content-container">
        <div className="image-container">
          <img src={bulb} alt="Light Bulb" className="image" />
        </div>
        <div className="text-container">
          <p className="text">
            Although Edison is often credited with inventing the light bulb,
            many inventors before him, such as Humphry Davy and Joseph Swan,
            had developed early versions. What set Edison apart was his ability
            to create a bulb that was both practical and commercially viable.
            In 1879, after testing thousands of materials, Edison and his team
            at Menlo Park found that a carbonized bamboo filament could last
            up to 1,200 hours. This breakthrough led to the mass production of
            incandescent bulbs and the establishment of electric lighting systems.
            Edison’s invention laid the groundwork for the electrification of
            homes and cities around the world. His contributions went beyond
            the bulb itself; he also developed the infrastructure, including
            power generation and distribution systems, to support it.
            This holistic approach to invention helped solidify Edison’s legacy
            as one of the greatest innovators of all time.
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ElementHistoryBulb;