import React from 'react';
import './index.scss';
import { Card, Button } from 'react-bootstrap';
const Product = ({ product }) => {
    const maxLength = 200;

    // Truncate the description if it exceeds maxLength
    const truncatedDescription = product.description.length > maxLength
        ? product.description.substring(0, maxLength - 3) + "..."
        : product.description;
    return (
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
                    <Button variant="primary" className="addToCart">Add to Cart</Button>
                    <Button variant="outline-primary" className="addToWishlist">Add to Wishlist</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Product;