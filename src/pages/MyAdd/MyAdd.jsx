import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { UserContext } from '../../context/AuthProvider';
import MyAddCard from './MyAddCard';

const MyAdd = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(UserContext);

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        user?.email && axiosSecure.get(`http://localhost:9000/myFood?email=${user?.email}`)
            .then(res => setFoods(res.data))
    }, [user]);



    return <div className='min-h-screen'>
        <Helmet>
            <title>Dinein | My added food items</title>
        </Helmet>


        {
            foods.length > 0 ? <div className="grid  lg:grid-cols-2 gap-6 my-10">
                {
                    foods.map(food => <MyAddCard key={food._id} food={food} />)
                }
            </div> :

                <div className='flex justify-center my-20 '>
                    <h3 className='font-semibold text-3xl text-gray-500'>You haven't add a food item yet.</h3>
                </div>
        }


    </div>
}

export default MyAdd