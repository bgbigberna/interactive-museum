import React from 'react';
import Navbar from '../components/Navbar';
import VideoPlayerWithMarkersEletricPen from '../components/VideoPlayerWithMarkersEletricPen';
import '../Styles/ElementScreen.css';
import imageSrc from '../Assets/images/eletric-pen.png';

const ElementVideoEletricPen = () => {
  return (
    <div className="element-screen">
      
        <div>
          <h2 className="museum-title">EletricPen - Video</h2>
        </div>
        <div className='image-content-container'>
          <div className='image-container'>
            <img src={imageSrc} alt="Museum of Illusions" className='image'/>
          </div>
          <VideoPlayerWithMarkersEletricPen/>
      </div>
      <Navbar />
    </div>
  );
};

export default ElementVideoEletricPen;