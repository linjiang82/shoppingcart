import React,{Component} from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';
import Special from '../components/Special';
import Popular from '../components/Popular';
import {products} from '../reducers';
import {addToCart} from '../actions/userActions';
import {withRouter} from 'react-router';
import {contain} from '../utils/utils';

const mapStateToProps = (state) =>{ 
    let items = state.products.filter(i => {
        if(state.proList.searchKeyword=='' && state.proList.categoryKeyword.length==0)
        return true;
        else if(state.proList.searchKeyword==''){
            return contain(i,state.proList.categoryKeyword);
        }
        else if(state.proList.categoryKeyword.length==0){
            return  i.name.toLowerCase().includes(state.proList.searchKeyword.toLowerCase())
        }
        else
            return i.name.toLowerCase().includes(state.proList.searchKeyword.toLowerCase()) && contain(i,state.proList.categoryKeyword)

    }
        
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
