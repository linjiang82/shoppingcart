const cartReducer = (state=[],action) => {
    if(action.type==='addToCart'){
        let exist=false;
        state = state.map(i => {
            if(i.name===action.name){
                exist=true;
                return {
                    ...i,
                    qty:i.qty+1,
                }
            }
            else return {
                ...i
            }
        })
        if(!exist){
            return [
                ...state,
                {
                    id:action.id,
                    name:action.name,
                    qty:action.qty,
                    price:action.price,
                    limit:action.limit,
                }
            ]
        }
    }    
    if(action.type==='changeQty'){
        state = state.map(i => {
            if(i.id===action.id){
                return {
                    ...i,
                    qty:action.qty,
                }
            }
            else {
                return {
                ...i
            };
            }
        })
    }
    if(action.type==='delItem'){
        state = state.filter(i => {
            return (i.id!==action.id)
        })
    }
        return state;  
}

export default cartReducer;
