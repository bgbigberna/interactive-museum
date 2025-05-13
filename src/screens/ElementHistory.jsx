import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import bulb from '../Assets/images/lightbulb.png';

const ElementHistory = () => {
  return (
    <div className="element-screen">
      <Navbar />
      <h2>Incandescent Light Bulb - History</h2>
      <img src={bulb} alt="Light Bulb" className="element-img" />
      <p>
        Although Edison is often credited with inventing the light bulb, he improved upon earlier designs
        to make it practical for everyday use. His team worked on it in Menlo Park, achieving a breakthrough in 1879.
      </p>
    </div>
  );
};

export default ElementHistory;