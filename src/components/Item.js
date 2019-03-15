import React from 'react';
import './Item.css';
import {Button} from 'react-bootstrap';
import mbp from '../mbp.jpg';
import iphone from '../iphone.jpg';
import ipad from '../ipad.jpg';

const Item = ({id, name, qty, price, src, onClick, isSpe=false, isPop=false}) => {
    return (
        <div className='item'>
            <img className='img' src={src}/>
            {isSpe?<div className='special'></div>:null}
            {isPop?<div className='popular'></div>:null}
            <div className='description'>
                <p>${price}</p>
                <p>{name+' '+qty}</p>
                {qty!==0?<Button onClick={()=>onClick()}>Buy Now</Button>:<Button disabled>Sold Out</Button>}
            </div>
        </div>
    )
}

export default Item;
