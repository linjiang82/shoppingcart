import React,{Component} from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';
import Special from '../components/Special';
import Popular from '../components/Popular';
import {products} from '../reducers';
import {addToCart} from '../actions/userActions';
import {withRouter} from 'react-router';

const mapStateToProps = (state) =>{ 
    console.log(state.products);
    let items = state.products.filter(i =>
        i.name.toLowerCase().includes(state.proList.searchKeyword.toLowerCase())
    )
    return {
        items:items,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (item) => dispatch(addToCart(item)),
    }
}
let myConnect = connect(mapStateToProps,mapDispatchToProps);
export const Pro =  withRouter(myConnect(Products));
export const Sp = withRouter(myConnect(Special));
export const Pop = withRouter(myConnect(Popular)); 
