import Item from './Item';
import React from 'react';
import './Products.css';

const Products = ({items,onClick}) => {
    return (
        <div className='proCtn'>
                {
                    items.map((item)=>{
                    return  <Item key={item.id} {...item} onClick={() => onClick(item)} > </Item>
                    })
                }
        </div>
    )

}

export default Products;
