import React from 'react';
import Navbar from '../components/Navbar';
import VideoPlayerWithMarkers from '../components/VideoPlayerWithMarkers';
import '../Styles/ElementScreen.css';
import imageSrc from '../Assets/images/lightbulb.png';

const ElementVideo = () => {
  return (
    <div className="element-screen">
      
        <div>
          <h2 className="museum-title">Incandescent Light Bulb - Video</h2>
        </div>
        <div className='image-content-container'>
          <div className='image-container'>
            <img src={imageSrc} alt="Museum of Illusions" className='image'/>
          </div>
          <VideoPlayerWithMarkers/>
      </div>
      <Navbar />
    </div>
  );
};

export default ElementVideo;