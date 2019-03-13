import React, { Component } from "react";
import { Dropdown } from "primereact/dropdown";

export default class DropdownDemo extends Component {
  constructor() {
    super();
    this.state = {
      city: null,
      car: null,
      car2: "BMW",
      car3: null
    };

    this.onCityChange = this.onCityChange.bind(this);
    this.onCarChange = this.onCarChange.bind(this);
    this.onCarChange2 = this.onCarChange2.bind(this);
    this.onCarChange3 = this.onCarChange3.bind(this);
  }

  onCityChange(e) {
    this.setState({ city: e.value });
  }

  onCarChange(e) {
    this.setState({ car: e.value });
  }

  onCarChange2(e) {
    this.setState({ car2: e.value });
  }

  onCarChange3(e) {
    this.setState({ car3: e.value });
  }

  carTemplate(option) {
    if (!option.value) {
      return option.label;
    } else {
      return (
        <div className="p-clearfix">
          <span style={{ float: "right", margin: ".5em .25em 0 0" }}>
            {option.label}
          </span>
        </div>
      );
    }
  }

  render() {
    const cities = [
      { name: "New York1111111111111111111111", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];

    const cars = [
      { label: "Audi", value: "Audi", category: "1" },
      { label: "BMW", value: "BMW", category: "1" },
      { label: "Fiat", value: "Fiat", category: "1" },
      { label: "Honda", value: "Honda", category: "2" },
      { label: "Jaguar", value: "Jaguar", category: "2" },
      { label: "Mercedes", value: "Mercedes", category: "2" },
      { label: "Renault", value: "Renault", category: "3" },
      { label: "VW", value: "VW", category: "3" },
      { label: "Volvo", value: "Volvo", category: "3" }
    ];

    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>Dropdown</h1>
            <p>
              Dropdown is used to select an item from a collection of options.
            </p>
          </div>
        </div>

        <div className="content-section implementation">
          <h3>Basic</h3>
          <Dropdown
            value={this.state.city}
            options={cities}
            onChange={this.onCityChange}
            autoWidth={true}
            style={{ width: "300px" }}
            placeholder="Select a City"
            optionLabel="name"
            filter={true}
            filterPlaceholder="Select a City!"
          />
          <div style={{ marginTop: ".5em" }}>
            {this.state.city
              ? "Selected City: " + this.state.city.name
              : "No city selected"}
          </div>

          <h3>Editable</h3>
          <Dropdown
            value={this.state.car}
            options={cars}
            onChange={this.onCarChange}
            style={{ width: "150px" }}
            editable={true}
            placeholder="Select a Brand"
          />
          <div style={{ marginTop: ".5em" }}>
            {this.state.car
              ? "Selected Car: " + this.state.car
              : "No car selected"}
          </div>

          <h3>Advanced</h3>
          <Dropdown
            value={this.state.car2}
            options={cars}
            onChange={this.onCarChange2}
            itemTemplate={this.carTemplate}
            style={{ width: "150px" }}
            filter={true}
            filterPlaceholder="Select Car"
            showClear={true}
          />
          <div style={{ marginTop: ".5em" }}>
            {this.state.car2
              ? "Selected Car: " + this.state.car2
              : "No car selected"}
          </div>

          <h3>Custom</h3>
          <Dropdown
            value={this.state.car3}
            options={cars}
            onChange={this.onCarChange3}
            itemTemplate={this.carTemplate}
            style={{ width: "150px" }}
            filter={true}
            filterPlaceholder="Select Car"
            filterBy="label,value,category"
            showClear={true}
          />
          <div style={{ marginTop: ".5em" }}>
            {this.state.car3
              ? "Selected Car: " + this.state.car3
              : "No car selected"}
          </div>
        </div>
      </div>
    );
  }
}
