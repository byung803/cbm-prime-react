import React, { Component } from "react";

export default class Home extends Component {
  render() {
    const decorationLine = { textDecorationLine: "line-through" };
    return (
      <div>
        <div>
          <ol>
            <li style={decorationLine}>AutoComplete</li>
            <li style={decorationLine}>Checkbox</li>
            <li style={decorationLine}>Chips</li>
            <li style={decorationLine}>InputText(keyfilter 포함)</li>
            <li style={decorationLine}>Multi Select</li>
            <li style={decorationLine}>Radio Button</li>
            <li style={decorationLine}>Toggle Button</li>
            <li>Calendar</li>
            <li style={decorationLine}>Dropdown</li>
            <li style={decorationLine}>InputMask</li>
            <li style={decorationLine}>InputSwitch</li>
            <li style={decorationLine}>InputTextArea</li>
            <li style={decorationLine}>TriState</li>
            <li style={decorationLine}>Button</li>
            <li>DataTable</li>
            <li>Accordian</li>
            <li>Panel</li>
            <li>ScrollPanel</li>
          </ol>
        </div>
      </div>
    );
  }
}
