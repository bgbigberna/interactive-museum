import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import eletricpen from '../Assets/images/eletric-pen.png';
import { useState, useEffect, useRef } from 'react';

const ElementHistoryElectricPen = () => {
  const fullText = `Edison developed the Electric Pen while working on improving
            telegraph technology. He realized that the same principles 
            used in the telegraph could be applied to office work. The 
            pen was originally intended for use in business environments 
            where duplicating documents quickly and accurately was important. 
            Despite its innovative nature, the Electric Pen was not widely adopted, 
            largely due to its cost and complexity. However, the technology was later 
            adapted by Samuel O'Reilly, who modified the device to create the first 
            electric tattoo machine in 1891. Though it was not a commercial success, 
            the Electric Pen demonstrated Edison’s vision for electrical devices beyond 
            lighting and communication. It also highlighted his willingness to experiment 
            with new markets and inspired future innovations in both office equipment and personal artistry.`;
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
            <img src={eletricpen} alt="Museum of Illusions" className='image'/>
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

export default ElementHistoryElectricPen;