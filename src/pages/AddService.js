import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../hooks/useTitle';

const AddService = () => {
    useTitle("Add Service")

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const service = { name, image, price, rating, description }
        console.log(service);
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Service successfully added!')
                }
            })
            .catch(error => console.log(error))

    }
    return (
        <div className='min-h-[90vh] '>
            <div className="bg-stone-900 text-light max-w-4xl mx-auto p-6 rounded-lg shadow-2xl">
                <h2 className='text-center text-3xl text-brand mb-2 font-semibold'>Add a Service</h2>
                <Toaster />
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-3 font-semibold">
                        <label htmlFor="name">Service Name</label>
                        <input type="text" name="name" id="name" placeholder='Enter service name' className='p-2 rounded-md text-dark font-semibold' required />
                    </div>
                    <div className="flex flex-col mb-3 font-semibold">
                        <label htmlFor="image">Service Thumbnail</label>
                        <input type="text" name="image" id="image" className='p-2 rounded-md text-dark font-semibold' placeholder='Enter service thumbnail url' required />
                    </div>
                    <div className="flex flex-col mb-3 font-semibold">
                        <label htmlFor="price">Price</label>
                        <input type="text" name="price" id="price" className='p-2 rounded-md text-dark font-semibold' placeholder='Enter service price' required />
                    </div>
                    <div className="flex flex-col mb-3 font-semibold">
                        <label htmlFor="rating">Service Rating (out of 5)</label>
                        <input type="text" name="rating" id="rating" className='p-2 rounded-md text-dark font-semibold' placeholder='Enter service rating' required />
                    </div>

                    <div className="flex flex-col mb-3 font-semibold">
                        <label htmlFor="description">Service Description</label>
                        <textarea name="description" id="description" className='p-2 h-28 rounded-md text-dark font-semibold' placeholder='Enter service rating' required />
                    </div>

                    <button type="submit" className=' w-full btn btn-brand  my-4 ' >Submit</button>

                </form >


            </div>
        </div >
    );
};

export default AddService;