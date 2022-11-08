import React from 'react';
import { FaStar } from 'react-icons/fa'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css'

const ServiceCard = ({ service, index }) => {
    const { name, image, price, rating, description } = service;
    return (
        <div className={`lg:col-span-2 text-zinc-200 ${index === 2 ? 'lg:row-start-2 lg:col-start-2' : ''} `}>
            <div className='overflow-hidden'>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} alt="" className='scale-105  hover:scale-100 duration-500' />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='p-2'>
                <h3 className='text-3xl'>{name}</h3>
                <p className='w-2/3'>{description.slice(0, 90)}...</p>
                <p className='flex items-center gap-1'> Rating: {rating} <FaStar className='inline-block text-yellow-600 text-sm' /> </p>
                <p className='text-5xl font-light'>${price}</p>
                <button className="btn btn-brand btn-sm mt-2">View Details</button>
            </div>
        </div>
    );
};

export default ServiceCard;