import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import phonograph from '../Assets/images/phonograph.png';
import { useState, useEffect, useRef } from 'react';

const ElementDescriptionPhonograph = () => {
  const fullText = `The phonograph is one of Thomas Edison’s most famous inventions, 
            created in 1877. It was the first device capable of recording and 
            reproducing sound. The machine worked by using a stylus to etch sound 
            vibrations into a rotating cylinder covered in tin foil. When the 
            cylinder was rotated again, the stylus would follow the grooves and 
            reproduce the original sounds. This groundbreaking technology laid 
            the foundation for the music recording industry, audiobooks, and 
            sound archives. Edison’s phonograph transformed how people experienced 
            music and voice recordings, making sound something that could be stored, 
            shared, and replayed. The phonograph evolved into the modern record 
            player and inspired generations of audio technology.`;
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
            <img src={phonograph} alt="Museum of Illusions" className='image'/>
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

export default ElementDescriptionPhonograph;

