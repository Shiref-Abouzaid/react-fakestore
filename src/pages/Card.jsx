import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useCart } from '~/contexts/CartContext';
function Cart() {
  const { cart, removeFromCart} = useCart();
  return (
    <Container className='mt-2'>
      {cart.map(item => (
        <Card key={item.id} className="mb-3 cartCard">
          <Row className="no-gutters">
            <Col md={4}>
              <Card.Img variant="top" src={item.image} alt={item.title} />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <strong>${item.price}</strong>
                  <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                    Remove from Cart
                  </Button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
}

export default Cart;
