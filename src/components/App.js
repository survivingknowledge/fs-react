import React, { Component } from 'react';

// import ProductList from './product/ProductList';
import TimersDashboard from './timer/TimersDashboard';

class App extends Component {
  render(){
    return(
      <div className="main ui">
        <h1 className="ui dividing centered header">Timers</h1>
        <TimersDashboard />
      </div>
    );
  }
}

export default App;
