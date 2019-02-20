import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import ReactDOM from 'react-dom';
import App from './App';
import {Pro, Sp, Pop} from './containers/ProWrap';
import Head from './components/Head';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Banner from './components/Banner';
import Prolist from './components/ProList'
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <div className='ctner'>
                <Route path='/' component={Head} className='head'/>
                <Banner className='banner'/>
                <Prolist className='prolist'/>
                <Route exact path='/' component={Pro} />
                <Route exact path='/Home' component={Pro} />
                <Route exact path='/Special' component={Sp} />
                <Route exact path='/Popular' component={Pop} />
        </div>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
