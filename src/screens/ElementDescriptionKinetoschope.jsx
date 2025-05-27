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
            The Kinetoscope was an early motion picture exhibition 
            device designed for individual viewing. Invented by 
            Thomas Edison and his assistant William Kennedy Laurie 
            Dickson in the early 1890s, it was a forerunner of modern 
            film projectors. The device used a continuous strip 
            of perforated film that passed over a light source 
            with a rapidly spinning shutter. Viewers would look 
            through a peephole to see a sequence of moving images, 
            creating the illusion of motion. The Kinetoscope was 
            revolutionary for its time, offering a new form of visual 
            entertainment. It laid the groundwork for the development 
            of cinema and had a profound impact on the entertainment industry.
          </p>
        </div>
        
      </div>
      <Navbar />
    </div>
  );
};

export default ElementDescriptionKinetoschope;