import React from 'react'
import './App.css';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Navbar from './components/Navbar'
import Landing from './views/Landing'



function App() {
  return (
    <>
      <BrowserRouter>
        <div className="">
          <Navbar />
          <Switch>
            <Route path="/app" render={props => <Landing {...props}/>}/>
            <Redirect from="/" to="/app" />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
