import React from 'react';
import Navbar from '../components/Navbar';
import VideoPlayerWithMarkersPhonograph from '../components/VideoPlayerWithMarkersPhonograph';
import '../Styles/ElementScreen.css';
import imageSrc from '../Assets/images/phonograph.png';

const ElementVideoPhonograph = () => {
  return (
    <div className="element-screen">
      
        <div>
          <h2 className="museum-title">Phonograph - Video</h2>
        </div>
        <div className='image-content-container'>
          <div className='image-container'>
            <img src={imageSrc} alt="Museum of Illusions" className='image'/>
          </div>
          <VideoPlayerWithMarkersPhonograph/>
      </div>
      <Navbar />
    </div>
  );
};

export default ElementVideoPhonograph;