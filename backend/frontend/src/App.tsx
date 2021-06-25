import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Nav from './components/header/Navigation/Nav';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import HowIitWorks from './components/pages/HowItWorks/How';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/how" component={HowIitWorks} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
