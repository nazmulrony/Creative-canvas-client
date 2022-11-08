import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/logo2.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-stone-900 text-neutral-content">
            <div>
                <img src={logo} alt="" className='h-20' />
                <p>Creative Canvas <br /><span className='text-xs'>Copyright ©2022. Nazmul Hasan Rony. All Rights Reserved.</span></p>

            </div>
            <div>
                <span className="text-2xl text-brand font-semibold">Find me on</span>
                <ul className="grid grid-flow-col gap-4">
                    <li><button className='h-10 w-10 rounded-full bg-stone-800 hover:scale-105 duration-150 grid place-items-center'><FaLinkedin className='text-xl text-brand' /></button></li>
                    <li><button className='h-10 w-10 rounded-full bg-stone-800 hover:scale-105 duration-150 grid place-items-center'><FaFacebookF className='text-xl text-brand' /></button></li>
                    <li><button className='h-10 w-10 rounded-full bg-stone-800 hover:scale-105 duration-150 grid place-items-center'><FaInstagram className='text-xl text-brand' /></button></li>
                    <li><button className='h-10 w-10 rounded-full bg-stone-800 hover:scale-105 duration-150 grid place-items-center'><FaTwitter className='text-xl text-brand' /></button></li>

                </ul>
            </div>
        </footer>
    );
};

export default Footer;