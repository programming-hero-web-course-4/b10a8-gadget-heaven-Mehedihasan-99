import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='bg-base-200'>
            <div className='relative'>
                <div className='absolute w-full'><Navbar /></div>
                <div className='min-h-[calc(100vh-541px)]'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;