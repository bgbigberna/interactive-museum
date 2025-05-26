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
            The Electric Pen, invented by Thomas Edison in 1876, was an early type of electric pen that used a vibrating needle to create ink marks on paper. 
            It was one of the first devices to use electric power for writing and was a precursor to modern electric pens and tattoo machines. 
            The Electric Pen was primarily used for copying documents and creating illustrations, and it played a significant role in the development of early office technology.
          </p>
        </div>
        
      </div>
      <Navbar />
    </div>
  );
};

export default ElementDescriptionEletricPen;