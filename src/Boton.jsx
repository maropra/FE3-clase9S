import React from "react";

class Boton extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "blanco"
    };
  }

  handleColorChange = () => {
    this.setState({
      color: "rojo"
    });
    console.log(this.state);
  };

  render() {
    return <button onClick={this.handleColorChange}>Click me!</button>;
  }
}

export default Boton;
