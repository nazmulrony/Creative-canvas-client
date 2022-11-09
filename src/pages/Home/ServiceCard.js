import React from 'react';
import { FaStar } from 'react-icons/fa'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, index }) => {
    const { name, image, price, rating, description, _id } = service;

    return (
        <div className={`lg:col-span-2 text-zinc-200 ${index % 3 === 2 ? ' lg:col-start-2' : ''} grid items-center`}>
            <div className='overflow-hidden'>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} alt="" className='scale-105  hover:scale-100 duration-500' />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='p-2'>
                <h3 className='text-3xl font-semibold'>{name}</h3>
                <p className='w-2/3 text-zinc-300'>{description.slice(0, 90)}...</p>
                <p className='flex items-center gap-1 text-brand text-xl'> Rating: {rating} <FaStar className='inline-block text-brand text-sm' /> </p>
                <p className='text-5xl font-light'>${price}</p>
                <Link to={`/services/${_id}`}><button className="btn btn-brand btn-sm mt-2">View Details</button></Link>
            </div>
        </div>
    );
};

export default ServiceCard;