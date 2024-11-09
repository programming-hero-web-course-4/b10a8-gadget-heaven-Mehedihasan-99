import { useEffect } from "react";
import Recharts from "../Recharts/Recharts";

const Statistics = () => {

    useEffect(() => {
        document.title = " Gadget Haven | Statistics"
    })

    return (
        <div className='max-w-7xl mx-auto space-y-4 lg:space-y-12 mb-5 md:mb-10 lg:mb-24'>
            <div className="max-w-7xl mx-auto bg-purple-600 py-8">
                <div className="w-11/12 md:w-2/3 mx-auto space-y-8 text-center">
                    <h2 className="text-white text-[32px] font-bold">Statistics</h2>
                    <p className="text-gray-300">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 lg:gap-8 max-w-6xl mx-auto">
                <h2 className="p-4 text-2xl font-bold">Statistics :</h2>
                <div className="bg-white rounded-2xl py-4">
                    <Recharts />
                </div>
            </div>
        </div>
    );
};

export default Statistics;