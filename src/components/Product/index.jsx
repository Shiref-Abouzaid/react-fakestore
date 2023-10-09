import React from 'react';
import './index.scss';
import { Card, Button } from 'react-bootstrap';
import { useNavigate   } from 'react-router-dom';
import { useCart } from '~/contexts/CartContext';

const Product = ({ product, isInCart }) => {
    const { addToCart,removeFromCart } = useCart();
    const maxLength = 20;
    const navigate = useNavigate();
    const inCart = isInCart(product.id)
    // Truncate the description if it exceeds maxLength
    const truncatedDescription = product.description.length > maxLength
        ? product.description.substring(0, maxLength - 3) + "..."
        : product.description;

        const handleAddToCartClick = ($e) => {
        
            $e.stopPropagation();
            addToCart(product);
    
        }

        const handleCardClick = () => {
            navigate(`product/${product.id}`);
        };

        const handleRemoveFromCartClick = ($e) => {
            $e.stopPropagation();
            removeFromCart(product.id)
        }
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
                        <h1>SD {inCart}</h1>
                        {inCart ? <Button variant="danger" onClick={($e)=>handleRemoveFromCartClick($e)}>Remove from Cart</Button> : <Button variant="primary" onClick={($e)=>{handleAddToCartClick($e)}} className="addToCart">Add to Cart</Button>}
                        
                        <Button variant="outline-primary" className="addToWishlist">Add to Wishlist</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Product;