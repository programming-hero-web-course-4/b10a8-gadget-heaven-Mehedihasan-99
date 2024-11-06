import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { IoHeartOutline, IoHeart  } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { addToCart, addToWishList, getStoredWishList } from '../../utility/addToLocalStorage';
import { toast } from 'react-toastify';



const GadgetDetail = () => {

    const [again, setAgain] = useState(true)
    const [wishlist, setWishlist] = useState(true)
    const { id } = useParams();
    const gadgets = useLoaderData();

    const gadget = gadgets.find(gadget => gadget.id == id);
    const { title, price, image, availability, specification, rating, description } = gadget;

    const handleAddToCart = (id) => {
        if(again){
            addToCart(id);
            toast.success("Adding item to Cart")
            setAgain(false)
            return
        }
        else{
            toast("Already this item added Cart")
            return 
        }   
    }

    const handleAddToWishlist = (id) => {
        if(wishlist){
            addToWishList(id);
            toast.success('Adding item to Wishlist');
            setWishlist(false);
            return
        }
        else{
            toast('Already this item added to Wishlist');
            return
        }


    }

    return (
        <div className=' mb-[780px] md:mb-72 lg:mb-96 bg-gray-200'>
            <div className='bg-purple-700 h-[400px]'>
                <div className='p-4 lg:p-8 max-w-6xl mx-auto space-y-8'>
                    <div className='space-y-4 text-center w-3/4 mx-auto'>
                        <h2 className='text-[32px] font-bold text-white'>Product Details</h2>
                        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-8 bg-white p-4 lg:p-8 rounded-3xl'>
                        <img src={image} alt="" className='rounded-2xl w-[430px]' />
                        <div className='flex flex-col gap-4 items-center justify-start md:items-start'>
                            <div className='text-center md:text-start space-y-3 font-semibold'>
                                <h2 className='text-3xl'>{title}</h2>
                                <h3 className='text-xl'>Price: ${price}</h3>
                            </div>
                            <button className={ `border border-green-500 rounded-full px-4 ${availability ? 'text-green-400 border-green-400' : 'text-red-400 border-red-400'}`}>{availability ? 'In Stock' : 'Out of Stock'}</button>
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
                                <button onClick={() => handleAddToCart(id)} className='bg-purple-600 flex items-center gap-3 text-white text-lg font-bold rounded-full px-5 py-3'>Add to cart <TiShoppingCart className='text-2xl'/></button>
                                <button onClick={() => handleAddToWishlist(id)} className='text-2xl px-5 py-3 border rounded-full'>{wishlist ? <IoHeartOutline/> : <IoHeart className='text-red-500'/>}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetail;