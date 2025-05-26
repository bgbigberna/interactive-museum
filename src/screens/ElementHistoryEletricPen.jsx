import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import eletricpen from '../Assets/images/eletric-pen.png';

const ElementHistoryEletricPen = () => {
  return (
    <div className="element-screen">
      <div>
        <h2 className="museum-title">Electric Pen - History</h2>
      </div>
      <div className='image-content-container'>
        <div className='image-container'>
          <img src={eletricpen} alt="Electric Pen" className="image" />
        </div>
        <div className='text-container'>
          <p className='text'>
            The Electric Pen, invented by Thomas Edison in 1876, was an early type of electric pen that used a vibrating needle to create ink marks on paper. 
            It was primarily designed for the purpose of copying documents and was one of the first devices to use electric power for writing.
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ElementHistoryEletricPen;