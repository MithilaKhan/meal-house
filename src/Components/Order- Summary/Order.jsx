import React from 'react';
import './Order.css'
const Order = ({Name}) => {
   console.log(Name)
   return (
      <div className='order'>
         <h2>order summary</h2>
         <h5>Name:{Name} <span></span></h5>
      </div>
   );
};

export default Order;