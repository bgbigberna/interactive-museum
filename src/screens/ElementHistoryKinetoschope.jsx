import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import kinetoschope from '../Assets/images/Kinetoscopio.png';
import { useState, useEffect, useRef } from 'react';

const ElementHistoryKinetoschope = () => {
  const fullText = `Edison began working on the Kinetoscope in the late 1880s, 
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
            picture storytelling and visual entertainment as we know it today.`;
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
            <img src={kinetoschope} alt="Museum of Illusions" className='image'/>
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

export default ElementHistoryKinetoschope;