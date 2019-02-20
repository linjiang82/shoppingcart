export const addToCart = product => {
return {
    type:'addToCart',
    id:product.id,
    name:product.name,
    qty:1,
    price:product.price,
    limit:product.limit,
}
}
export const changeQty = e => {
    return {
        type:'changeQty',
        id:parseInt(e.target.parentNode.getAttribute('id')),
        qty:parseInt(e.target.value),
    }
}
export const delItem = e => {
    return {
        type:'delItem',
        id:parseInt(e.target.parentNode.getAttribute('id')),
    }
}

export const filterPro= kw => {
    return {
        type:'filterPro',
        keyword:kw,
    }
}

export const selectCat = kw => {
    console.log(kw)
    return {
        type:'selectCat',
        keyword:kw
    }
}

export const delSelectCat = kw => {
    return {
    type:'delSelectCat',
    keyword: kw
    }
}


