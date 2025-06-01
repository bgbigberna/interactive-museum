import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import bulb from '../Assets/images/lightbulb.png';
import { useState, useEffect, useRef } from 'react';

const ElementDescriptionBulb = () => {
  const fullText = `The incandescent light bulb is a device that produces light through the 
  heating of a filament until it glows. Edison’s version of the light bulb used a carbon 
  filament enclosed in a vacuum-sealed glass bulb, which prevented the filament from burning 
  out quickly. When electrical current passes through the filament, it heats up and emits 
  light as a result of incandescence. This invention revolutionized the way people live and 
  work, offering a safer, more reliable, and longer-lasting alternative to gas lamps and candles. 
  Edison’s design was efficient and practical enough for widespread commercial and domestic use, 
  and it became the foundation for modern electric lighting systems. The bulb's simplicity and 
  durability made it one of the most important technological breakthroughs in human history.`;
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

export default ElementDescriptionBulb;