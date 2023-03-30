import React from 'react';
import './Meal.css'
const Meal = ({meal , orderBtn}) => {
  
   // console.log(meal)
   return (
      <div className='mealContainer'>
        <img src={meal.strMealThumb} alt="" />
         <h4>Name: {meal.strMeal}</h4>
         <p>Area: {meal.strArea}</p>
         <p>Category: {meal.strCategory}</p>
         <button onClick={()=>orderBtn(meal.strMeal)}>Order Now</button>
      </div>
   );
};

export default Meal;