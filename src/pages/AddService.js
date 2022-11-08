import React from 'react';

const AddService = () => {
    return (
        <div className='min-h-[90vh] py-4'>
            <div className="bg-stone-900 text-light max-w-4xl mx-auto p-6 rounded-lg shadow-2xl">
                <h2 className='text-center text-3xl text-brand mb-2 font-semibold'>Add a Service</h2>
                <form >
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