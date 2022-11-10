import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const ThreeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services?limit=3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div className=''>
            <h2 className='text-brand text-3xl lg:text-4xl font-semibold text-center mt-4 lg:mt-10'>Services</h2>
            <h2 className='text-light text-md lg:text-xl  text-center mb-4 lg:mb-10'>Checkout the amazing services</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12'>
                {
                    services.map((service, index) => <ServiceCard
                        key={service._id}
                        service={service}
                        index={index}
                    />)
                }
            </div>
            <Link to="/services" className='grid place-items-center py-6'><button className="btn outline-brand">Sell All Services</button></Link>
        </div >
    );
};

export default ThreeServices;