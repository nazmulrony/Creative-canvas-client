import React from 'react';
import useTitle from '../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='md:px-20  '>
            <div className=' bg-stone-900 py-6 lg:py-10'>
                <h2 className='text-3xl lg:text-4xl text-brand text-center font-semibold'>Frequently Asked Questions</h2>

                <div className='lg:px-20 px-2'>
                    <div className='bg-dark p-4 lg:p-10 my-4 text-light rounded-lg'>
                        <h4 className='text-xl lg:text-2xl font-semibold text-brand'>Difference between SQL and NoSQL</h4>
                        <p className='my-2'><span className='font-semibold'>SQL:</span> SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis. </p>
                        <p ><span className='font-semibold'>NoQSL:</span> NoSQL databases--also known as “non SQL” or “not only SQL,” store data in a format other than relational tables. If your data requirements aren’t clear at the outset or if you’re dealing with massive amounts of unstructured data, you’ll want to use non-relational databases because they offer greater flexibility. </p>
                    </div >
                    <div className='bg-dark p-4 lg:p-10 my-4 text-light rounded-lg'>
                        <h4 className='text-xl lg:text-2xl font-semibold text-brand'>What is JWT, and how does it work?</h4>
                        <p className='my-2'><span className='font-semibold'>JWT:</span> JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key. </p>
                        <p ><span className='font-semibold'></span> Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key. </p>
                    </div >
                    <div className='bg-dark p-4 lg:p-10 my-4 text-light rounded-lg'>
                        <h4 className='text-xl lg:text-2xl font-semibold text-brand'>What is the difference between javascript and NodeJS?</h4>
                        <p className='my-2'><span className='font-semibold'>Javascript:</span> Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                        <p ><span className='font-semibold'>NodeJS:</span> NodeJS is a cross-platform and open source Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                    </div >
                    <div className='bg-dark p-4 lg:p-10 my-4 text-light rounded-lg'>
                        <h4 className='text-xl lg:text-2xl font-semibold text-brand'>How does NodeJS handle multiple requests at the same time?</h4>
                        <p className='my-2'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                    </div >
                </div>
            </div>
        </div>
    );
};

export default Blogs;