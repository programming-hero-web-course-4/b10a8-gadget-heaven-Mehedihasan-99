import { toast } from "react-toastify";


const getStoredCartList = () => {
    const storedListStr = localStorage.getItem("cart-list");
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToCart = (id) => {
    const storedList = getStoredCartList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("cart-list", storedListStr);
    }
}

// Remove form wishlist
const removeWishList = (id) => {
    const storedList = getStoredWishList();
    const newStoredList = storedList.filter(item => item !== id);
    const storedListStr = JSON.stringify(newStoredList);
    localStorage.setItem("wish-list", storedListStr);
}

// Remove form cart
const removeCartList = (id) => {
    const storedList = getStoredCartList();
    const newStoredList = storedList.filter(item => item !== id);
    const storedListStr = JSON.stringify(newStoredList);
    localStorage.setItem("cart-list", storedListStr);
    toast.success("Remove item form CART")
};

//remove all form cart
const removeAllCart = () => {
    const storedList = [];
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("cart-list", storedListStr);
    localStorage.setItem("wish-list", storedListStr);
}

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem("wish-list");
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToWishList = (id) => {
    const storedList = getStoredWishList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("wish-list", storedListStr);
    }
}



export { getStoredCartList, addToCart, getStoredWishList, addToWishList, removeWishList, removeCartList, removeAllCart }