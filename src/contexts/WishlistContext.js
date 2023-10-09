import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const useWishlist = () => {
    return useContext(WishlistContext);
}

const WishListProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            return [...prevWishlist, product]
        });
    };

    const removeFromWishlist = (id) => {
        setWishlist((prevWishlist) => {
            return prevWishlist.filter((product) => product.id !== id)
        });
    }

    const value = {
        wishlist,
        addToWishlist,
        removeFromWishlist
    };
    
    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}

export default WishListProvider;