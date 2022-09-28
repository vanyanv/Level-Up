import React, { Component } from 'react';
import Navbar from './Navbar';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Login />
      </div>
    );
  }
}

export default App;
