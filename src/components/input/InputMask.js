import React, { Component } from "react";
import { InputMask } from "primereact/inputmask";

export default class InputMaskDemo extends Component {
  constructor() {
    super();
    this.state = {
      val1: null,
      val2: null,
      val3: null,
      val4: null,
      val5: null,
      val6: null
    };
  }
  render() {
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>InputMask</h1>
            <p>
              InputMask component is used to enter input in a certain format
              such as numeric, date, currency, email and phone.
            </p>
          </div>
        </div>

        <div className="content-section implementation inputgrid-demo">
          <div className="p-grid p-fluid">
            <div className="p-col-12 p-md-4">
              <h3>Basic {this.state.val1}</h3>
              <InputMask
                mask="99-999999"
                value={this.state.val1}
                placeholder="99-999999"
                disabled={true}
                onChange={e => this.setState({ val1: e.value })}
              />
            </div>

            <div className="p-col-12 p-md-4">
              <h3>SSN {this.state.val2}</h3>
              <InputMask
                mask="999-99-9999"
                value={this.state.val2}
                readonly={true}
                placeholder="999-99-9999"
                onChange={e => this.setState({ val2: e.value })}
              />
            </div>
            <div className="p-col-12 p-md-4">
              <h3>Date {this.state.val3}</h3>
              <InputMask
                mask="99/99/9999"
                value={this.state.val3}
                placeholder="99/99/9999"
                slotChar="mm/dd/yyyy"
                onChange={e => this.setState({ val3: e.value })}
              />
            </div>

            <div className="p-col-12 p-md-4">
              <h3>Phone {this.state.val4}</h3>
              <InputMask
                mask="(999) 999-9999"
                value={this.state.val4}
                placeholder="(999) 999-9999"
                onChange={e => this.setState({ val4: e.value })}
              />
            </div>

            <div className="p-col-12 p-md-4">
              <h3>Phone Ext {this.state.val5}</h3>
              <InputMask
                mask="(999) 999-9999? x99999"
                value={this.state.val5}
                placeholder="(999) 999-9999? x99999"
                onChange={e => this.setState({ val5: e.value })}
              />
            </div>

            <div className="p-col-12 p-md-4">
              <h3>Serial Number {this.state.val6}</h3>
              <InputMask
                mask="a*-999-a999"
                value={this.state.val6}
                placeholder="a*-999-a999"
                onChange={e => this.setState({ val6: e.value })}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
