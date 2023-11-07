import React, { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const PurchaseFood = () => {

    const { data } = useLoaderData();
    const { name, price, quantity, image, purchaseCount, username, userEmail, _id } = data;

    const { user } = useContext(UserContext);

    const navigate = useNavigate();


    const handleFoodPurchase = (e) => {
        e.preventDefault();
        const addedTime = new Date().toString();

        const purchaseQty = e.target.purchaseQuantity.value;

        const availableFood = quantity - purchaseCount;

        if (availableFood < 1) {
            return Swal.fire({
                title: "Out of stock!",
                text: "The food item you want to purchase is currently out of stock. Please try again later.",
                icon: "error"
            });
        }

        if (purchaseQty > availableFood) {
            return Swal.fire({
                title: "Not available stock!",
                text: `Sorry we cannot have your desired quantity of item at this moment. Current available quantity  is ${availableFood}.`,
                icon: "error"
            });
        }

        if (userEmail === user?.email) {
            return Swal.fire({
                title: "Can't buy!",
                text: "You cannot buy your own added products.",
                icon: "error"
            })
        }

        const purchasedFood = {
            image,
            name,
            price,
            addedTime,
            addedBy: username,
            purchaseQty,
            purchaseBy: user?.email
        }

        //Post new purchase to the server
        axios.post("https://dinein-server.vercel.app/order", purchasedFood)
            .then(res => {
                if (res.data.acknowledged) {

                    const newPurchaseCount = purchaseCount + parseInt(purchaseQty);
                    const newAvailableQuantity = quantity - purchaseQty;
                    axios.put(`https://dinein-server.vercel.app/purchaseCount/${_id}`, { count: newPurchaseCount, newQuantity: newAvailableQuantity })
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                                Swal.fire({
                                    title: "Ordered!",
                                    text: "Your order has been placed successfully.",
                                    icon: "success"
                                });
                                navigate("/myOrder")
                            }
                        })
                }
            })





    }







    return (

        <div>

            <Helmet>
                <title>Dinein | Purchase</title>
            </Helmet>


            <div className='w-full h-[220px] text-white relative  rounded-lg  bg-center bg-cover' style={{ backgroundImage: "url(https://i.ibb.co/ZVScWBn/photo-1580052614034-c55d20bfee3b-auto-format-fit-crop-q-60-w-600-ixlib-rb-4-0.jpg)" }}>
                <div className='absolute w-full h-full rounded-lg bg-[#000000ab] flex flex-col items-center justify-center'>
                    <h1 className='text-4xl text-center font-semibold mb-2'>Purchase Food Item</h1>
                    <p className='text-center w-2/3 lg:w-1/3 mx-auto text-sm font-medium'>Enter the purchasing amount to purchase the food item.</p>
                </div>
            </div>


            <div className='flex gap-6 flex-col  lg:flex-row  my-10'>
                <div className='flex-1'>
                    <img className='w-full h-full rounded-lg' src={image} alt="" />

                </div>

                <div className='flex-1'>
                    <form onSubmit={handleFoodPurchase}>
                        <input className='w-full border-2 text-lg font-semibold placeholder:font-normal outline-none p-4 rounded-md bg-white' type="text" name="name" id="name" placeholder='Enter Food Name' defaultValue={name} readOnly required />
                        <input className='w-full mt-5 p-4 border-2 text-lg font-semibold placeholder:font-normal  outline-none rounded-md bg-white' type="text" name="username" id="username" defaultValue={user?.displayName || "User"} placeholder='Enter username' readOnly required />
                        <input className='w-full mt-5 p-4 border-2 text-lg font-semibold placeholder:font-normal  outline-none rounded-md bg-white' type="email" name="userEmail" id="userEmail" defaultValue={user?.email || "unknown"} placeholder='Enter User Email' readOnly required />
                        <input className='w-full p-4 border-2 mt-5 text-lg font-semibold placeholder:font-normal  outline-none rounded-md bg-white font-sans' type="text" name="price" id="price" defaultValue={"$" + price} readOnly placeholder='Enter Food Price' required />
                        <input className='w-full mt-5 border-2 text-lg font-semibold placeholder:font-normal outline-none p-4 rounded-md bg-white' type="number" name="purchaseQuantity" id="purchaseQuantity" placeholder='Enter Order Quantity' required />
                        <input className='w-full bg-orange-500 py-4 mt-5 text-lg font-semibold text-white rounded-md cursor-pointer' type="submit" value="Order now" />
                    </form >
                </div>
            </div>
        </div>
    )
}

export default PurchaseFood