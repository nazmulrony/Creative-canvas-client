import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css'
import { FaStar } from 'react-icons/fa';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { image, name, price, rating, description } = service;
    console.log(service);
    return (
        <div className='py-6  md:px-20'>
            <div className="grid grid-cols-1 lg:grid-cols-5  text-red-100 gap-3 py-9  px-6 bg-stone-900">
                <figure className='lg:col-span-2 grid place-items-center'>
                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img src={image} alt="" className='' />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className='lg:col-span-3 my-auto '>
                    <h3 className='text-3xl font-semibold'>{name}</h3>
                    <p className=' text-zinc-300'>{description}...</p>
                    <p className='flex items-center gap-1 text-xl my-1'> Rating: {rating} <FaStar className='inline-block text-yellow-600' /> </p>
                    <p className='text-5xl font-light text-brand'>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;