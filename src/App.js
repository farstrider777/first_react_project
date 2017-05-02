import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-21.jpg" className="App-logo" alt="logo" />
          <h2>Welcome to React (puppy version)</h2>
        </div>
        <p className="App-intro">
          This is where we have fun and change stuff and make cool computer things happen.
        </p>
        <div><Jtest name="Sara" job="developer" /></div>
      </div>

    );
  }
}

function Jtest (props) {
  return <h1>Hello, {props.name} Do you like being a {props.job}</h1>;
}
//export default App;
export {App, Jtest}
