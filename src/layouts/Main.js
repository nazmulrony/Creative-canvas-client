import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Header from '../pages/shared/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='px-2 bg-dark min-h-screen lg:py-10 py-5'>
                <Outlet />
                <ScrollRestoration />
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;

