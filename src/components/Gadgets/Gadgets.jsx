import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";


const Gadgets = ({ gadgets}) => {

    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2  md:gap-6">
                {
                    gadgets.map(gadget => <Gadget key={gadget.id} gadget={gadget}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;