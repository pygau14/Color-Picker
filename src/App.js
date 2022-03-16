import React from "react";
import "./App.css";
import ColorBlock from "./Components/ColorBlock";
import "./Components/ColorBlock.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "grey"
    };
  }
  changeColor = (colorValue) => {
    this.setState({
      color: colorValue
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <ColorBlock color="red" onClick={this.changeColor} />
          <ColorBlock color="green" onClick={this.changeColor} />
          <ColorBlock color="orange" onClick={this.changeColor} />
          <ColorBlock color="blue" onClick={this.changeColor} />
          <ColorBlock color="yellow" onClick={this.changeColor} />
        </div>
        <div
          className="target"
          style={{
            backgroundColor: this.state.color
          }}
        ></div>
      </>
    );
  }
}

export default App;
