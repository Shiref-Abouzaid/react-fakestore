import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Fake Store</h5>
                    </Col>
                    <Col md={6}>
                        <Nav className="justify-content-end">
                            <NavItem>
                                <NavLink href="react-fakestore" className="text-white">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/react-fakestore/cart" className="text-white">Cart</NavLink>
                            </NavItem>

                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-3">
                        <small>&copy; {new Date().getFullYear()} Fake Store. All rights reserved.</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;