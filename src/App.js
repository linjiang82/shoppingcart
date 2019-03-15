import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Head from './components/Head';
import {Pro} from './containers/ProWrap';


class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <Pro />
      </div>
    );
  }
}
export default App;


// export default App;
