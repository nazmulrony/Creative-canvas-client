import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../pages/shared/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='px-2 bg-dark min-h-screen'>
                <Outlet />
                <ScrollRestoration />
            </div>

        </div>
    );
};

export default Main;

