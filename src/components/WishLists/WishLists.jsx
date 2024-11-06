import { useLoaderData } from 'react-router-dom';
import { getStoredWishList } from '../../utility/addToLocalStorage';
import WishCard from '../WishCard/WishCard';


const WishLists = () => {

    const gadgets = useLoaderData()

    const storedWishList = getStoredWishList();
    const lists = gadgets.filter(gadget => storedWishList.includes(gadget.id));


    return (
        <div className="mt-12 flex flex-col gap-8">
            <h2 className="text-2xl font-bold">WishList : {storedWishList.length}</h2>
            <div className='flex flex-col gap-6'>
                {
                    lists.map(item => <WishCard item={item}></WishCard>)
                }
            </div>
        </div>
    );
};

export default WishLists;