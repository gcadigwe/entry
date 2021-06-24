import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Nav from './components/header/Navigation/Nav';
import Home from './components/body/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
