import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from "./App";
import {About} from "./about";
import {Header} from "./header";
import {Contacts} from "./contacts";

export function RouteTable() {
  return (
    <Router>
        <Header title="Gnits Task List"/>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contacts">
        <Contacts />
      </Route>
    </Router>
  )
}