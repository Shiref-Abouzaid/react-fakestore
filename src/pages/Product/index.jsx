import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './index.scss'
import { useCart } from '~/contexts/CartContext';
const Product = () => {
    const [product, setProduct] = useState(null); // Initialize product state to null
    const [error, setError] = useState(null);
    const params = useParams();
    const [loading, setLoading] = useState(true);
    
    const { addToCart, cart, removeFromCart } = useCart();
    
    const isInCart = () => { 
        return cart.some((item) => item.id === product.id);
    }

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((response) => {
                setProduct(response);
                setLoading(false);
            }).catch((error) => {
                setError(error.message);
                setLoading(false);
            });

    }, [params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>No product found.</div>;
    }



    return (
        <Card className="product product-page">
            <Card.Img variant="top" src={product.image} alt={product.title} />
            <Card.Body className="product-content">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Card.Text>
                    Price: ${product.price.toFixed(2)}
                </Card.Text>
                <div>
                    {isInCart() ? <Button variant="danger" onClick={()=>removeFromCart(product.id)}>Remove from Cart</Button> : <Button variant="primary" onClick={()=>addToCart(product)} className="addToCart">Add to Cart</Button>}

                    <Button variant="outline-primary" className="addToWishlist">Add to Wishlist</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Product;
