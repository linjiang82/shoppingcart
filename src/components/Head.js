import React from 'react';
import {Nav, Navbar, NavItem, Col} from 'react-bootstrap';
import CartWrap from '../containers/CartWrap';

const Head = () => {
    return (
        <div>
            <Navbar collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Home</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Col sm={6}>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                Special 
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                Popular 
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Col>
                <Col sm={4}>
                    <CartWrap /> 
                </Col>
            </Navbar>
            <div className='head'>
                Shopping Cart Example
            </div>
        </div>
    )
}

export default Head;
