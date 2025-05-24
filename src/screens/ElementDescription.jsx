import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import bulb from '../Assets/images/lightbulb.png';

const ElementDescription = () => {
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
            The incandescent light bulb is one of Thomas Edison’s most famous inventions.
            This device produces light by heating a filament wire to a high temperature.
            An incandescent light bulb, also known as an incandescent lamp or incandescent light globe, 
            is an electric light that produces illumination by Joule heating a filament until it glows. 
            The filament is enclosed in a glass bulb that is either evacuated or filled with inert gas to 
            protect the filament from oxidation. Electric current is supplied to the filament by terminals 
            or wires embedded in the glass. A bulb socket provides mechanical support and electrical connections. 
            Incandescent bulbs are manufactured in a wide range of sizes, light output, 
            and voltage ratings, from 1.5 volts to about 300 volts. 
            They require no external regulating equipment, have low...
          </p>
        </div>
        
      </div>
      <Navbar />
    </div>
  );
};

export default ElementDescription;