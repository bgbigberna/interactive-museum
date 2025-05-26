import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import kinetoscope from '../Assets/images/Kinetoscopio.png';

const ElementDescriptionKinetoschope = () => {
  return (
    <div className="element-screen">
      <div>
        <h2 className="museum-title">Kinetoscope - Description</h2>
      </div>
      <div className='image-content-container'>
        <div className='image-container'>
          <img src={kinetoscope} alt="Museum of Illusions" className='image'/>
        </div>
        <div className='text-container'>
          <p className='text'>
            The Kinetoscope is an early motion picture exhibition device. 
            It was designed for films to be viewed by one individual at a time through a peephole viewer. 
            The Kinetoscope was developed by Thomas Edison and his team in the late 19th century. 
            It played a crucial role in the development of the film industry and paved the way 
            for future motion picture technologies.
          </p>
        </div>
        
      </div>
      <Navbar />
    </div>
  );
};

export default ElementDescriptionKinetoschope;