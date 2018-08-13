import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { Register } from './login/RegisterContainer';
import LoginContainer from './login/LoginContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={LoginContainer}/>
          <Route path='/login'   component={LoginContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
