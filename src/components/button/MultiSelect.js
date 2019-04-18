import React, { Component } from "react";
import { MultiSelect } from "primereact/multiselect";

export default class MultiSelectDemo extends Component {
  constructor() {
    super();
    this.state = {
      cars1: [],
      cars2: []
    };
    this.carTemplate = this.carTemplate.bind(this);
    this.selectedCarTemplate = this.selectedCarTemplate.bind(this);
  }

  carTemplate(option) {
    const logoPath =
      "showcase/resources/demo/images/car/" + option.label + ".png";

    return (
      <div className="p-clearfix">
        <img
          alt={option.label}
          src={logoPath}
          style={{ width: "24px", verticalAlign: "middle" }}
        />
        <span style={{ fontSize: "1em", float: "right", marginTop: "4px" }}>
          {option.label}
        </span>
      </div>
    );
  }

  selectedCarTemplate(value) {
    if (value) {
      const logoPath = "showcase/resources/demo/images/car/" + value + ".png";

      return (
        <div className="my-multiselected-item-token">
          <img
            alt={value}
            src={logoPath}
            style={{
              width: "20px",
              verticalAlign: "middle",
              marginRight: ".5em"
            }}
          />
          <span>{value}</span>
        </div>
      );
    } else {
      return <span className="my-multiselected-empty-token">Choose</span>;
    }
  }

  render() {
    const cars = [
      { label: "Audi", value: "Audi" },
      { label: "BMW", value: "BMW" },
      { label: "Fiat", value: "Fiat" },
      { label: "Honda", value: "Honda" },
      { label: "Jaguar", value: "Jaguar" },
      { label: "Mercedes", value: "Mercedes" },
      { label: "Renault", value: "Renault" },
      { label: "VW", value: "VW" },
      { label: "Volvo", value: "Volvo" }
    ];

    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>MultiSelect</h1>
            <p>
              MultiSelect is used to select multiple items from a collection.
            </p>
          </div>
        </div>

        <div className="content-section implementation multiselect-demo">
          <h3>Basic</h3>
          <MultiSelect
            value={this.state.cars1}
            options={cars}
            onChange={e => this.setState({ cars1: e.value })}
            style={{ minWidth: "12em" }}
            filter={true}
            placeholder="Choose"
            fixedPlaceholder={true}
          />

          <h3>Templating</h3>
          <MultiSelect
            value={this.state.cars2}
            options={cars}
            onChange={e => this.setState({ cars2: e.value })}
            style={{ minWidth: "12em" }}
            filter={true}
            itemTemplate={this.carTemplate}
            selectedItemTemplate={this.selectedCarTemplate}
          />
        </div>
      </div>
    );
  }
}
