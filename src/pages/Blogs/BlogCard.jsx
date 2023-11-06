import React, { useState } from 'react'

const BlogCard = ({ blog }) => {
    const { title, image, description } = blog;
    const [isFullTextVisible, setIsFullTextVisible] = useState(false);

    const slicedDescription = description.slice(0, 200);

    return <div className='p-5 border rounded-lg mb-10 bg-gray-100'>
        <img className='h-[250px] w-full rounded-lg' src={image} alt="" />
        <h3 className='text-3xl mt-3 font-bold'>{title}</h3>
        <p className='leading-7 font-medium mt-5 text-justify text-gray-600'>
            {isFullTextVisible ? description : slicedDescription + "...."}
            {description.length > 200 && (
                <button
                    onClick={() => setIsFullTextVisible(!isFullTextVisible)}
                    className='text-primary font-medium underline'
                >
                    {isFullTextVisible ? 'Show Less' : 'Show More'}
                </button>
            )}
        </p>
    </div>
}

export default BlogCard