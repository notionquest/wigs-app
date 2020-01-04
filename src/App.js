import React from 'react';
import './App.scss';
import './scss/custom.scss';
import NavBarHome from './components/navbar/navbar';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <NavBarHome />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/:id'>
              <Contact />
            </Route>            
          </Switch>
        </BrowserRouter>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
