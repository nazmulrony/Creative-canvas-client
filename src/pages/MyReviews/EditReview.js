import React, { } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';


const EditReview = () => {
    const review = useLoaderData();
    const navigate = useNavigate();
    useTitle("Edit Review")
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const text = form.review.value;
        const rating = form.rating.value;
        const updatedReview = { rating, text };

        fetch(`http://localhost:5000/reviews/${review?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    navigate('/my-reviews')
                }
            })
    }
    return (
        <div className='min-h-[90vh] '>
            <div className="bg-stone-900 text-light max-w-4xl mx-auto p-6 rounded-lg shadow-2xl">
                <h2 className='text-center text-3xl text-brand mb-2 font-semibold'>Edit Review</h2>

                <form onSubmit={handleUpdate}>
                    <div className='flex lg:gap-6 flex-col lg:flex-row'>
                        <div className="flex flex-col mb-3 font-semibold flex-1">
                            <label htmlFor="serviceTitle">Review On</label>
                            <input type="text" name="serviceTitle" id="serviceTitle" placeholder='Review on' readOnly defaultValue={review?.serviceTitle} className='p-2 rounded-md text-dark font-semibold' required />
                        </div>
                        <div className="flex flex-col mb-3 font-semibold">
                            <label htmlFor="rating">Rating</label>
                            <input type="text" name="rating" id="rating" className='p-2 rounded-md text-dark font-semibold' defaultValue={review?.rating} placeholder='rating' required />
                        </div>
                    </div>
                    <div className="flex flex-col mb-3 font-semibold">
                        <label htmlFor="review">Review</label>
                        <textarea name="review" id="review" className='p-2 h-20 rounded-md text-dark font-semibold' placeholder='review' defaultValue={review?.text} required />
                    </div>
                    <div className='flex justify-end gap-4'>
                        <button type="submit" className='  btn btn-brand  my-4 ' >Update</button>
                        <Link to="/my-reviews"><button className=' btn btn-error  my-4 ' >Cancel</button></Link>
                    </div>
                </form >


            </div>
        </div >
    );
};

export default EditReview;