import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../contextAPI";
import "./styles.css";

function Header () {

    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">eStore</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/">Produtos</Link>
                </Nav>
                <Nav>
                <ProductConsumer>
                    {(value)=> {
                    return <Link style={{color:"mediumspringgreen"}} eventKey={2} to="/cart">
                        Meu Carrinho({value.cart.length})
                    </Link>
                        }}
                </ProductConsumer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default Header;