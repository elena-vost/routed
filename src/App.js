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
          <NavLink to="/dog">Dog</Link>
          <NavLink to="/contact">Contact</Link>
          <NavLink to="/">About</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/dog" component={Dog} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}
export default App;
