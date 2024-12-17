import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Fav = () => {
    const [fav, setFav] = useState([]);
    const navigate = useNavigate();
    const getFav = () => {
        const favItems = JSON.parse(localStorage.getItem('favItems')) || [];
        setFav(favItems);
        console.log(favItems);
    }
    useEffect(()=>{
        getFav();
    },[])

    const deleteFav = (id)=>{
        const favItems = fav.filter((item) => item.idMeal!== id);
        localStorage.setItem('favItems', JSON.stringify(favItems));
        setFav(favItems);
        toast.success('Item removed from favorites');
    }
  return (
    <>
    <div className="fav">
    <Navbar />
        {
            fav.length === 0? <p className='fav-emp'>No items added to favorities yet!</p>:
            <div className="fav-cont">
                {fav.map((item, index) => (
                    <div key={index} className="fav-item">
                        <img onClick={()=>navigate(`/details/${item.idMeal}`)} src={item.strMealThumb} alt={item.name} />
                        <div className="fav-wrap">
                            <h3>{item.strMeal}</h3>
                            <p className='fav-name'>{item.Meal}</p>
                            <p className='fav-cate'>{item.strCategory}</p>
                            <p className='fav-area'>{item.strArea}</p>
                            <p><a href={item.strYoutube}>Youtube link</a></p>
                            <button onClick={()=>deleteFav(item.idMeal)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        }
    </div>
    </>
  )
}

export default Fav