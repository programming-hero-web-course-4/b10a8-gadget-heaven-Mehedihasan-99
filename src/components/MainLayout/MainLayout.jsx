import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className='max-w-6xl mx-auto'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;