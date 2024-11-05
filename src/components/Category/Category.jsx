import './Category.css'


const Category = ({ categoryList, filterCategoryGadgets, setGadgets,allGadgets }) => {

    return (
        <div className='category flex flex-col gap-4'>
            <button onClick={() => setGadgets(allGadgets)}>All Products</button>
            {
                categoryList.map((category, index) => <button key={index}  onClick={() => filterCategoryGadgets(category)}>{category}</button>)
            }
        </div>
    );
};

export default Category;