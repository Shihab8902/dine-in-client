import axios from 'axios';
import React, { useEffect, useState } from 'react'
import loadingAnimation from '../../assets/images/cooking.gif';
import { BsArrowRightShort } from 'react-icons/bs';
import TopFoodCard from './TopFoodCard';
import { Link } from 'react-router-dom';



const TopFoods = () => {

    const [topFoods, setTopFoods] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9000/topSelling")
            .then(res => setTopFoods(res.data))
    }, []);








    return <div className='my-20'>
        <h3 className=' text-3xl font-bold flex items-center gap-2'>Try our top selling food items <span><BsArrowRightShort /></span></h3>



        {
            topFoods.length > 0 ? <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    topFoods.map(food => <TopFoodCard key={food._id} food={food} />)
                }
            </div> :

                <div className='flex flex-col items-center justify-center'>
                    <img className=' w-80' src={loadingAnimation} alt="" />
                    <p className='text-2xl font-bold text-center'>Cooking....</p>
                </div>
        }

        {
            topFoods.length > 0 && <div className='text-center mt-20'>
                <Link to="/foods"> <button className='border border-orange-500 text-lg font-semibold px-10 hover:bg-orange-500 hover:text-white  transition-all duration-300 py-3 rounded'>Show All</button></Link>
            </div>
        }




    </div>
}

export default TopFoods