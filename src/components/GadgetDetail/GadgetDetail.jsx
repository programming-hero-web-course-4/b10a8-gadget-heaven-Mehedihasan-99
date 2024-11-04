import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

const GadgetDetail = () => {

    const { id } = useParams();
    const gadgetId = parseInt(id);
    const gadgets = useLoaderData();

    const gadget = gadgets.find(gadget => gadget.id == id);
    const { title, price, image, availability, specification, rating, description } = gadget;

    // console.log(typeof rating)

    return (
        <div className='pt-[68px] mb-96 bg-gray-200'>
            <div className='bg-purple-700 h-[400px]'>
                <div className='max-w-6xl mx-auto space-y-8'>
                    <div className='space-y-4 text-center w-3/4 mx-auto'>
                        <h2 className='text-[32px] font-bold text-white'>Product Details</h2>
                        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                    <div className='flex gap-8  bg-white p-8 rounded-3xl'>
                        <img src={image} alt="" className='rounded-2xl w-[430px]' />
                        <div className='flex flex-col gap-4 justify-start items-start'>
                            <div className='space-y-3 font-semibold'>
                                <h2 className='text-3xl'>{title}</h2>
                                <h3 className='text-xl'>Price: ${price}</h3>
                            </div>
                            <button className='border border-green-500 rounded-full px-4'>{`${availability ? 'In Stock' : 'Out of Stock'}`}</button>
                            <p>{description}</p>
                            <div className='space-y-3'>
                                <h4 className='font-bold text-lg'>Specification:</h4>
                                <ol className='text-gray-400 pl-8 space-y-1'>
                                    {
                                        specification.map((item, index) => <li type='1' key={index}>{item}</li>)
                                    }
                                </ol>
                            </div>
                            <div>
                                <h2 className='text-lg font-bold'>Rating</h2>
                                <div className='flex items-center gap-1'>
                                    <IoIosStar className='text-yellow-400' />
                                    <IoIosStar className='text-yellow-400' />
                                    <IoIosStar className='text-yellow-400' />
                                    <IoIosStarHalf className='text-yellow-400' />
                                    <IoIosStarOutline />
                                    <span className='px-2  bg-base-200 rounded-full'>{rating}</span>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <button className='bg-purple-600 flex items-center gap-3 text-white text-lg font-bold rounded-full px-5 py-3'>Add to cart <TiShoppingCart className='text-2xl'/></button>
                                <button className='text-2xl px-5 py-3 border rounded-full'><IoHeartOutline/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetail;