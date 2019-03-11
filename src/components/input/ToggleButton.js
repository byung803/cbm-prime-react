import React, { Component } from "react";
import { ToggleButton } from "primereact/togglebutton";

export default class ToggleButtonDemo extends Component {
  constructor() {
    super();
    this.state = {
      checked1: false,
      checked2: false
    };
  }

  render() {
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>ToggleButton</h1>
            <p>
              ToggleButton is used to select a boolean value using a button.
            </p>
          </div>
        </div>

        <div className="content-section implementation">
          <h3>Basic</h3>
          <ToggleButton
            style={{ width: "150px" }}
            checked={this.state.checked1}
            onChange={e => this.setState({ checked1: e.value })}
          />
          <p>Selected Value: {this.state.checked1 ? "true" : "false"}</p>

          <h3>Custom</h3>
          <ToggleButton
            style={{ width: "150px" }}
            onLabel="I confirm"
            offLabel="I reject"
            onIcon="pi pi-check"
            offIcon="pi pi-times"
            checked={this.state.checked2}
            onChange={e => this.setState({ checked2: e.value })}
          />
          <p>Selected Value: {this.state.checked2 ? "true" : "false"}</p>
        </div>
      </div>
    );
  }
}
