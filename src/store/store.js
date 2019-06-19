import reducer from '../reducers';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import promise from 'redux-promise-middleware';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as asyncInitialState from 'redux-async-initial-state';


//const middleware = applyMiddleware(promise(),thunk, axios, logger);

const loadStore = (currentState) => {
    return new Promise(resolve => {
        /*'https://cors-anywhere.herokuapp.com/'+'http://101.183.153.218/products.json'*/
        axios('./products.json')
            // .then(response => response.json())
            .then(products => {
                console.log(currentState)
                resolve({ ...currentState,
                    products:products.data,
                    cart:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
                })
            });
    });
}

export default createStore(
    reducer,
    compose(applyMiddleware(thunk,logger,asyncInitialState.middleware(loadStore)))
);

