import CartProvider  from '~/contexts/CartContext';
import WishListProvider from './contexts/WishlistContext';
export const AppProviders = ({ children }) => {
    return (
        <CartProvider>
            <WishListProvider>
            {children}
            </WishListProvider>
                   
   
        </CartProvider>
    );
};