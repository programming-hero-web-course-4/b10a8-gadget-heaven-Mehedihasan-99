import Gadgets from "../Gadgets/Gadgets";
import Category from "../Category/Category";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const CardLayout = () => {

    const allGadgets = useLoaderData();

    const [gadgets, setGadgets] = useState(allGadgets);
    const [noData, setNoData] = useState(true);
    


    let categoryList = [];
    for (let i = 0; i < allGadgets.length; i++) {
        let item = allGadgets[i].category;
        if (!categoryList.includes(item)) {
            categoryList = [...categoryList, item];
        }
    };

    const filterCategoryGadgets = (cat) => {
        const newGadgets = allGadgets.filter(newGadget => newGadget.category === cat);
        setGadgets(newGadgets)
    }

    const handleAccessories = () => {
        setNoData(false)
    }

    return (
        <div className="max-w-6xl mx-auto py-4 lg:py-24 px-2">
            <h2 className="mb-4 md:mb-8 lg:mb-12 text-2xl md:text-3xl lg:text-[40px] font-bold text-center text-purple-600">Explore Cutting-Edge Gadgets</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6  ">
                <div className="col-span-1  ">
                    <div className="bg-white p-10 rounded-2xl">
                        <Category
                            categoryList={categoryList}
                            filterCategoryGadgets={filterCategoryGadgets}
                            setGadgets={setGadgets}
                            allGadgets={allGadgets}
                            handleAccessories={handleAccessories}
                            setNoData={setNoData}
                        />
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <div className={`${noData ? 'flex' : 'hidden'}`}>
                        <Gadgets gadgets={gadgets} />
                    </div>
                    <h2 className={`${noData ? 'hidden':'flex text-6xl font-bold text-purple-700'}`}>No Data Found</h2>
                </div>
            </div>
        </div>
    );
};

export default CardLayout;