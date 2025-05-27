import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import kinetoschope from '../Assets/images/Kinetoscopio.png';

const ElementHistoryKinetoschope = () => {
  return (
    <div className="element-screen">
      <div>
        <h2 className="museum-title">Kinetoscope - History</h2>
      </div>
      <div className='image-content-container'>
        <div className='image-container'>
          <img src={kinetoschope} alt="Kinetoscope" className="image" />
        </div>
        <div className='text-container'>
          <p className='text'>
            Edison began working on the Kinetoscope in the late 1880s, 
            inspired by the idea of "visual phonography"—recording 
            images just as he had recorded sound. With Dickson’s 
            technical expertise, the first working prototype was 
            completed in 1891. In 1894, the first Kinetoscope parlors 
            opened in New York, where customers paid to view short 
            films through individual machines. Although the Kinetoscope 
            was not a projector and could not show films to large 
            audiences, it sparked widespread interest in motion pictures. 
            Competitors soon developed projection systems, leading to the 
            rapid evolution of cinema. Despite being surpassed by more 
            advanced technologies, the Kinetoscope represents a pivotal 
            moment in film history. It marked the beginning of motion 
            picture storytelling and visual entertainment as we know it today.
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ElementHistoryKinetoschope;