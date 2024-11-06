import { useState } from "react";
import CartList from "../CartList/CartLIst";
import WishLists from "../WishLists/WishLists";

const Dashboard = () => {

    const [showList, setShowList] = useState(true);

    const handleShowCartList = () => {
        setShowList(true);
    }

    const handleShowWishList = () => {
        setShowList(false);
    }
    
    return (
        <div className='max-w-7xl mx-auto mb-5'>
            <div className="max-w-7xl mx-auto bg-purple-600 py-8 space-y-8 text-center">
                <div className="w-11/12 md:w-2/3 lg:w-1/2 mx-auto space-y-4">
                    <h2 className="text-2xl md:text-[32px] font-bold text-white">Dashboard</h2>
                    <p className="text-gray-400">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className=" flex flex-col md:flex-row text-lg gap-6 text-white justify-center font-extrabold w-1/2 mx-auto md:w-full">
                    <button onClick={handleShowCartList} className={`p-3 px-8 md:px-16  border rounded-full ${showList?'bg-white text-purple-600': 'bg-purple-600'}`}>cart</button>
                    <button onClick={handleShowWishList} className={`p-3 md:px-16  border rounded-full ${!showList?'bg-white text-purple-600': 'bg-purple-600'}`}>WishList</button>
                </div>
            </div>
            <div className="w-11/12 mx-auto">
                {showList ? <CartList></CartList> : <WishLists/>}
            </div>

        </div>
    );
};

export default Dashboard;