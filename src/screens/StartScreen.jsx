import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/HomeScreen.css' 

const StartScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="start-screen">
      <h1>Thomas Edison's Interactive Museum</h1>
      <button onClick={() => navigate('/home')} className="start-btn">Start</button>
      <button className="options-btn">Options</button>
    </div>
  );
};

export default StartScreen;