import React from 'react';
import './ViewCart.css';
import {Link} from 'react-router-dom';

let ViewCart = (props) =>{ 
    console.log(props) ;
    return(<div className='viewCart'>
        <div>
            {/*go backk to / ATM, will goback to history last entry*/}
            <Link to='/' className='closeCart'>X</Link>
        </div>
        <ul className='cartDetail'>{props.cartDetail}</ul>
    </div>)
}

export default ViewCart;
