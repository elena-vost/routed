import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <NavLink to="/dog">Dog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/">About</NavLink>
        </nav>
        <Switch>
          <Route
            exact
            activeClassName="active-link"
            exact
            path="/"
            component={About}
          />
          <Route
            exact
            activeClassName="active-link"
            exact
            path="/dog"
            component={Dog}
          />
          <Route
            exact
            activeClassName="active-link"
            exact
            path="/contact"
            component={Contact}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
