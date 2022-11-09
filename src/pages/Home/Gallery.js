import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css'
import image1 from '../../assets/image-1.jpg'
import image3 from '../../assets/image-3.jpg'
import image4 from '../../assets/image-4.jpg'
import image5 from '../../assets/image-5.jpg'
import image6 from '../../assets/image-6.jpg'
import image7 from '../../assets/image-7.jpg'
import image8 from '../../assets/image-8.jpg'
import image9 from '../../assets/image-9.jpg'
import image10 from '../../assets/image-10.jpg'
import image11 from '../../assets/image-11.jpg'
import image12 from '../../assets/image-12.jpg'
import image13 from '../../assets/image-13.jpg'

const Gallery = () => {
    return (
        <div className='  lg:px-20 my-6 lg:my-12'>
            <h2 className='text-brand m-4 text-center text-3xl lg:text-4xl font-semibold'>Featured Photos </h2>
            <div className='bg-stone-900 p-8 lg:p-16 text-light'>
                <div className='columns-4 gap-3 space-y-3'>
                    <div className='overflow-hidden'>
                        <img src={image1} alt="" className='scale-105  hover:scale-100 duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                        <img src={image4} alt="" className='scale-105  hover:scale-100 duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                        <img src={image3} alt="" className='scale-105  hover:scale-100 duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                        <img src={image9} alt="" className='scale-105  hover:scale-100 duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                        <img src={image5} alt="" className='scale-105  hover:scale-100 duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                        <img src={image13} alt="" className='scale-105  hover:scale-100 duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                        <img src={image6} alt="" className='scale-105  hover:scale-100 duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                        <img src={image10} alt="" className='scale-105  hover:scale-100 duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                        <img src={image7} alt="" className='scale-105  hover:scale-100 duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                        <img src={image12} alt="" className='scale-105  hover:scale-100 duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                        <img src={image11} alt="" className='scale-105  hover:scale-100 duration-500' />
                    </div>
                    <div className='overflow-hidden'>
                        <img src={image8} alt="" className='scale-105  hover:scale-100 duration-500' />
                    </div>

                </div>


            </div>

        </div>
    );
};

export default Gallery;