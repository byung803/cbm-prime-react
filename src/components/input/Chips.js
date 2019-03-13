import React, { Component } from "react";
import { Chips } from "primereact/chips";

export default class ChipsDemo extends Component {
  constructor() {
    super();
    this.state = {
      values1: [],
      values2: []
    };
  }

  customChip(item) {
    return (
      <div>
        <span>{item} - (active) </span>
        <i className="pi pi-user-plus" style={{ fontSize: "14px" }} />
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>Chips</h1>
            <p>Chips is used to enter multiple values on an input field.</p>
          </div>
        </div>

        <div className="content-section implementation">
          <h3>Basic</h3>
          <Chips
            value={this.state.values1}
            onChange={e => this.setState({ values1: e.value })}
            placeholder="abcd"
          />

          <h3>Template</h3>
          <Chips
            value={this.state.values2}
            onChange={e => this.setState({ values2: e.value })}
            max={5}
            itemTemplate={this.customChip}
          />
        </div>
      </div>
    );
  }
}
