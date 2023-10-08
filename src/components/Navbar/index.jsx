import React from 'react'
import './index.scss'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from "react-router-dom";
export default function MyNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container  className="justify-content-between">
                <Navbar.Brand >
                    <Link to="/">ShopName</Link>
                    
                    
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#cart" className="icon-with-count">
                            <span className="icon">🛒</span>
                            <Badge variant="primary">0</Badge>
                        </Nav.Link>
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
