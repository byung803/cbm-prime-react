import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Button from "./components/button/Button";
import SplitButton from "./components/button/SplitButton";
import InputText from "./components/input/InputText";
import ToggleButton from "./components/input/ToggleButton";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/button" component={Button} />
          <Route exact path="/splitbutton" component={SplitButton} />
          <Route exact path="/inputtext" component={InputText} />
          <Route exact path="/togglebutton" component={ToggleButton} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
