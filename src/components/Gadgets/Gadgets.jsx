import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";


const Gadgets = () => {

    const [gadgets, setGadgets] = useState([])
    useEffect(() => {
        fetch('gadgetsData.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    }, [])
    
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    gadgets.map(gadget => <Gadget key={gadget.id} gadget={gadget}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;