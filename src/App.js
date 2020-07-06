import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

import Details from "./components/Details";

import Cart from "./components/cart";

import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
