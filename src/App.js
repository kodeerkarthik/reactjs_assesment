import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from './Component/Login.js';
import Register from './Component/Register';
import Info from './Component/Info';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/info' component={Info}></Route>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/reg' component={Register}></Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
