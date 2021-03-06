import React from "react";
import "./ViewCart.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

let ViewCart = props => {
  return (
    <div className='viewCartOverlay'>
      <div className='viewCart'>
        <div>
          {/*go backk to / ATM, will goback to history last entry*/}
          {/*<Link to='/' className='closeCart'>X</Link>*/}
          <Button className='closeCart' onClick={() => props.history.goBack()}>
            X
          </Button>
        </div>
        <ul className='cartDetail'>{props.cartDetail}</ul>
      </div>
    </div>
  );
};

export default ViewCart;
