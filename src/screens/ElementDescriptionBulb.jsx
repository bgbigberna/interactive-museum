import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import bulb from '../Assets/images/lightbulb.png';

const ElementDescriptionBulb = () => {
  return (
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
            The incandescent light bulb is a device that produces light through the 
            heating of a filament until it glows. Edison’s version of the light bulb 
            used a carbon filament enclosed in a vacuum-sealed glass bulb, which prevented 
            the filament from burning out quickly. When electrical current passes 
            through the filament, it heats up and emits light as a result of incandescence. 
            This invention revolutionized the way people live and work, offering a safer, 
            more reliable, and longer-lasting alternative to gas lamps and candles. 
            Edison’s design was efficient and practical enough for widespread commercial 
            and domestic use, and it became the foundation for modern electric lighting systems. 
            The bulb's simplicity and durability made it one of the most important technological 
            breakthroughs in human history.
          </p>
        </div>
        
      </div>
      <Navbar />
    </div>
  );
};

export default ElementDescriptionBulb;