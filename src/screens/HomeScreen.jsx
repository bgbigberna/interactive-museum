import React from 'react';
import '../Styles/HomeScreen.css';
import lightbulbImg from '../Assets/images/lightbulb.png';
import eletricPenImg from '../Assets/images/eletric-pen.png';
import phonographImg from '../Assets/images/phonograph.png';
import kinetoschopeImg from '../Assets/images/Kinetoscopio.png';
import kinetophoneImg from '../Assets/images/kinetophone.jpg';
import kinetographImg from '../Assets/images/kinetograph.jpg';
import tableImg from '../Assets/images/table.png';
import edisonImg from '../Assets/images/Thomas_Edison2.jpg';
import idleRobot from '../Assets/images/robot_sprite_idle.png';
import talkingRobot from '../Assets/images/robot_talk_full_loop.gif';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const facts = {
  lightbulb: "Lightbulb test",
  eletricPen: "Eletric pen test",
  phonograph: "Phonograph test",
  kinetoschope: "Kinetoschope test"
};


const Robot = ({ fact, className }) => {
  const [isTalking, setIsTalking] = useState(false);
  const synthRef = useRef(window.speechSynthesis);

  useEffect(() => {
    if (fact) {
      setIsTalking(true);
      const utterance = new SpeechSynthesisUtterance(fact);
      utterance.onend = () => {
        setIsTalking(false);
      };
      synthRef.current.cancel(); // Evita sobreposição de falas
      synthRef.current.speak(utterance);
    }
  }, [fact]);

  return (
    <img 
      src={isTalking ? talkingRobot : idleRobot} 
      alt="Robot"
      className={className}
    />
  );
};


const HomeScreen = () => {
  const navigate = useNavigate();
  const [currentFact, setCurrentFact] = useState(null);

  // Fala automática ao entrar
  useEffect(() => {
    setCurrentFact("Welcome to Thomas Edison's Interactive Musem!");
  }, []);

  return (
    <div className="home-screen-container">
      <div className='museum-title-container'>
        <h1 className="museum-title">Thomas Edison's Interactive Museum</h1>
      </div>
      <div className='Grid-container'>
        {/* Frames */}
        <div className="museum-frame">
          {/* Thomas Edison */}
          <img src={edisonImg} alt="Thomas Edison" className="edison-img" style={{ cursor: 'pointer' }} />
        </div>

        {/* Kinetophone */}
        <img src={kinetophoneImg} alt="Kinetophone" className="kinetophone-img" style={{ cursor: 'pointer' }} />

        {/* Kinetoschope */}
        <img src={kinetographImg} alt="Kinetograph" className="kinetograph-img" style={{ cursor: 'pointer' }} />

        {/* Mesa */}
        <img src={tableImg} alt="Table 1" className="table-img1" />
        <img src={tableImg} alt="Table 2" className="table-img2" />
        

        {/* Light bulb por cima */}
        <img src={lightbulbImg} 
        alt="Light Bulb" 
        className="lightbulb-overlay" 
        onMouseEnter={() => setCurrentFact(facts.lightbulb)} 
        onMouseLeave={() => setCurrentFact(null)}
        style={{ cursor: 'pointer' }} 
        onClick={() => navigate('/video')}/>
        
        
        {/* Eletric pen */}
        <img src={eletricPenImg} 
        alt="Eletric Pen" 
        className="eletricpen-overlay"
        onMouseEnter={() => setCurrentFact(facts.eletricPen)} 
        onMouseLeave={() => setCurrentFact(null)} 
        style={{ cursor: 'pointer' }} />

        {/* Phonograph */}
        <img src={phonographImg} 
        alt="Phonograph" 
        className="phonograph-overlay"
        onMouseEnter={() => setCurrentFact(facts.phonograph)} 
        onMouseLeave={() => setCurrentFact(null)}
        style={{ cursor: 'pointer' }} />

        {/* Kinetoschope */}
        <img src={kinetoschopeImg} 
        alt="Kinetoschope" 
        className="kinetoschope-overlay" 
        onMouseEnter={() => setCurrentFact(facts.kinetoschope)} 
        onMouseLeave={() => setCurrentFact(null)}
        style={{ cursor: 'pointer' }} />
      </div>

      <Robot fact={currentFact} className='robot'/>

    </div>
  );
};

export default HomeScreen;