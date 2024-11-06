import './Category.css'

const Category = ({ categoryList, filterCategoryGadgets, setGadgets, allGadgets, handleAccessories, setNoData }) => {

    const handleAllBtn = (allGadgets) => {
        setGadgets(allGadgets);
        setNoData(true);
    }

    const handleCategory = (category) => {
        filterCategoryGadgets(category)
        setNoData(true);
    }

    return (
        <div className='category flex flex-col gap-4'>
            <button onClick={() =>handleAllBtn(allGadgets)}>All Products</button>
            {
                categoryList.map((category, index) => <button key={index} onClick={() => handleCategory(category)}>{category}</button>)
            }
            <button onClick={handleAccessories}>Accessories</button>
        </div>
    );
};

export default Category;