import React from 'react';
import './App.css';
import NavBarHome from './components/navbar/navbar';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <NavBarHome />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
