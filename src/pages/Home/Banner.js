import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:px-20 py-6 lg:py-20'>
            <div className='lg:col-span-3 grid place-items-center '>
                <div>
                    <h1 className='text-4xl lg:text-7xl  text-zinc-200 font-semibold'>Creating Timeless Look Coupled with Flawless Moment with <span className='text-brand'>Creative</span> <span className='text-brand'>Canvas</span></h1>
                    <Link to="/services"><button className='btn btn-brand my-3'>Explore Services</button></Link>
                </div>
            </div>
            <div className='row-start-1 lg:col-start-4 lg:col-span-2 mb-4 grid place-items-center'>
                <img src={hero} alt=" " className='w-2/3 lg:w-full' />
            </div>

        </div>
    );
};

export default Banner;