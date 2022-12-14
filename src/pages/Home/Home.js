import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Spinner from '../shared/Spinner';
import Banner from './Banner';
import ContactMe from './ContactMe';
import Gallery from './Gallery';
import ThreeServices from './ThreeServices';

const Home = () => {
    const { loading } = useContext(AuthContext);
    useTitle('Home')
    //spinner
    if (loading) {
        return <Spinner />
    }
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