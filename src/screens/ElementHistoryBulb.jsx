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
      <div className='image-content-container'>
        <div className='image-container'>
          <img src={bulb} alt="Light Bulb" className="image" />
        </div>
        <div className='text-container'>
          <p className='text'>
            Although Edison is often credited with inventing the light bulb, he improved upon earlier designs
            to make it practical for everyday use. His team worked on it in Menlo Park, achieving a breakthrough in 1879.
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ElementHistoryBulb;