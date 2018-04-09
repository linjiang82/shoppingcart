import React from 'react';
import {Nav, Navbar, NavItem, Col} from 'react-bootstrap';
import {Route, Link} from 'react-router-dom';
import CartWrap from '../containers/CartWrap';
import {Pro, Sp, Pop} from '../containers/ProWrap';

const Head = () => {
    return (
        <div>
            <Navbar collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/home">Home</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Col sm={6}>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem componentClass={Link} eventKey={1} href="/Special" to="/Special">
                                Special 
                            </NavItem>
                            <NavItem componentClass={Link} eventKey={1} href="/Popular" to="/Popular">
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
            <Route exact path='/Home' component={Pro} />
            <Route exact path='/Special' component={Sp} />
            <Route exact path='/Popular' component={Pop} />
        </div>
    )
}

export default Head;
