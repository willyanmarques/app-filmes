import React, { Component } from 'react';
import './App.css';
import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="app">
        <Routes/>
      </div>
     );
  }
}
 
export default App;