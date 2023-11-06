import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { UserContext } from '../../context/AuthProvider'
import axios from 'axios';
import Swal from 'sweetalert2';

const AddFood = () => {


    const { user } = useContext(UserContext);

    const [foodCategory, setFoodCategory] = useState('');
    let count = 0;


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const category = foodCategory;
        const quantity = form.quantity.value;
        const price = parseFloat(form.price.value);
        const username = form.username.value;
        const userEmail = form.userEmail.value;
        const foodOrigin = form.foodOrigin.value;
        const purchaseCount = count;
        const description = form.description.value;

        const newItem = { name, image, category, quantity, price, username, userEmail, foodOrigin, purchaseCount, description };

        axios.post('https://dinein-server.vercel.app/addFood', newItem)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Added!",
                        text: "Your food item has been added successfully.",
                        icon: "success"
                    });
                    form.reset();
                }
            })
            .catch(error => {
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error"
                })
            })

    }


    return <div className='min-h-screen md:border rounded p-2 md:p-10 lg:p-20 md:bg-gray-100 mb-10'>

        <Helmet>
            <title>Dinein | Add food</title>
        </Helmet>



        <div className="text-3xl font-bold text-center">Dine<span className='text-orange-600'>in</span></div>
        <h3 className='text-center font-semibold text-xl md:text-3xl mt-5 mb-4'>Add a new food item</h3>
        <hr />


        <form onSubmit={handleSubmit}>
            <div className='flex justify-between flex-col md:flex-row gap-6 w-full'>
                <div className='w-full mt-10'>
                    <input className='w-full border-2 text-lg font-semibold placeholder:font-normal outline-none p-4 rounded-md bg-white' type="text" name="name" id="name" placeholder='Enter Food Name' required />
                    <select value={foodCategory} onChange={(e) => setFoodCategory(e.target.value)} className='w-full mt-5 border-2 text-lg  font-semibold outline-none p-4 rounded-md bg-white' name="category" id="category" required>
                        <option value="" className='text-gray-500'>Select Food Category</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Salad">Salad</option>
                        <option value="Rice">Rice</option>
                        <option value="Indian">Indian</option>
                        <option value="Meat">Meat</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Other">Other</option>
                    </select>
                    <input className='w-full mt-5 p-4 border-2 text-lg font-semibold placeholder:font-normal  outline-none rounded-md bg-white' type="text" name="username" id="username" defaultValue={user?.displayName} placeholder='Enter Food Chef Name' required />
                    <input className='w-full p-4 border-2 mt-5 text-lg font-semibold placeholder:font-normal  outline-none rounded-md bg-white' type="text" name="price" id="price" placeholder='Enter Food Price' required />
                </div>


                <div className='w-full md:mt-10'>
                    <input className='w-full p-4 border-2 text-lg font-semibold placeholder:font-normal  outline-none rounded-md bg-white' type="text" name="image" id="image" placeholder='Enter Food Image' required />
                    <input className='w-full mt-5 border-2 text-lg font-semibold placeholder:font-normal outline-none p-4 rounded-md bg-white' type="number" name="quantity" id="quantity" placeholder='Enter Food Quantity' required />
                    <input className='w-full mt-5 p-4 border-2 text-lg font-semibold placeholder:font-normal  outline-none rounded-md bg-white' type="email" name="userEmail" id="userEmail" defaultValue={user?.email} placeholder='Enter Food Chef Name' readOnly required />
                    <input className='w-full p-4 border-2 mt-5 text-lg font-semibold placeholder:font-normal  outline-none rounded-md bg-white' type="text" name="foodOrigin" id="foodOrigin" placeholder='Enter Food Origin (country)' required />
                </div>

            </div >
            <textarea className='w-full h-[250px] resize-none p-4 border-2 text-lg font-semibold bg-white placeholder:font-normal outline-none rounded-md mt-5' name="description" id="description" placeholder='Write a brief description' required></textarea>
            <input className='w-full bg-orange-500 py-4 mt-5 text-lg font-semibold text-white rounded-md cursor-pointer' type="submit" value="Add Food Item" />
        </form >
    </div >
}

export default AddFood