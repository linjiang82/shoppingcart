import React from "react";
import { Nav, Navbar, NavItem, Col } from "react-bootstrap";
import { Route, Link, NavLink } from "react-router-dom";
import CartWrap from "../containers/CartWrap";
import "./Head.css";

const Head = () => {
  return (
    <div className='head'>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to='/home' activeClassName='selected'>
              Home
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Col sm={6}>
          <Navbar.Collapse>
            <Nav>
              <NavItem
                componentClass={NavLink}
                eventKey={1}
                href='/Special'
                to='/Special'
                activeClassName='selected'>
                Special
              </NavItem>
              <NavItem
                componentClass={NavLink}
                eventKey={1}
                href='/Popular'
                to='/Popular'
                activeClassName='selected'>
                Popular
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Col>
        <Col sm={4}>
          <CartWrap />
        </Col>
      </Navbar>
    </div>
  );
};

export default Head;
