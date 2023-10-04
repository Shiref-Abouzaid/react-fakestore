import React from 'react';
import './index.scss';
import { Card, Button } from 'react-bootstrap';
const Product = ({ product }) => {

    return (
        <Card className="product">
            <Card.Img variant="top" src={product.image} alt={product.title} />
            <Card.Body className="product-content">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Card.Text>
                    Price: ${product.price}
                </Card.Text>
                <div>
                    <Button variant="primary" className="addToCart">Add to Cart</Button>
                    <Button variant="outline-primary" className="addToWishlist">Add to Wishlist</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Product;