import Gadgets from "../Gadgets/Gadgets";
import Category from "../Category/Category";

const CardLayout = () => {


    return (
        <div className="max-w-6xl mx-auto py-4 lg:py-24 px-2">
            <h2 className="mb-12 text-[40px] font-bold text-center">Explore Cutting-Edge Gadgets</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6  ">
                <div className="col-span-1 p-5 bg-white rounded-2xl">
                    <Category/>
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <Gadgets />
                </div>
            </div>
        </div>
    );
};

export default CardLayout;