import Gadgets from "../Gadgets/Gadgets";
import Category from "../Category/Category";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const CardLayout = () => {
    
    const allGadgets = useLoaderData();
    const [gadgets, setGadgets] = useState(allGadgets);

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
    // console.log(data)

    return (
        <div className="max-w-6xl mx-auto py-4 lg:py-24 px-2">
            <h2 className="mb-12 text-[40px] font-bold text-center">Explore Cutting-Edge Gadgets</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6  ">
                <div className="col-span-1 p-5 bg-white rounded-2xl">
                    <Category 
                    categoryList={categoryList}
                    filterCategoryGadgets={filterCategoryGadgets}
                    setGadgets={setGadgets}
                    allGadgets={allGadgets}
                     />
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <Gadgets gadgets={gadgets} />
                </div>
            </div>
        </div>
    );
};

export default CardLayout;