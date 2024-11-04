import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer max-w-6xl mx-auto flex flex-col items-center gap-2 md:gap-4 lg:gap-8 py-10 lg:py-24'>
            <div className='flex flex-col gap-3 items-center'>
                <h2>Gadget World</h2>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className='w-full border'></div>
            <div className='flex flex-col md:flex-row space-y-4 md:gap-14 lg:gap-40 justify-center items-center md:items-start text-center'>
                <div>
                    <h3>Services</h3>
                    <p>Product Support</p>
                    <p>Order Tracking</p>
                    <p>Shipping & Delivery</p>
                    <p>Returns</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h3>Legal</h3>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    </div>
            </div>
        </div>
    );
};

export default Footer;