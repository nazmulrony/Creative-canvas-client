import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Home/ServiceCard';

const Services = () => {
    const services = useLoaderData()
    console.log(services);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12 py-4 lg:py-10'>
            {
                services.map((service, index) => <ServiceCard
                    key={service._id}
                    service={service}
                    index={index}
                />)
            }
        </div>
    );
};

export default Services;