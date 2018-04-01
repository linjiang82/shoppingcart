import Item from './Item';
import React from 'react';
import './Products.css';

const Products = ({items,onClick}) => {
    return (
        <div className='proCtn'>
            <p className='proGrid'>Products</p>
            <div>
                {
                    items.map((item)=>{
                    return  <Item {...item} onClick={() => onClick(item)} > </Item>
                    })
                }
            </div>
        </div>
    )

}

export default Products;
