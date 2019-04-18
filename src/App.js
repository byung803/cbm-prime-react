import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import InputText from "./components/input/InputText";
import InputMask from "./components/input/InputMask";
import Chips from "./components/input/Chips";
import ToggleButton from "./components/button/ToggleButton";
import Button from "./components/button/Button";
import Dropdown from "./components/button/Dropdown";
import TriStateCheckbox from "./components/button/TriStateCheckbox";
import MultiSelect from "./components/button/MultiSelect";
import RadioButton from "./components/button/RadioButton";
import SplitButton from "./components/milestone2/SplitButton";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/button" component={Button} />
          <Route exact path="/inputtext" component={InputText} />
          <Route exact path="/togglebutton" component={ToggleButton} />
          <Route exact path="/dropdown" component={Dropdown} />
          <Route exact path="/tristate" component={TriStateCheckbox} />
          <Route exact path="/chips" component={Chips} />
          <Route exact path="/inputmask" component={InputMask} />
          <Route exact path="/multiselect" component={MultiSelect} />
          <Route exact path="/radiobutton" component={RadioButton} />
          <Route exact path="/splitbutton" component={SplitButton} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
