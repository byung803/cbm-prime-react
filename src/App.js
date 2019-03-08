import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Button from "./components/button";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/button" component={Button} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
