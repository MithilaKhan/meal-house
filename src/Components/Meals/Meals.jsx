import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Order from '../Order- Summary/Order';
import './Meals.css'
const Meals = () => {
   const [meals , setMeals] = useState([])
   const [Name , setName] = useState('')
   useEffect(()=>{
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(res => res.json())
      .then(data => setMeals(data.meals))
   } ,[])
   const orderBtn =(name)=>{
      
      const foodName = (localStorage.getItem("strMeal"))
      console.log(foodName)
      if(foodName){
         const newName = name 
         localStorage.setItem("strMeal" ,newName)
         setName(newName)
      }
      else{
       localStorage.setItem("strMeal",name)
       setName(name)
      }
   }
   return (
      <div className="container">
      <div className="mealDetails">
         {
            meals.map(meal =><Meal
            key={meal.idMeal}
            meal = {meal} 
            orderBtn ={orderBtn}
            ></Meal> )
         }
        
         
      </div>
      <div className="orderSummary">
      <Order
      Name ={Name}
      ></Order>
      
      </div>
    </div>
   );
};

export default Meals;