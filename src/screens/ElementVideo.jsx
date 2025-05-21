import React from 'react';
import Navbar from '../components/Navbar';
import VideoPlayerWithMarkers from '../components/VideoPlayerWithMarkers';
import '../Styles/ElementScreen.css';

const ElementVideo = () => {
  return (
    <div className="element-screen">
      <div>
        <h2 className="museum-title">Incandescent Light Bulb - Video</h2>
      </div>
      <VideoPlayerWithMarkers/>
      <Navbar />
    </div>
  );
};

export default ElementVideo;