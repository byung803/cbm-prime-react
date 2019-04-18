import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <p>
          <span>
            <Link to="/">Home</Link>{" "}
          </span>
        </p>
        <h3>Buttons</h3>
        <p>
          <span>
            <Link to="/button">Button</Link>{" "}
          </span>
          <span>
            <Link to="/dropdown">Dropdown</Link>{" "}
          </span>
          <span>
            <Link to="/tristate">TriStateCheckbox</Link>
            {"  "}
          </span>
          <span>
            <Link to="/togglebutton">ToggleButton</Link>{" "}
          </span>
          <span>
            <Link to="/multiselect">MultiSelect</Link>{" "}
          </span>
          <span>
            <Link to="/radiobutton">RadioButton</Link>{" "}
          </span>
        </p>
        <h3>Inputs</h3>
        <p>
          <span>
            <Link to="/inputtext">InputText</Link>{" "}
          </span>
          <span>
            <Link to="/chips">Chips</Link>{" "}
          </span>
          <span>
            <Link to="/inputmask">InputMask</Link>{" "}
          </span>
        </p>
        <h3>Milestone2</h3>
          <span>
            <Link to="/splitbutton">SplitButton</Link>{" "}
          </span>
      </div>
    );
  }
}
