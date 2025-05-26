import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import kinetoschope from '../Assets/images/Kinetoscopio.png';

const ElementHistoryKinetoschope = () => {
  return (
    <div className="element-screen">
      <div>
        <h2 className="museum-title">Kinetoscope - History</h2>
      </div>
      <div className='image-content-container'>
        <div className='image-container'>
          <img src={kinetoschope} alt="Kinetoscope" className="image" />
        </div>
        <div className='text-container'>
          <p className='text'>
            The Kinetoscope, invented by Thomas Edison in the late 19th century, was an early motion picture exhibition device. 
            It consisted of a wooden cabinet containing a film reel and a viewing window, allowing individuals to watch short films through a peephole.
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ElementHistoryKinetoschope;