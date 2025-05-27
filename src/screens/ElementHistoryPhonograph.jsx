import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import phonograph from '../Assets/images/phonograph.png';

const ElementHistoryPhonograph = () => {
  return (
    <div className="element-screen">
      <div>
        <h2 className="museum-title">Phonograph - History</h2>
      </div>
      <div className='image-content-container'>
        <div className='image-container'>
          <img src={phonograph} alt="Phonograph" className="image" />
        </div>
        <div className='text-container'>
          <p className='text'>
            Edison stumbled upon the concept of the phonograph 
            while working on improvements to the telegraph and 
            telephone. During experiments with a diaphragm and 
            stylus, he realized that sound vibrations could be 
            physically recorded and later reproduced. The first 
            successful recording was Edison reciting "Mary had 
            a little lamb." The invention amazed the public and 
            earned Edison the nickname "The Wizard of Menlo 
            Park." Although initially intended for business 
            dictation, the phonograph’s entertainment potential 
            quickly became clear. Over the years, it underwent 
            numerous improvements, including the transition 
            from tin foil to wax cylinders and eventually to 
            flat discs. The phonograph became a cultural 
            phenomenon, bringing music and spoken word into 
            people’s homes for the first time. Its influence 
            persists today in all forms of recorded sound.
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ElementHistoryPhonograph;