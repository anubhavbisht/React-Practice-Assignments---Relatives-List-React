import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      relatives: ["Satyam", "Dibyansh", "Anubhav"],
    };
  }
  render() {
    return (
      <div id="main">
        <ol key="relativeList">
          {this.state.relatives.map((name) => (
            <li
              key={`relativeListItem${1 + this.state.relatives.indexOf(name)}`}
            >
              {name}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
