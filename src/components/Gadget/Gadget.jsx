import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
    const {id, image, price, title } = gadget;
    return (
        <div className="bg-white space-y-6 p-5 rounded-2xl">
            <img src={image} alt="" className="w-full h-44 rounded-xl cov"/>
            <div className="space-y-4">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <h2 className="text-xl font-medium text-gray-300"> Price:{price}</h2>
                </div>
                <button className="border-2 border-purple-600 text-purple-600 px-3 py-1 rounded-3xl"><Link to={`/gadget/${id}`}>View Details</Link></button>
            </div>
        </div>
    );
};

export default Gadget;