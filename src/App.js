import React from 'react';
import './App.css';
import Home from './components/home'
import Navbar from './components/navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <div className="container">
            <Route exact path="/" component={Home} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
