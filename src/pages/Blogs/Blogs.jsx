import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';

import loadingAnimation from '../../assets/images/cooking.gif';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9000/blogs")
            .then(res => setBlogs(res.data))
    }, []);


    return <div>

        <h3 className='text-center font-semibold text-4xl mt-10 mb-5'>Blogs</h3> <hr className='mb-10' />



        <div>
            {
                blogs.length > 0 ? <div className='lg:w-3/4 mx-auto'>{blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)}</div>
                    :
                    <div className='flex flex-col items-center my-20 justify-center'>
                        <img className=' w-80' src={loadingAnimation} alt="" />
                        <p className='text-2xl font-bold text-center'>Cooking....</p>
                    </div>
            }
        </div>
    </div>

}

export default Blogs