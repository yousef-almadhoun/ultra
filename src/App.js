import React, { Component } from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Index from './Components/Index';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Index} />
          <Route path='/contact' component={Contact} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
