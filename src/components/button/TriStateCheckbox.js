import React, { Component } from "react";
import { TriStateCheckbox } from "primereact/tristatecheckbox";

export default class TriStateCheckboxDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>TriStateCheckbox</h1>
            <p>
              TriStateCheckbox is used to select either "true", "false" or
              "null" as the value.
            </p>
          </div>
        </div>

        <div className="content-section implementation">
          <h3 className="first">Value: {this.state.value + ""}</h3>
          <TriStateCheckbox
            value={this.state.value}
            onChange={e => this.setState({ value: e.value })}
          />
        </div>
      </div>
    );
  }
}
