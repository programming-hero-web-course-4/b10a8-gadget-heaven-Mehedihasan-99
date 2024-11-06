import { MdDelete } from "react-icons/md";
import { removeCartList } from "../../utility/addToLocalStorage";

const Card = ({ item, AddToCart }) => {
    const { id, image, title, description, price } = item;



    
    return (
        <div className='bg-white rounded-lg p-8 flex flex-col md:flex-row gap-8'>
            <img src={image} alt="" className='rounded-xl' />
            <div className='flex flex-col md:flex-row items-center md:justify-between  w-full'>
                <div className='flex flex-col items-center md:items-start '>
                    <h2 className='text-2xl font-semibold mb-3'>{title}</h2>
                    <p>{description}</p>
                    <h2 className='text-xl font-semibold mt-4'>Price: ${price}</h2>
                    <button>{AddToCart}</button>
                </div>
                <div onClick={() => removeCartList(id)} className="bg-blue-50 border rounded-full text-5xl p-2">
                <MdDelete />
                </div>
            </div>
        </div>
    );
};

export default Card;