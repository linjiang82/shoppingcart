// import userActions from '../actions/userActions';

const productsReducer = (state = [], action) => {
  if (action.type === "addToCart") {
    return state.map(i => {
      if (i.name === action.name) {
        return { ...i, qty: i.qty - 1 };
      } else return { ...i };
    });
  }
  else if(action.type === 'getProSuccess') {
    return state = action.payload
  }
  return state;
};

export default productsReducer;
