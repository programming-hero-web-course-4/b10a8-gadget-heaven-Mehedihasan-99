import { addToCart, removeWishList } from "../../utility/addToLocalStorage";
import { TiShoppingCart } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const WishCard = ({ item }) => {
    const { id, image, title, description, price } = item;

    const handleAddToCart = (id) => {
        addToCart(id);
        removeWishList(id);
        toast.success('Adding item to cart form wishlist')
    }

    const handleRemove = () => {
        removeWishList(id)
        toast('Remove item to wishlist')
    }



    return (
        <div className='bg-white rounded-lg p-8 flex flex-col md:flex-row gap-8'>
            <img src={image} alt="" className='rounded-xl' />
            <div className='flex items-center justify-between  w-full'>
                <div className='text-start'>
                    <h2 className='text-2xl font-semibold mb-3'>{title}</h2>
                    <p>{description}</p>
                    <h2 className='text-xl font-semibold mt-4'>Price: ${price}</h2>
                    <button onClick={() => handleAddToCart(id)} className='bg-purple-600 flex items-center gap-3 text-white text-lg font-bold rounded-full px-5 py-3'>Add to cart <TiShoppingCart className='text-2xl' /></button>
                </div>
                <div onClick={() => handleRemove(id)} className="bg-blue-50 border rounded-full text-5xl p-2">
                    <MdDelete />
                </div>
            </div>
        </div>
    );
};

export default WishCard;