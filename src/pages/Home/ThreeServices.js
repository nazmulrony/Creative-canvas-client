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

        <div >
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12'>
                {
                    services.map((service, index) => <ServiceCard
                        key={service._id}
                        service={service}
                        index={index}
                    />)
                }
            </div>
            <Link className='grid place-items-center'><button className="btn btn-brand">Sell All Services</button></Link>
        </div >
    );
};

export default ThreeServices;