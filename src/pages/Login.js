import React, { useState } from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const { loginUser, googleSignIn } = useContext(AuthContext);
    // reg error state
    const [error, setError] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
            })

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate('/');
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            });
    }

    return (
        <div className='min-h-[90vh] py-4'>
            <div className="bg-stone-900 text-light max-w-md mx-auto p-6 rounded-lg shadow-2xl">
                <h2 className='text-center text-3xl text-brand mb-2 font-semibold'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-3 font-semibold">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter your email' className='p-2 rounded-md text-dark font-semibold' required />
                    </div>
                    <div className="flex flex-col mb-3 font-semibold">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className='p-2 rounded-md text-dark font-semibold' placeholder='Enter your password' required />
                    </div>
                    {
                        error && <p className='text-red-600'> {error}</p>
                    }
                    <button type="submit" className=' w-full btn btn-brand  my-4 ' >Login</button>
                    <p className='text-center my-2 text-sm'>New to Creative Canvas? <Link to="/register" className='btn-link text-brand'>Register</Link></p>
                    <div className='line-break-container'>
                        <hr className='line-break' />
                        <p className='text-center'>or</p>
                        <hr className='line-break' />
                    </div>
                    <div>

                    </div>
                </form >
                <button onClick={handleGoogleSignIn} className="btn flex-1 w-full outline-brand  my-3"><FaGoogle className='mr-2 text-[20px]' /> Google</button>

            </div>
        </div >
    );
};

export default Register;