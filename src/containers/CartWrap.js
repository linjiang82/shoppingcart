import {connect} from 'react-redux';
import Cart from '../components/Cart';
import {withRouter} from 'react-router-dom';
import {changeQty} from '../actions/userActions';
import {delItem} from '../actions/userActions';

const mapStateToProps = (state) => {
    return {
        cart:state.cart,
        products:state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        onChange : (e)=> {
        dispatch(changeQty(e))
        },
        delItem : (e)=> {
        dispatch(delItem(e))}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
