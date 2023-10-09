import React from 'react'
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

const CartProvider  = ({children}) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart((prevCart) => {
            return [...prevCart, product]
        });
    };
    const removeFromCart = (id) => {
        setCart((prevCart) => {
            return prevCart.filter((product) => product.id !== id)
        });
    }

    const value = {
        cart,
        addToCart,
        removeFromCart
    };


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider 
