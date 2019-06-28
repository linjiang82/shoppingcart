import React, {Component} from 'react';
import {Router, Link, Route, Switch} from 'react-router-dom';
import './Cart.css';
import ViewCart from './ViewCart';
import getPro from '../actions/proActions'

class Cart extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        getPro(this.props.dispatch)
    }
    //using componentDidUpdate() to save the cart in localstorage//
    componentDidUpdate(){
        localStorage.setItem('cart',JSON.stringify(this.props.cart));
    }
    render(){
       let total=0;
       let itemAmount=0;
       let cartDetail=[];
       this.props.cart.map((item)=>{
           total+=item.qty*item.price;
           itemAmount+=item.qty;
           let qtyOptions=[];
           for(let i=1;i<=item.limit;i++){
               qtyOptions.push(<option key={i} value={i}>{i}</option>)     
           }
           let src='';
           if(this.props.products.length!==0){
               console.log(this.props.products)
            src = this.props.products.find(product=>product.id==item.id).src;}
           {/*the id attr is necessary for updating the qty of related item*/}
           cartDetail.push(<li key={item.id} id={item.id} className='cartItem'>
               <img src={src} alt='cartImg' className='cartImg'/>
               <span className='cartItemName'>{item.name}</span>
               <select value={item.qty} onChange={(event)=>this.props.onChange(event)} className='cartSelect'>{qtyOptions}</select>
               <span className='cartItemUnit'>{item.price}</span>
               <span className='cartSubTotal'>{item.qty*item.price}</span>
               <span className='delItem' onClick={(event)=>this.props.delItem(event)}>Remove</span>
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
            <Route exact path='/viewcart' children={( { match,  ...rest} )=>{
                return (match && <ViewCart cartDetail={cartDetail} {...rest} /> )
            }
            } />
    </div>
    )
    }
    }

export default Cart;
