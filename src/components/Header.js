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
            <Link to="/splitbutton">SplitButton</Link>{" "}
          </span>
        </p>
        <h3>Inputs</h3>
        <p>
          <span>
            <Link to="/inputtext">InputText</Link>{" "}
          </span>
          <span>
            <Link to="/togglebutton">ToggleButton</Link>{" "}
          </span>
        </p>
      </div>
    );
  }
}
