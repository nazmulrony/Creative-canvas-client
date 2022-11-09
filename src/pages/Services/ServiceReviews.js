import React, { useEffect, useState } from 'react';
import ServiceReviewCard from './ServiceReviewCard';

const ServiceReviews = ({ id, loadReviews, reviews }) => {

    useEffect(() => {
        loadReviews(id)
    }, [id])

    return (
        <div className='text-lime-50 bg-stone-900  lg:px-20 py-6 '>
            <h2 className='text-brand text-5xl font-semibold text-center my-4'>Reviews</h2>
            {
                reviews.map(review => <ServiceReviewCard
                    key={review._id}
                    review={review}
                />)
            }
        </div>
    );
};

export default ServiceReviews;