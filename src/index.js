import React from "react";
import App from "./App.js";
import { render } from "react-dom";

class Tentativa extends React.Component {
  render() {
    return (
      <div className="container">
        <App />
      </div>
    );
  }
}

render(<Tentativa />, window.document.getElementById("root"));
