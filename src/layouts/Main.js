import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='px-2 bg-dark min-h-screen'>
                <Outlet />
            </div>

        </div>
    );
};

export default Main;

