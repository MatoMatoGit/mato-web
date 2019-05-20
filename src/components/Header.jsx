import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Scrollspy from 'react-scrollspy';

const Header = ({data}) => {

    return (
        <>
            <Navbar bg="white" sticky="top" expand="lg" className="header justify-content-between">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Brand href="#home">
                    <img src='./images/matomato.svg' height="45px" alt="MatoMato"/>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Scrollspy items={['hero', 'about', 'product-detail-page', 'contact']}
                                   currentClassName="selected">

                            <Nav.Link href="#hero">Home</Nav.Link>
                            <Nav.Link href="#about">Over Ons</Nav.Link>
                            <Nav.Link href="#product-overview-page">Products</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>

                        </Scrollspy>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header