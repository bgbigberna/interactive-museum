import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import phonograph from '../Assets/images/phonograph.png';

const ElementDescriptionPhonograph = () => {
  return (
    <div className="element-screen">
      <div>
        <h2 className="museum-title">Phonograph - Description</h2>
      </div>
      <div className='image-content-container'>
        <div className='image-container'>
          <img src={phonograph} alt="Museum of Illusions" className='image'/>
        </div>
        <div className='text-container'>
          <p className='text'>
            The phonograph is one of Thomas Edison’s most famous inventions, 
            created in 1877. It was the first device capable of recording and 
            reproducing sound. The machine worked by using a stylus to etch sound 
            vibrations into a rotating cylinder covered in tin foil. When the 
            cylinder was rotated again, the stylus would follow the grooves and 
            reproduce the original sounds. This groundbreaking technology laid 
            the foundation for the music recording industry, audiobooks, and 
            sound archives. Edison’s phonograph transformed how people experienced 
            music and voice recordings, making sound something that could be stored, 
            shared, and replayed. The phonograph evolved into the modern record 
            player and inspired generations of audio technology.
          </p>
        </div>
        
      </div>
      <Navbar />
    </div>
  );
};

export default ElementDescriptionPhonograph;