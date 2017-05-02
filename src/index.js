import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Jtest } from './App';
import './index.css';

console.log(Jtest)

ReactDOM.render(
  <App />,
  document.getElementById('root')
    // <Jtest />,
    // document.getElementById('root')
);

ReactDOM.render(
  <Jtest />,
  document.getElementById('root')
);
