import CartProvider  from '~/contexts/CartContext';
export const AppProviders = ({ children }) => {
    return (
        <CartProvider>
                    {children}
   
        </CartProvider>
    );
};