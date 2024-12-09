import { createContext, useState } from "react";
import { products } from "../assets/assets.js";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = "$";
    const deliveryFee = 10;

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    // Add item to cart
    const addToCart = (itemId, size) => {
        if (!size) {
            toast.error("Please select a valid size");
            return;
        }

        setCartItems((prevCartItems) => {
            const updatedCart = { ...prevCartItems };

            if (updatedCart[itemId]) {
                updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;
            } else {
                updatedCart[itemId] = { [size]: 1 };
            }

            return updatedCart;
        });
    };

    // Calculate total items in the cart
    const getCartCount = () => {
        return Object.values(cartItems).reduce((total, itemSizes) => {
            const sizeCount = Object.values(itemSizes).reduce((sizeTotal, count) => sizeTotal + count, 0);
            return total + sizeCount;
        }, 0);
    };

    
    const updateQuantity = async (itemId, size, quantity) =>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }
    
    const getCartAmount = () =>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch(error){
                    console.log(error)
                }
            }
        }
        return totalAmount;
    }
    const value = {
        products,
        currency,
        deliveryFee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
