import React from 'react';
import './index.scss';

const Product = ({ product }) => {
    return (
        <div className="product">
            <img src={product.image} alt={product.title} />
            <div className="product-content">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <div>
                    <button className="button addToCart">Add to Cart</button>
                    <button className="button addToWishlist">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Product;