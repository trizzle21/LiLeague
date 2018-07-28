import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login } from './login/loginContainer';
import { Register } from './login/registerContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Login}/>
          <Route path='/login'   component={Login}/>
          <Route path='/register'   component={Register}/>
        </div>
      </Router>
    );
  }
}

export default App;
