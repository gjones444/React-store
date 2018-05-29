import React, { Component } from 'react';
import Navbar from './components/Navbar.js'
import Products from './components/Products.js'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Products/>
      </div>
    );
  }
}

export default App;
