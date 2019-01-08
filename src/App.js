import React, { Component } from 'react';
import './App.css';
import NavBar from './ui/NavBar';
import Home from './Container/Home';


class App extends Component {
  render() {
    const logo = "team dias"
    return (
      <div className="container">
        <NavBar logo={logo} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
