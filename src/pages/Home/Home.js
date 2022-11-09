import React from 'react';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Gallery from './Gallery';
import ThreeServices from './ThreeServices';

const Home = () => {
    return (
        <div>
            <Banner />
            <ThreeServices />
            <Gallery />
            <ContactMe />
        </div>
    );
};

export default Home;