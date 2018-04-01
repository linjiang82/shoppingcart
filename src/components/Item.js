import React from 'react';
import './Item.css';
import {Button} from 'react-bootstrap';
import mbp from '../mbp.jpg';
import iphone from '../iphone.jpg';
import ipad from '../ipad.jpg';

const Item = ({id, name, qty, price, src, onClick}) => {
    return (
        <div key={id} className='item'>
            <img src={src} />
            <div className='description'>
                <p>${price}</p>
                <p>{name+' '+qty}</p>
                {qty!==0?<Button onClick={()=>onClick()}>Buy Now</Button>:<Button disabled>Sold Out</Button>}
            </div>
        </div>
    )
}

export default Item;
