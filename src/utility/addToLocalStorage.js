const getStoredCartList = () => {
    const storedListStr = localStorage.getItem("cart-list");
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToCart = (id) => {
    const storedList = getStoredCartList();
    if(!storedList.includes(id)){
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("cart-list", storedListStr);
    }
}


const getStoredWishList = () => {
    const storedListStr = localStorage.getItem("wish-list");
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToWishList = (id) => {
    const storedList = getStoredWishList();
    if(!storedList.includes(id)){
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("wish-list", storedListStr);
    }
}

export {getStoredCartList, addToCart, getStoredWishList, addToWishList}