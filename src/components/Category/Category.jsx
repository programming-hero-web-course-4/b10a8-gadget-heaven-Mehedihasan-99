import { useEffect, useState } from 'react';
import './Category.css'
import { data } from 'autoprefixer';
const Category = () => {

    const [gadgetData, setGadgetData] = useState([]);

    useEffect(() => {
        fetch(`gadgetsData.json`)
            .then(res => res.json())
            .then(data => setGadgetData(data))
    }, [])
    let categoryList = ["all"];
    for (let i = 0; i < gadgetData.length; i++) {
        let item = gadgetData[i].category;
        if (!categoryList.includes(item)) {
            categoryList = [...categoryList, item];
        }
    }

    return (
        <div className='category flex flex-col gap-4'>
            {
                categoryList.map((category, index) => <button key={index}>{category}</button>)
            }
        </div>
    );
};

export default Category;