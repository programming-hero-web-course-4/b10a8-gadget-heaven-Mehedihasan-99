import { IoMenuSharp, IoHeartOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><a>Statistics</a></li>
        <li><a>Dashboard</a></li>
    </>
    return (
        <div>
            <div className="navbar max-w-6xl mx-auto bg-base-100">
                <div className="navbar-start p-0">
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
                    <a className="btn btn-ghost text-xl font-bold p-0"><NavLink to="/">GADGET WORLD</NavLink></a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator bg-white p-2 rounded-full">
                            <TiShoppingCart className="text-xl"></TiShoppingCart>
                            <span className="badge badge-sm indicator-item">0</span>
                        </div>
                    </div>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator bg-white p-2 rounded-full">
                            <IoHeartOutline className="text-xl"></IoHeartOutline>
                            <span className="badge badge-sm indicator-item">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;