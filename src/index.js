import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/' component={App} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
