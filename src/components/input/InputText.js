import React, { Component } from "react";
import { InputText } from "primereact/inputtext";

export default class InputTextDemo extends Component {
  constructor() {
    super();
    this.state = {
      value: null
    };
  }

  toggle() {
    this.setState({ disabled: !this.state.disabled });
  }

  render() {
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>InputText</h1>
            <p>
              InputText is an extension to standard input element with theming
              and keyfiltering.
            </p>
          </div>
        </div>

        <div className="content-section implementation">
          <div className="content-section implementation">
            <h3 className="first">Basic</h3>
            <InputText
              value={this.state.value1}
              onChange={e => this.setState({ value1: e.target.value })}
            />
            <span style={{ marginLeft: ".5em" }}>{this.state.value1}</span>

            <h3>Floating Label</h3>
            <span className="p-float-label">
              <InputText
                id="float-input"
                type="text"
                size="30"
                value={this.state.value2}
                onChange={e => this.setState({ value2: e.target.value })}
              />
              <label htmlFor="float-input">Username</label>
            </span>

            <h3>KeyFilter - Positive Number Only</h3>
            <InputText
              type="text"
              keyfilter={/[0-9]/}
              validateOnly={false}
              value={this.state.value3}
              tooltip="Keyfilter Tooltip"
              onChange={e => this.setState({ value3: e.target.value })}
            />
          </div>
        </div>
      </div>
    );
  }
}
