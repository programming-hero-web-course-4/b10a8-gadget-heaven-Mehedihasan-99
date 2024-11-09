import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import CardLayout from '../CardLayout/CardLayout';


const Home = () => {

    useEffect(() => {
        document.title = "Gadget Haven | Home"
    })
    return (
        <div>
            <Banner />
            <div className='max-w-6xl mx-auto'>
                <CardLayout />
            </div>
        </div>
    );
};

export default Home;