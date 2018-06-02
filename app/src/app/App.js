import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login } from './login/loginContainer';



// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Route exact path='/' component={Login}/>
//           <Route path='/login'   component={Login}/>
//         </div>
//       </Router>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          LOLOL
        </p>
      </div>
    );
  }
}

export default App;
