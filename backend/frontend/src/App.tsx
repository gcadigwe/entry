import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Nav from './components/header/Navigation/Nav';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Dashboard from './components/pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        {/* <Route exact path="/how" component={HowIitWorks} /> */}
        <Route exact path="/">
          <Nav />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
