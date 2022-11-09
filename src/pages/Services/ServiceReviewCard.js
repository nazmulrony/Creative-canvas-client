import React from 'react';
import { FaStar } from 'react-icons/fa';

const ServiceReviewCard = ({ review }) => {
    const { name, text, image, created, rating } = review;
    return (
        <div className=' p-4 flex gap-2 rounded-lg '>
            <div className='h-12 w-12 rounded-full  overflow-hidden'>
                <img src={image} alt="" className='h-12 w-12 object-cover border-brand border-2  rounded-full' />
            </div>
            <div className='bg-dark p-3 rounded-lg w-full'>
                <p className='text-xl font-semibold'>{name}</p>
                <div className='flex items-center gap-8'>
                    <p className='flex items-center gap-1'>{rating} <FaStar className='text-brand' /></p>
                    <p>{created} </p>
                </div>
                <p className=' p-2 rounded-md my-1'>{text}</p>
            </div>

        </div>
    );
};

export default ServiceReviewCard;