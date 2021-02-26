import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <a href="/dog">Dog</a>
          <a href="/contact">Contact</a>
          <a href="/">About</a>
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
