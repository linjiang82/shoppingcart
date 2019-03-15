import { combineReducers } from 'redux';
import * as asyncInitialState from 'redux-async-initial-state';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
import proListReducer from './proListReducer'

const reducer = asyncInitialState.outerReducer(combineReducers({
    cart:cartReducer,
    products:productsReducer,
    proList:proListReducer
    //asyncInitialState: asyncInitialState.innerReducer,
}));

export default reducer;
