import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MyReviewCard = ({ review, handleDelete }) => {
    const { serviceTitle, text, rating, created, _id } = review;
    return (
        <div className='bg-dark p-6 lg:p-10 my-4 text-light rounded-lg flex flex-col lg:flex-row gap-3'>
            <div className='flex-1'>
                <h5 className='text-2xl font-semibold'>Review on: <span className='text-brand'>{serviceTitle}</span></h5>
                <div className='flex items-center gap-6 mb-1 text-lg'>
                    <p className='flex items-center gap-1'>{rating} <FaStar className='text-brand' /></p>
                    <p>{created} </p>

                </div>
                <hr className='border-brand' />
                <p>{text}</p>
            </div>
            <div className='flex flex-row lg:flex-col lg:justify-center gap-4 '>
                <Link to={`/reviews/${_id}`}><button className='btn btn-brand flex-1 w-full'> Edit</button></Link>
                <button onClick={() => handleDelete(_id)} className='btn btn-error'>Delete </button>
            </div >
        </div >
    );
};

export default MyReviewCard;