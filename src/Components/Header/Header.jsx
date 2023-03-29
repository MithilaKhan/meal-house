import React from 'react';
import './Header.css'
const Header = () => {
   return (
      <div className='main-container'>
       <div className="header-title">
         <h3>MITHILA's MEAL HOUSE</h3>
         </div>  
         <div className="header-option">
         <a href="home">Home</a>
         <a href="about">About</a>
         <a href="meals">Meals</a>
         <a href="contact">Contact Us</a>
         </div>
      </div>
   );
};

export default Header;