import { IoMenuSharp, IoHeartOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { getStoredCartList, getStoredWishList } from "../../utility/addToLocalStorage";
import Dashboard from "../Dashboard/Dashboard";


const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>

    const cartList = getStoredCartList();
    const wishlist = getStoredWishList();



    return (
        <div className="bg-white backdrop-blur-lg bg-opacity-10">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start px-2 md:px-6 ">
                    <div className="dropdown md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <IoMenuSharp className="text-2xl"></IoMenuSharp>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <button className="btn btn-ghost text-xl font-bold p-0"><NavLink to="/">Gadget Haven</NavLink></button>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end pr-4">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator bg-white p-2 rounded-full">
                            <NavLink to="/dashboard"><TiShoppingCart className="text-xl"></TiShoppingCart><span className="badge badge-sm indicator-item">{cartList.length}</span></NavLink>
                        </div>
                    </div>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator bg-white p-2 rounded-full">
                            <NavLink to="/dashboard"><IoHeartOutline className="text-xl"></IoHeartOutline>
                                <span className="badge badge-sm indicator-item">{wishlist.length}</span></NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;