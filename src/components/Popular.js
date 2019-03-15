import React from 'react';
import Item from './Item';
import './Products.css';


const Popular = ({items, onClick}) => {
  return (
    <div className='proCtn'>
      <div>
        {items.map((item) => {
          return item.popular
            ? <Item key={item.id} {...item} onClick={()=>{onClick(item)} } isPop={true}></Item>
            : null
        })
}
      </div>
    </div>

  )
}

export default Popular;