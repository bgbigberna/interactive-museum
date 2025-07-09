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
  lightbulb: "The lightbulb is great. The stuff Edison is known for. Did you know there were others that contributed to the development of the lightbulb?",
  eletricPen: "Looks like just a pen, but it buzzed like a bee. Did you know Edison’s Electric Pen helped inspire the modern tattoo machine?",
  phonograph: "The first machine to play back sound. Did you know Edison’s first recording was ‘Mary had a little lamb’?",
  kinetoschope: "Old-school movie magic! Did you know Edison’s Kinetoscope showed films to one person at a time through a peephole?",
  edison_photo: "The man himself! He had a hand in many areas such as: electric power generation, mass communication, sound recording, and motion pictures.",
  kinetophone_photo: "The Kinetophone aimed to bring movies to life — with sound! Edison’s early take on talking pictures.",
  kinetograph_photo: "Lights, camera... invention! The Kinetograph was Edison’s early motion picture camera — a big leap for filmmaking.",
  robot: "Why are you touching me? I wasn't made by Edison.."
};

const Robot = ({ fact, setFact, className }) => {
  const [isTalking, setIsTalking] = useState(false);
  const synthRef = useRef(window.speechSynthesis);

  useEffect(() => {
    if (fact) {
      setIsTalking(true);
      const utterance = new SpeechSynthesisUtterance(fact);
      utterance.lang = 'en-US';
      utterance.onend = () => setIsTalking(false);
      synthRef.current.cancel();
      synthRef.current.speak(utterance);
    } else {
      synthRef.current.cancel();
      setIsTalking(false);
    }
  }, [fact]);

  return (
    <div className="robot-container">
      {fact && <div className="speech-bubble">{fact}</div>}
      <img 
        src={isTalking ? talkingRobot : idleRobot} 
        alt="Robot"
        className="robot"
        onMouseEnter={() => setFact(facts.robot)}
        onMouseLeave={() => setFact(null)}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

const HomeScreen = () => {
  const navigate = useNavigate(); 
  const [currentFact, setCurrentFact] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    setCurrentFact("Welcome to Thomas Edison's Interactive Musem! " +
      "You can hover over any object and click on it to obtain an informative video about that object. " +
      "I recommend starting out with the light bulb.");
  }, []);

  const getOverlayClass = (name) => {
    if (!hoveredItem) return 'overlay-glow';
    if (hoveredItem === name) return 'glow-static';
    return 'no-glow';
  };

  return (
    <div className="home-screen-container">
      <div className='museum-title-container'>
        <h1 className="museum-title">Thomas Edison's Interactive Museum</h1>
      </div>

      <div className='Grid-container'>
        {/* Edison */}
        <div className="museum-frame">
          <img
            src={edisonImg}
            alt="Thomas Edison"
            className={`edison-img ${getOverlayClass('edison')}`}
            onMouseEnter={() => { setHoveredItem('edison'); setCurrentFact(facts.edison_photo); }}
            onMouseLeave={() => { setHoveredItem(null); setCurrentFact(null); }}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* Kinetophone */}
        <img
          src={kinetophoneImg}
          alt="Kinetophone"
          className={`kinetophone-img ${getOverlayClass('kinetophone')}`}
          onMouseEnter={() => { setHoveredItem('kinetophone'); setCurrentFact(facts.kinetophone_photo); }}
          onMouseLeave={() => { setHoveredItem(null); setCurrentFact(null); }}
          style={{ cursor: 'pointer' }}
        />

        {/* Kinetograph */}
        <img
          src={kinetographImg}
          alt="Kinetograph"
          className={`kinetograph-img ${getOverlayClass('kinetograph')}`}
          onMouseEnter={() => { setHoveredItem('kinetograph'); setCurrentFact(facts.kinetograph_photo); }}
          onMouseLeave={() => { setHoveredItem(null); setCurrentFact(null); }}
          style={{ cursor: 'pointer' }}
        />

        {/* Tables */}
        <img src={tableImg} alt="Table 1" className="table-img1" />
        <img src={tableImg} alt="Table 2" className="table-img2" />

        {/* Light Bulb */}
        <img
          src={lightbulbImg}
          alt="Light Bulb"
          className={`lightbulb-overlay ${getOverlayClass('lightbulb')}`}
          onMouseEnter={() => { setHoveredItem('lightbulb'); setCurrentFact(facts.lightbulb); }}
          onMouseLeave={() => { setHoveredItem(null); setCurrentFact(null); }}
          style={{ cursor: 'pointer' }}
          onClick={() => { setCurrentFact(null); navigate('/video_bulb'); }}
        />

        {/* Electric Pen */}
        <img
          src={eletricPenImg}
          alt="Electric Pen"
          className={`eletricpen-overlay ${getOverlayClass('eletricPen')}`}
          onMouseEnter={() => { setHoveredItem('eletricPen'); setCurrentFact(facts.eletricPen); }}
          onMouseLeave={() => { setHoveredItem(null); setCurrentFact(null); }}
          style={{ cursor: 'pointer' }}
          onClick={() => { setCurrentFact(null); navigate('/video_eletricpen'); }}
        />

        {/* Phonograph */}
        <img
          src={phonographImg}
          alt="Phonograph"
          className={`phonograph-overlay ${getOverlayClass('phonograph')}`}
          onMouseEnter={() => { setHoveredItem('phonograph'); setCurrentFact(facts.phonograph); }}
          onMouseLeave={() => { setHoveredItem(null); setCurrentFact(null); }}
          style={{ cursor: 'pointer' }}
          onClick={() => { setCurrentFact(null); navigate('/video_phonograph'); }}
        />

        {/* Kinetoschope */}
        <img
          src={kinetoschopeImg}
          alt="Kinetoschope"
          className={`kinetoschope-overlay ${getOverlayClass('kinetoschope')}`}
          onMouseEnter={() => { setHoveredItem('kinetoschope'); setCurrentFact(facts.kinetoschope); }}
          onMouseLeave={() => { setHoveredItem(null); setCurrentFact(null); }}
          style={{ cursor: 'pointer' }}
          onClick={() => { setCurrentFact(null); navigate('/video_kinetoschope'); }}/>
      </div>

      <Robot fact={currentFact} setFact={setCurrentFact} className='robot'/>
    </div>
  );
};

export default HomeScreen;