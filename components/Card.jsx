import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Card = (props) => {
    const navigate = useNavigate();
    const addToFav = () => {
      const favItems = JSON.parse(localStorage.getItem('favItems')) || [];
      const idx = favItems.findIndex(item => item.idMeal == props.idMeal);
      if(idx != -1) {
        toast.error('Already in Favorites');
        return;
      }
      let obj = {
        id: props.idMeal,
        name: props.strMeal,
        img: props.strMealThumb,
        area: props.strArea,
        category: props.strCategory
      }
      favItems.push({...props});
      localStorage.setItem('favItems', JSON.stringify(favItems));
      toast.success('Added To Favorities');
    }
  return (
    <>
    <div className="food">
        <img src={props.strMealThumb} alt="" />
        <p className='food-name'>{props.strMeal}</p>
        <p className='food-cate'>{props.strCategory}</p>
        <p className='food-area'>{props.strArea}</p>
        <div className="food-stripe">
            <button onClick={()=>navigate(`/details/${props.idMeal}`)}>view recipe</button>
            <button onClick={addToFav}>Add To Fav</button>
        </div>
    </div>
    </>
  )
}

export default Card