import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import bulb from '../Assets/images/lightbulb.png';
import { useState, useEffect, useRef } from 'react';

const ElementHistoryBulb = () => {
  const fullText = `Although Edison is often credited with inventing the light bulb,
            many inventors before him, such as Humphry Davy and Joseph Swan,
            had developed early versions. What set Edison apart was his ability
            to create a bulb that was both practical and commercially viable.
            In 1879, after testing thousands of materials, Edison and his team
            at Menlo Park found that a carbonized bamboo filament could last
            up to 1,200 hours. This breakthrough led to the mass production of
            incandescent bulbs and the establishment of electric lighting systems.
            Edison’s invention laid the groundwork for the electrification of
            homes and cities around the world. His contributions went beyond
            the bulb itself; he also developed the infrastructure, including
            power generation and distribution systems, to support it.
            This holistic approach to invention helped solidify Edison’s legacy
            as one of the greatest innovators of all time.`;
  const words = fullText.split(/(\s+)/); // include spaces so spacing is preserved
  const [currentWordIndex, setCurrentWordIndex] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);

  const speak = () => {
    if (isSpeaking) return;

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'en-US';

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      setCurrentWordIndex(null);
    };

    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        const spokenText = fullText.substring(0, event.charIndex);
        const wordCount = spokenText.split(/(\s+)/).length - 1;
        setCurrentWordIndex(wordCount);
      }
    };

    utteranceRef.current = utterance;
    synthRef.current.cancel();
    synthRef.current.speak(utterance);
  };

  const pause = () => {
    if (isSpeaking && !isPaused) {
      synthRef.current.pause();
      setIsPaused(true);
    } else if (isPaused) {
      synthRef.current.resume();
      setIsPaused(false);
    }
  };

  const stop = () => {
    synthRef.current.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    setCurrentWordIndex(null);
  };

  useEffect(() => {
    const synth = synthRef.current;
    return () => {
      if (synth) {
        synth.cancel(); // cleanup on unmount
      }
    };
  }, []);

  return (
    <>
      <div className="element-screen">
        <div>
          <h2 className="museum-title">Incandescent Light Bulb - Description</h2>
        </div>
        <div className='image-content-container'>
          <div className='image-container'>
            <img src={bulb} alt="Museum of Illusions" className='image'/>
          </div>
        
          <div className='text-container'>
            <p className='text'>
              {words.map((word, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: index === currentWordIndex ? '#9a6a3b' : 'transparent',
                    transition: 'background-color 0.2s',
                  }}
                >
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="controls">
            <button onClick={speak} disabled={isSpeaking || isPaused}>▶️ Play</button>
            <button onClick={pause} disabled={!isSpeaking && !isPaused}>
              {isPaused ? '⏯️ Resume' : '⏸️ Pause'}
            </button>
            <button onClick={stop}>⏹️ Stop</button>
          </div>
      </div>
      <Navbar />
    </>
  );
};

export default ElementHistoryBulb;