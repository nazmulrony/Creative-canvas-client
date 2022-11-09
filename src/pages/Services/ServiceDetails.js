import React, { useContext } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css'
import { FaStar, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import ServiceReviews from './ServiceReviews';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    const service = useLoaderData();
    const { image, name, price, rating, description, _id } = service;


    const handleReview = event => {
        event.preventDefault();

        const text = event.target.text.value;
        const rating = event.target.rating.value;
        const review = {
            serviceId: _id,
            name: user.displayName,
            image: user.photoURL,
            text,
            rating,
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review added successfully!')
                    event.target.reset();
                }
            })
            .catch(error => console.log(error))

        console.log(review);




    }
    return (
        <div className='py-6  md:px-20 '>
            <div className="grid grid-cols-1 lg:grid-cols-5  text-red-100 gap-3 py-9  px-6 bg-stone-900 ">
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
                    <p className='flex items-center gap-1 text-xl my-1 text-brand'> Rating: {rating} <FaStar className='inline-block ' /> </p>
                    <p className='text-5xl'>${price}</p>
                </div>
            </div>
            <div>
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
                <ServiceReviews id={_id} />
            </div>
        </div>
    );
};

export default ServiceDetails;