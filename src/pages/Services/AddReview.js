import React, { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AddReview = ({ handleReview }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    return (
        <div className='flex gap-1 my-10 p-4 lg:p-10  lg:w-1/2 mx-auto  bg-stone-900'>
            {
                user?.uid ? (
                    <>
                        <div className='flex justify-end '>
                            <img src={user?.photoURL} alt="" className='h-12 w-12 rounded-full col-span-2 lg:col-span-1' />
                        </div>
                        <form onSubmit={handleReview} className='col-span-8 w-full'>
                            <Toaster />
                            <input name="rating" className='rounded-md my-2 p-2 text-dark font-semibold' placeholder='Rating (Out of five)' required />
                            <textarea name="text" className='p-2 h-20 rounded-md text-dark font-semibold w-full ' placeholder='Write a review' required />
                            <button type='submit' className="btn btn-brand mt-2 btn-sm">Post Review</button>
                        </form>
                    </>
                ) : <p className='text-light font-semibold text-xl col-span-9 text-center'> Please <Link to="/login" state={{ from: location }} replace className='text-brand'>login</Link> to write a review</p>
            }
        </div>
    );
};

export default AddReview;