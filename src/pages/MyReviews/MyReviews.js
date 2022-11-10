import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import MyReviewCard from './MyReviewCard';


const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    const loadReviews = (email) => {
        fetch(`http://localhost:5000/userReviews?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('creativeCanvasToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data)
                console.log(data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        loadReviews(user?.email)
    }, [user?.email])

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure you want to delete this review?');
        if (confirm) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        loadReviews(user?.email);
                        toast.error('Review Deleted')
                    }
                })
        }
    }

    return (
        <div className='md:px-20  '>
            <div className=' bg-stone-900 py-6 lg:py-10'>
                <h2 className='text-3xl lg:text-4xl text-brand text-center font-semibold'>My Reviews</h2>
                {
                    !reviews?.length && <p className='text-center text-light text-2xl my-2'>No reviews were added</p>
                }
                <Toaster />
                <div className='lg:px-20 px-2'>
                    {
                        reviews?.map(review => <MyReviewCard
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                        />)
                    }
                </div>
            </div>

        </div>
    );
};

export default MyReviews;