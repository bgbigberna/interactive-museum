import React from 'react';
import Navbar from '../components/Navbar';
import VideoPlayerWithMarkers from '../components/VideoPlayerWithMarkers';
import '../Styles/ElementScreen.css';

const ElementVideo = () => {
  return (
    <div className="element-screen">
      <Navbar />
      <h2>Incandescent Light Bulb - Video</h2>
      <VideoPlayerWithMarkers/>
      <p>Watch this short documentary on the invention of the light bulb.</p>
    </div>
  );
};

export default ElementVideo;