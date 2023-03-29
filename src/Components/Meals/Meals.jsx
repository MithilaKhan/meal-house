import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'
const Meals = () => {
   const [meals , setMeals] = useState([])
   useEffect(()=>{
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(res => res.json())
      .then(data => setMeals(data.meals))
   } ,[])
   const orderBtn =()=>{
      console.log("Hello Bangladesh")
   }
   return (
      <div className="container">
      <div className="mealDetails">
         {
            meals.map(meal =><Meal
            meal = {meal} 
            orderBtn ={orderBtn}
            ></Meal> )
         }
        
         
      </div>
      <div className="orderSummary">
      <h3>order summary</h3>
      </div>
    </div>
   );
};

export default Meals;