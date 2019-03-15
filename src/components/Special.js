import React from 'react';
import Item from './Item';
import './Products.css';


const Special = ({items, onClick}) => {
  return (
    <div className='proCtn'>
      <div>
        {items.map((item) => {
          return item.special
            ? <Item key={item.id} {...item} onClick={()=>{onClick(item)}} isSpe={true}></Item>
            : null
        })
}
      </div>
    </div>

  )
}

export default Special;