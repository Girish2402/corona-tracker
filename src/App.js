import React from 'react';
import './App.css';
import Home from './components/home'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Home/>
      </div>
    </div>
  );
}

export default App;
