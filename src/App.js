import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Head from './components/Head';
import ProWrap from './containers/ProWrap';


class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <ProWrap />
      </div>
    );
  }
}
export default App;


// export default App;
