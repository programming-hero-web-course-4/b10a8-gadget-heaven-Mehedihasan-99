import { useLoaderData } from "react-router-dom";
import { getStoredCartList } from "../../utility/addToLocalStorage";
import Card from "../Card/Card";

const CartList = () => {

    const gadgets = useLoaderData();

    const storedCartList = getStoredCartList();
    const cartList = gadgets.filter(gadget => storedCartList.includes(gadget.id));

    const totalPrice = cartList.reduce((total, item) => total + item.price, 0);

    return (
        <div className="mt-12 flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Cart : {storedCartList.length}</h2>
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
                    <h2 className="text-lg md:text-2xl font-bold pr-2">Total cost:${totalPrice} </h2>
                    <button className="border border-purple-400 rounded-full text-purple-500 px-2 md:px-6 py-1 md:py-3">Sort by Price</button>
                    <button className="border rounded-full bg-purple-600 text-white py-1 md:py-3 px-2 md:px-6">Purchase</button>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                {
                    cartList.map(item => <Card key={item.id} item={item} ></Card>)
                }
            </div>
        </div>
    );
};

export default CartList;