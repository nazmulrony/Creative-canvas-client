import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css'
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import toast, { } from 'react-hot-toast';
import ServiceReviews from './ServiceReviews';
import AddReview from './AddReview';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const service = useLoaderData();
    const { image, name, price, rating, description, _id } = service;


    const handleReview = event => {
        event.preventDefault();
        const text = event.target.text.value;
        const rating = event.target.rating.value;
        const review = {
            serviceId: _id,
            serviceTitle: name,
            email: user.email,
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
                    loadReviews(_id)
                    toast.success('Review added successfully!')
                    event.target.reset();
                }
            })
            .catch(error => console.log(error))
        console.log(review);
    }
    //
    const loadReviews = (id) => {
        fetch(`http://localhost:5000/reviews?service=${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className=' md:px-20 '>
            <div className="grid grid-cols-1 lg:grid-cols-5  text-red-100 gap-3  lg:py-20  p-6 bg-stone-900 ">
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
                <AddReview
                    handleReview={handleReview}
                />
                <ServiceReviews
                    id={_id}
                    loadReviews={loadReviews}
                    reviews={reviews}
                />
            </div>
        </div>
    );
};

export default ServiceDetails;