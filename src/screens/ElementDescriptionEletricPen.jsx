import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import eletricpen from '../Assets/images/eletric-pen.png';

const ElementDescriptionEletricPen = () => {
  return (
    <div className="element-screen">
      <div>
        <h2 className="museum-title">Eletric Pen - Description</h2>
      </div>
      <div className='image-content-container'>
        <div className='image-container'>
          <img src={eletricpen} alt="Museum of Illusions" className='image'/>
        </div>
        <div className='text-container'>
          <p className='text'>
            The Electric Pen, invented by Thomas Edison in 1876, 
            was a revolutionary device designed primarily for duplicating
            documents. The pen operated using a small electric motor that 
            powered a needle, which rapidly punctured paper to create a 
            stencil. This stencil could then be used with an ink roller to 
            produce multiple copies of the original document. Although the 
            device itself was bulky and noisy, it represented a significant 
            step toward modern electric appliances and office automation. 
            The Electric Pen is considered one of the earliest examples of 
            electric writing instruments and served as a precursor to tattoo 
            machines and duplicating technologies. Its design demonstrated Edison’s 
            talent for combining electrical innovation with practical applications in everyday life.
          </p>
        </div>
        
      </div>
      <Navbar />
    </div>
  );
};

export default ElementDescriptionEletricPen;