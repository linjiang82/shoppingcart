import React,{Component} from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';
import {products} from '../reducers';
import {addToCart} from '../actions/userActions';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => (
    {
        items:state.products,
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (item) => dispatch(addToCart(item)),
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Products));
