import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.onClickBtn = this.onClickBtn.bind(this);
    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  onClickBtn() {
    console.log("Button has been clicked!");
  }

  render() {
    return (
      <div>
        <button onClick={this.countUp}>Click Me</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default App;
