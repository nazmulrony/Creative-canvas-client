import React from 'react';
import error from '../assets/error.png'

const Error404 = () => {
    return (
        <div className='bg-dark min-h-screen grid place-items-center overflow-hidden'>
            <img src={error} alt="" className='lg:w-96 w-72' />

        </div>
    );
};

export default Error404;