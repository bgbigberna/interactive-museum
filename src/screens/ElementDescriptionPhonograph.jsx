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
            The phonograph, invented by Thomas Edison in 1877, was the first device capable of recording and reproducing sound. 
            It used a cylinder covered in tinfoil to capture sound waves, which were then played back by a needle tracing the grooves on the cylinder. 
            The phonograph revolutionized the music industry and paved the way for modern audio recording and playback technologies.
          </p>
        </div>
        
      </div>
      <Navbar />
    </div>
  );
};

export default ElementDescriptionPhonograph;