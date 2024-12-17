import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import Card from '../components/Card';

const Home = () => {
    const [foodArr, setFoodArr] = useState([]);
    const [query, setQuery] = useState("");
    const debRef = useRef(null);
    const [loader, setLoader] = useState(false);
    const getRecipes = async() => {
        setLoader(true);
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        setFoodArr(response.data.meals);
        setLoader(false);
    }
    const searchResuls = async() => {
        setLoader(true);
        const resp = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        setFoodArr(resp.data.meals);
        setLoader(false);
    }
    const debouncedSearch = (fn, delay) => {
        let timer;
        return ()=>{
            if(timer) clearTimeout(timer);
            timer = setTimeout(() => {
            fn();
            }, delay);
        } 
    }
    useEffect(()=>{
        debRef.current = debouncedSearch(searchResuls, 2000);
    }, []) 
    useEffect(()=>{
        if(query.trim()!= ''){
            debRef.current = debouncedSearch(searchResuls, 2000);
        } else {
            getRecipes();
        }
    },[query])
    const displayFoood = () => {
      return foodArr?.filter(food => {
          if(query.trim()=='') {
              return true;
          }
          return food.strMeal.toLowerCase().includes(query.toLowerCase()) || food.strCategory.toLowerCase().includes(query.toLowerCase() || food.strIngredient1.toLowerCase().includes(query.toLowerCase()));
      }).map(food => (
        <Card key={food.idMeal} {...food} />
      ))
    }
  return (
    <>
    <Navbar />
      <h2 id="greetmsg">Welcome to the world of recipe's.</h2>
      <div className="search-cont">
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='search by name, categories or ingredients.'/>
        <button>Search</button>
      </div>
      {
      loader ? <div className='loader'><img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/f3d5a969321565.5b7d0cbe73337.gif" alt="" /></div>:
      <div className="foods-cont">
        {
          displayFoood().length === 0 && query.trim()!== '' ? <div className='food-emp'>No Results Found.</div> : 
          displayFoood()
        }
      </div>
      }
    </>
  )
}

export default Home