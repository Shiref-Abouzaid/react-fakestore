import React, {useState} from 'react'
import './index.scss'
import { Navbar, Nav, Container, Badge, Dropdown, Row, Col, Image as BImage, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useCart } from '~/contexts/CartContext';
export default function MyNavbar() {
    const { cart } = useCart();
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <Navbar bg="light" expand="lg">
            <Container className="justify-content-between">
                <Navbar.Brand >
                    <Link to="/react-fakestore">Fake Store</Link>


                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Dropdown show={showDropdown}  onToggle={(isOpen) => setShowDropdown(isOpen)}>
                            <Dropdown.Toggle variant="default" id="dropdown-basic">
                                <span className="icon">🛒</span>
                                <Badge variant="primary">{cart.length}</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {cart.map((item, index) => (

                                    index <= 4 ? <Dropdown.Item key={index} className="cart-dropdown-item">
                                        <Link className='productLink' to={`/react-fakestore/product/${item.id}`}>
                                            <Row>
                                                <Col xs={4}>
                                                    <BImage height={"30"} src={item.image} alt={item.title} thumbnail />
                                                </Col>
                                                <Col xs={8}>
                                                    <h6>
                                                        {
                                                            item.title.length > 20
                                                                ? item.title.substring(0, 20) + "..."
                                                                : item.title
                                                        }
                                                    </h6>
                                                    <p>${item.price}</p>
                                                </Col>
                                            </Row>
                                        </Link>

                                    </Dropdown.Item> : null


                                ))}
                              <div className='text-center'>
                                <Link to="/react-fakestore/cart"><Button variant='primary' size='sm'  onClick={() => setShowDropdown(false)} >Check Cart ({cart.length})</Button></Link>

                                </div>

                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href="#wishlist" className="icon-with-count">
                            <span className="icon">❤️</span>
                            <Badge variant="primary">0</Badge>
                        </Nav.Link>
                        <Nav.Link href="#cart">Cart</Nav.Link>
                        <Nav.Link href="#wishlist">Wishlist</Nav.Link>
                        <Nav.Link href="#profile">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}
