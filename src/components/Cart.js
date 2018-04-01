import React, {Component} from 'react';
import {Router, Link, Route, Switch} from 'react-router-dom';
import './Cart.css';
import ViewCart from './ViewCart';

const Cart = ({cart,onChange,delItem}) => {
    let total=0;
    let itemAmount=0;
    let cartDetail=[];
    cart.map((item)=>{
        total+=item.qty*item.price;
        itemAmount+=item.qty;
        let qtyOptions=[];
        for(let i=1;i<=item.limit;i++){
            qtyOptions.push(<option value={i}>{i}</option>)     
        }
        {/*the id attr is for updating the qty of related item*/}
        cartDetail.push(<li key={item.id} id={item.id} className='cartItem'>
            <img src='' alt='cartImg' className='cartImg'/>
            <span className='cartItemName'>{item.name}</span>
            <select value={item.qty} onChange={(event)=>onChange(event)} className='cartSelect'>{qtyOptions}</select>
            <span className='cartItemUnit'>{item.price}</span>
            <span className='cartSubTotal'>{item.qty*item.price}</span>
            <span className='delItem' onClick={(event)=>delItem(event)}>Remove</span>
        </li>)
    })
    cartDetail.unshift(<li key={'tablehead'} className='cartItem'>
            <span className='cartImg'></span>
            <span className='cartItemName'>Product</span>
            <span className='cartSelect'>Qty</span>
            <span className='cartItemUnit'>Unit Price</span>
            <span className='cartSubTotal'>Sub Total</span>
        </li>
    )

    return (
        <div>
            <div className='shoppingCart'>
                <div className='cartThumbnail'>
                    {itemAmount===0?null:<span className='itemAmount'>{ itemAmount }</span>}
                    <span >${total}</span>
                </div>
                <Link to='/viewcart' className='cart'><button>View Cart</button></Link>
            </div>
            <Route exact path='/viewcart' children={( {match, ...rest} )=>{
                console.log(...rest);
                return (match && <ViewCart cartDetail={cartDetail} {...rest} /> )
            }
            } />
    </div>
    )
}
export default Cart;
