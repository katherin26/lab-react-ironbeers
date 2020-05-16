import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Beers from "./components/Beers";
import Beer from "./components/Beer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/new-beer">
            <NewBeer />
          </Route>
          <Route path="/random-beer">
            <RandomBeer />
          </Route>
          <Route
            path="/beers/:id"
            render={(props) => <Beer {...props} />}
          ></Route>
          <Route path="/beers">
            <Beers />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
