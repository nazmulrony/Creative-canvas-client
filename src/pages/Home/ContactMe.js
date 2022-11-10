import React from 'react';
import { BsCalendarCheckFill, BsFillTelephoneForwardFill } from 'react-icons/bs'
import { FaLocationArrow } from 'react-icons/fa';

const ContactMe = () => {
    return (
        <div className='  lg:px-20 my-6 lg:my-20'>
            <div className='bg-stone-900 p-8 lg:pb-16  text-light '>
                <h2 className='text-brand m-4 text-center text-2xl font-semibold'>Contact Me</h2>
                <div className='flex  flex-col lg:flex-row gap-6'>
                    <div className='flex items-center gap-2 justify-center flex-1'>
                        <div>
                            <BsCalendarCheckFill className='text-brand text-3xl' />
                        </div>
                        <div>
                            <p className='text-sm'> I'm Open Saturday - Thursday</p>
                            <p className='font-semibold text-xl'>9:00 AM - 6:00 PM </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 justify-center flex-1'>
                        <div>
                            <FaLocationArrow className='text-brand text-3xl' />
                        </div>
                        <div>
                            <p className='text-sm'>Need a meeting? Here's my address </p>
                            <p className='font-semibold text-xl'>Sony Square, Mirpur-1, Dhaka</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 justify-center flex-1'>
                        <div>
                            <BsFillTelephoneForwardFill className='text-brand text-3xl' />
                        </div>
                        <div>
                            <p className='text-sm'> For further information</p>
                            <p className='font-semibold text-xl'>+01855551277</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ContactMe;