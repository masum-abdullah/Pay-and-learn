import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Barnav.css'

const Barnav = (props) => {
    return (
        <div>
            <Navbar bg="success" variant="dark">
                    <Navbar.Brand href="#home"><img src={logo} alt="" srcset=""/></Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link className='link' href="#home">Home</Nav.Link>
                        <Nav.Link className='link' href="#features">Courses</Nav.Link>
                        <Nav.Link className='link' href="#contact">Contact</Nav.Link>
                        <Nav.Link className='link' href="#about">About us</Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    );
};

export default Barnav;