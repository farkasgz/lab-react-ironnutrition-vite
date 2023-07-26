import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import React from 'react';
import uuid from 'react-uuid';
import SearchBar from "./SearchBar";


function FoodList() {
    const [foods, setFoods] = useState(foodsJson)
    const removeFood = (id) => {
        setFoods([...foods].filter(elem => elem.id !== id))
    }
    const addFood = (name, image, calories, servings) => {
        const newFood = {id: uuid() ,name, calories, image, servings}
        setFoods([newFood, ...foods])
    }
    const searchFood = (searchTerm) => {
        setFoods([...foods].filter(elem => elem.name.includes(searchTerm)))
    }
    
    return(
        <>
            <h1>LAB | React IronNutrition</h1>
            <AddFoodForm addFood={addFood}/>
            {/*<SearchBar searchFood={searchFood}/>*/}
                {foods.map(oneFood => {
                    return (
                        <FoodBox food = {oneFood} removeFood={removeFood} key={oneFood.id}/>
                    )
                })}
        </>
        
    )
}

export default FoodList;