import React from 'react';
import Navbar from '../components/Navbar';
import '../Styles/ElementScreen.css';
import eletricpen from '../Assets/images/eletric-pen.png';

const ElementHistoryEletricPen = () => {
  return (
    <div className="element-screen">
      <div>
        <h2 className="museum-title">Electric Pen - History</h2>
      </div>
      <div className='image-content-container'>
        <div className='image-container'>
          <img src={eletricpen} alt="Electric Pen" className="image" />
        </div>
        <div className='text-container'>
          <p className='text'>
            Edison developed the Electric Pen while working on improving
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
            with new markets and inspired future innovations in both office equipment and personal artistry.
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ElementHistoryEletricPen;