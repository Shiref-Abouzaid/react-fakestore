import React from 'react';
import './index.scss';
import { Card, Button } from 'react-bootstrap';
import { useNavigate   } from 'react-router-dom';
import { useCart } from '~/contexts/CartContext';

const Product = ({ product }) => {
    const { addToCart } = useCart();
    const maxLength = 200;
    const navigate = useNavigate();
    // Truncate the description if it exceeds maxLength
    const truncatedDescription = product.description.length > maxLength
        ? product.description.substring(0, maxLength - 3) + "..."
        : product.description;

        const handleAddToCartClick = ($e) => {
            addToCart(product);
            $e.stopPropagation();
            console.log("Product added to cart:", product.id);
    
        }

        const handleCardClick = () => {
            navigate(`product/${product.id}`);
        };
    return (
        <div onClick={handleCardClick} className='productLink' >
            <Card className="product">
                <Card.Img variant="top" src={product.image} alt={product.title} />
                <Card.Body className="product-content">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {truncatedDescription}
                    </Card.Text>
                    <Card.Text>
                        Price: ${product.price}
                    </Card.Text>
                    <div>
                        <Button variant="primary" onClick={($e)=>{handleAddToCartClick($e)}} className="addToCart">Add to Cart</Button>
                        <Button variant="outline-primary" className="addToWishlist">Add to Wishlist</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Product;