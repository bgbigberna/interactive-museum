import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';

const ElementVideo = () => {
  return (
    <div className="element-screen">
      <Navbar />
      <h2>Incandescent Light Bulb - Video</h2>
      <video width="640" height="360" controls>
        <source src="../assets/videos/lightbulb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Watch this short documentary on the invention of the light bulb.</p>
    </div>
  );
};

export default ElementVideo;