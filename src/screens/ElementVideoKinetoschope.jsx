import React from 'react';
import Navbar from '../components/Navbar';
import VideoPlayerWithMarkersKinetoschope from '../components/VideoPlayerWithMarkersKinetoschope';
import '../Styles/ElementScreen.css';
import imageSrc from '../Assets/images/Kinetoscopio.png';

const ElementVideoKinetoschope = () => {
  return (
    <div className="element-screen">
      
        <div>
          <h2 className="museum-title">Kinetoscope - Video</h2>
        </div>
        <div className='image-content-container'>
          <div className='image-container'>
            <img src={imageSrc} alt="Museum of Illusions" className='image'/>
          </div>
          <VideoPlayerWithMarkersKinetoschope/>
      </div>
      <Navbar />
    </div>
  );
};

export default ElementVideoKinetoschope;