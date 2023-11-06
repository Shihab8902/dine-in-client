import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { AiOutlineSearch } from 'react-icons/ai';
import FoodsCard from './FoodsCard';


const Foods = () => {

    const [allFoods, setAllFoods] = useState([]);

    const foodsPerPage = 9;
    const [totalFoods, setTotalFoods] = useState(0);
    const numberOfPages = Math.ceil(totalFoods / foodsPerPage);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchStr, setSearchStr] = useState('');
    const [filterStr, setFilterStr] = useState('');

    const pages = [...Array(numberOfPages).keys()];




    useEffect(() => {
        axios.get(`http://localhost:9000/foods?page=${currentPage}&size=${foodsPerPage}&searchStr=${searchStr}&filterStr=${filterStr}`)
            .then(res => {
                setAllFoods(res.data);
            });
    }, [currentPage, searchStr, filterStr]);



    //Get the total number of data
    useEffect(() => {
        axios.get("http://localhost:9000/totalFoods")
            .then(res => setTotalFoods(res.data.total));
    }, []);


    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearchStr(searchText);
    };


    const handleFilter = e => {
        setFilterStr(e.target.value);
    }


    return <div className='min-h-screen mt-5 mb-10'>
        <Helmet>
            <title>Dinein | All food items</title>
        </Helmet>

        <div className='w-full h-[220px] text-white relative  rounded-lg  bg-center bg-cover' style={{ backgroundImage: "url(https://i.ibb.co/ZVScWBn/photo-1580052614034-c55d20bfee3b-auto-format-fit-crop-q-60-w-600-ixlib-rb-4-0.jpg)" }}>
            <div className='absolute w-full h-full rounded-lg bg-[#000000ab] flex flex-col items-center justify-center'>
                <h1 className='text-4xl text-center font-semibold mb-2'>All Food Items</h1>
                <p className='text-center w-2/3 lg:w-1/3 mx-auto text-sm font-medium'>Savor a symphony of global flavors, where each dish tells a unique tale of taste and tradition</p>
            </div>
        </div>

        <form onSubmit={handleSearch} className=' md:w-3/4 lg:w-1/2 mx-auto flex  border-2 rounded-lg border-orange-500 items-center mt-10'>
            <input className='w-full font-semibold placeholder:font-normal rounded-tl-lg rounded-bl-lg outline-none py-4 px-5' type="search" name="search" id="search" placeholder='Search by name' />
            <button className='text-2xl  mr-4'><AiOutlineSearch /></button>
        </form>

        <div className='flex mt-8 mr-5 justify-end'>
            <select onChange={handleFilter} className='font-semibold outline-none cursor-pointer border bg-gray-100 px-3 rounded-md py-1' name="filter" id="filter">
                <option className='font-semibold text-gray-400' value="">Filter By</option>
                <option className='font-semibold' value="lowToHigh">Price [low to High]</option>
                <option className='font-semibold' value="highToLow">Price [high to low]</option>
            </select>
        </div>




        {
            allFoods.length > 0 ? <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-20'>
                {allFoods.map(food => <FoodsCard key={food._id} food={food} />)}
            </div> :
                <div className='flex justify-center my-20'>
                    <h3 className='text-gray-500 font-semibold text-4xl'>No data found!</h3>
                </div>
        }



        {
            allFoods.length > 0 && <div className='flex items-center justify-center'>
                <button onClick={() => {
                    if (currentPage > 0) {
                        setCurrentPage(currentPage - 1);
                    }
                }} className='border text-lg font-semibold py-[6px] px-2'>Prev</button>
                {
                    pages.map(page => <button className={`text-2xl border  px-3 py-1 font-semibold ${currentPage === page ? "bg-orange-500 text-white" : undefined}`}
                        onClick={() => {
                            setCurrentPage(page);
                        }}
                        key={page}>{page}</button>)
                }
                <button onClick={() => {
                    if (currentPage < pages.length - 1) {
                        setCurrentPage(currentPage + 1)
                    }
                }} className='border text-lg font-semibold py-[6px] px-2'>Next</button>
            </div>
        }




    </div>
}

export default Foods