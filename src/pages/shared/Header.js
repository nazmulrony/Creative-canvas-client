import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
// import { AuthContext } from '../contexts/AuthProvider';




const Header: React.FC = () => {
    const user = { name: 'Rony', email: 'nhrony65@gmail.com' }
    // const { user, logOut } = useContext(AuthContext);

    const [navbar, setNavbar] = useState(false);


    const handleSignOut = () => {
        // logOut()
    };

    const navLinks = [
        <div
            className="flex flex-col w-full gap-5 font-semibold md:items-center md:flex-row "
            key={1}
        >
            <NavLink className={({ isActive }) => isActive ? 'text-secondary underline underline-offset-2' : undefined} to={`/home`}>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-secondary underline underline-offset-2' : undefined} to={`/blog`}>Blog</NavLink>

            {
                user?.uid && <span >
                    <div className="flex  items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-white/30">

                        {user?.photoURL ? (

                            <img
                                className="object-cover w-full h-full"
                                src={user.photoURL}
                                alt=""
                            />
                        ) : (
                            <FaUser />
                        )}

                    </div>
                </span>
            }
            {user?.uid ? (
                <button onClick={handleSignOut} className="btn btn-xs text-gray-400 w-20 hover:text-light">Sign Out</button>
            ) : (
                <>
                    <NavLink className={({ isActive }) => isActive ? 'text-secondary underline underline-offset-2' : undefined} to={`/login`}>Sign In</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-secondary underline underline-offset-2' : undefined} to={`/register`}>Register</NavLink>
                </>
            )}

        </div>,
    ];

    return (
        <nav className="w-full text-white bg-dark">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link
                            to={`/`}
                            className="flex gap-2 text-2xl lg:text-4xl font-bold items-center"
                        >
                            <img
                                className=" h-10 lg:h-14"
                                src={logo}
                                alt=""
                            />
                            <span>Creative</span>
                            <span className='text-brand'>Canvas</span>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2rounded-md "
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <FaTimes className="w-6 h-6  text-brand" />
                                ) : (
                                    <FaBars className="w-6 h-6 text-brand" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${navbar ? 'block' : 'hidden'
                            }`}
                    >
                        {navLinks}

                    </div>

                </div>
            </div>
            <hr className='border-black' />
        </nav>
    );
};

export default Header;