import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/StartScreen.css' 

const StartScreen = () => {
  const navigate = useNavigate();

  return (
    <div className='StartScreenContainer'>
      <div className="start-screen">
        <div className="start-museum-title-container">
          <h1 className="start-museum-title">Thomas Edison's Interactive Museum</h1>
        </div>
        <div className='StartScreenButtonContainer'>
          <button onClick={() => navigate('/home')} className="btn">Start</button>
          <button className="btn">Options</button>
        </div>
      </div>
    </div>
    
  );
};

export default StartScreen;