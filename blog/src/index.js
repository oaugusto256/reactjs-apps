import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

class Hello extends React.Component {
  render () { return <div>Hello!</div> };
}

class Bye extends React.Component {
  render () { return <div>Bye!</div> }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/hello" component={Hello} />
      <Route path="/bye" component={Bye} />
    </div>
  </BrowserRouter>
  ,document.getElementById('root'));

  registerServiceWorker();
