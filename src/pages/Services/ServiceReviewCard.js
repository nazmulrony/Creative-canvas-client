import React from 'react';
import { FaStar } from 'react-icons/fa';

const ServiceReviewCard = ({ review }) => {
    const { name, text, image, created, rating } = review;
    return (
        <div className=' p-4 flex  rounded-lg overflow-hidden'>
            <div className='rounded-full  flex  overflow-hidden'>
                <img src={image} alt="" className='h-12 w-12 border-brand border-2 object-cover  flex-1 rounded-full' />
            </div>
            <div className='bg-dark p-3 rounded-lg w-full border-brand border ml-2'>
                <p className='text-md font-semibold'>{name}</p>
                <div className='flex items-center gap-6'>
                    <p className='flex items-center gap-1'>{rating} <FaStar className='text-brand' /></p>
                    <p>{created} </p>
                </div>
                <p className=' p-2 rounded-md my-1'>{text}</p>
            </div>

        </div>
    );
};

export default ServiceReviewCard;