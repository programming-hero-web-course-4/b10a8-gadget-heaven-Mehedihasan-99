import { useLoaderData } from "react-router-dom";
import { getStoredCartList, removeAllCart } from "../../utility/addToLocalStorage";
import Card from "../Card/Card";
import group from "../../assets/Group.png"
import { useState } from "react";

const CartList = () => {

    const gadgets = useLoaderData();

    const storedCartList = getStoredCartList();
    const cartList = gadgets.filter(gadget => storedCartList.includes(gadget.id));

    const totalPrice = cartList.reduce((total, item) => total + item.price, 0);

    const [lists, setLists] = useState(cartList)
    const handleShortPrice = () => {
        const sortPrice = [...cartList,]
        setLists(sortPrice.sort((a, b) => b.price - a.price));
    };

    const handlePurchase = () => {
        removeAllCart()
        document.getElementById('my_modal_5').showModal();
    }

    return (
        <div className="mt-4 lg:mt-12 flex flex-col  lg:gap-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Cart : {storedCartList.length}</h2>
                <div className="flex flex-col md:flex-row items-end md:items-center gap-1 md:gap-4">
                    <h2 className="text-lg md:text-2xl font-bold pr-2">Total cost:${totalPrice} </h2>
                    <button onClick={handleShortPrice} className="border border-purple-400 rounded-full text-purple-500 px-2 md:px-6 py-1 md:py-3">Sort by Price</button>
                    <button onClick={handlePurchase} className="border rounded-full bg-purple-600 text-white py-1 md:py-3 px-2 md:px-6">Purchase</button>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                {
                    lists.map(item => <Card key={item.id} item={item} ></Card>)
                }
            </div>

            {/* modal */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <img src={group} alt="" className="w-6 md:w-10 mx-auto pb-4" />
                    <h2 className="text-base md:text-3xl text-center">Payment Successfully</h2>
                    <div className="divider my-1 md:my-4"></div>
                    <h3 className="text-center text-xs md:text-xl pb-1">Thanks for purchasing</h3>
                    <h4 className="text-center text-xs md:text-base font-bold pb-3 md:pb-8">Total cost:${totalPrice}</h4>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CartList;