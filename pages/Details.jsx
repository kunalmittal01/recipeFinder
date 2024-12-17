import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
    const [food, setFood] = useState({});
    const { id } = useParams();
    const [ingredients, setIngredients] = useState([]);
    const [measures, setmeasures] = useState([]);
    const [recipeSteps, setRecipeSteps] = useState([]);
    const fetchFood = async () => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setFood(response.data.meals[0]);
    }
    useEffect(() => {
        fetchFood();
    }, [id])
    useEffect(() => {
        if(food == {}) {
            return;
        }
        let ingredientsArr = [];
        for(let key in food)
        {   
            if(key.startsWith('strIngredient') && food[key]!== '' && food[key]!==null )
            {
                ingredientsArr.push(food[key]);
            }
        }
        setIngredients(ingredientsArr);
        let measuresArr = [];
        for(let key in food)
            {
                if(key.startsWith('strMeasure') && food[key]!== '' && food[key]!==null )
                {
                    measuresArr.push(food[key]);
                }
            }
        setmeasures(measuresArr);
        const steps = food.strInstructions
            ?.split(/\r\n|\n|\. /) 
            .filter((step) => step.trim() !== ""); 
        setRecipeSteps(steps);    
    },[food]);
    useEffect(()=>{
        console.log(ingredients);
        
    },[ingredients])

  return (
    <>
    <div className="details">
        <Navbar />
        <div className="details-cont">
            <div className="food-details">
                <img src={food.strMealThumb} alt="" />
                <div className="food-details-wrap">
                    <h2>{food.strMeal}</h2>
                    <p>{food.strCategory}</p>
                    <p>{food.strArea}</p>
                    <p>{food.strTags}</p>
                </div>
            </div>
            <div className="food-inst">
                    <h2>Recipe Steps</h2>
                    <ul>
                        {recipeSteps?.map((step, index) => (
                        <li key={index}>{step}</li>
                        ))}
                    </ul>
            </div>
            <div className="details-ingred">
                            <table>
                                <thead>
                                     <tr>
                                         <th>Measures</th>
                                         <th>Ingredients</th>
                                     </tr>    
                                </thead>
                                <tbody>
                    {
                        ingredients.map((ingredient, index) => (
                                    <tr>
                                        <td>{measures[index]}</td>
                                        <td>{ingredient}</td>
                                    </tr>
                        ))
                    }
                                </tbody>
                            </table>
                </div>
        </div>
    </div>
    </>
  )
}

export default Details

{/* <div className="details-ingred">
                            <table>
                                <thead>
                                     <tr>
                                         <th>Measures</th>
                                         <th>Ingredients</th>
                                     </tr>    
                                </thead>
                                <tbody>
                    {
                        ingredients.map((ingredient, index) => (
                                    <tr>
                                        <td>{measures[index]}</td>
                                        <td>{ingredient}</td>
                                    </tr>
                        ))
                    }
                                </tbody>
                            </table>
                </div> */}